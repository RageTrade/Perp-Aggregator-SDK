import KwentaSDK from "@kwenta/sdk";
import { BigNumber, UnsignedTransaction, BigNumberish } from "ethers";
import {
  ExtendedPosition,
  IExchange,
  Market,
  Order,
  OrderAction,
  Token,
  MarketIdentifier,
  CollateralData,
  Position,
  OrderIdentifier,
  ExtendedOrder,
  ExtendedMarket,
  DynamicMarketMetadata,
  OpenMarkets,
  OpenMarketData,
  Trade,
  TradeHistory,
  HistoricalOrderType,
  NumberDecimal,
  PROTOCOL_NAME,
  Provider,
  UnsignedTxWithMetadata,
  DEFAULT_SESSION_KEY,
} from "../interface";
import Wei, { wei } from "@synthetixio/wei";
import {
  ContractOrderType,
  FuturesMarket,
  FuturesMarketKey,
  PositionSide,
} from "@kwenta/sdk/dist/types";
import {
  FuturesMarketAsset,
  FuturesPosition,
} from "@kwenta/sdk/dist/types/futures";
import {
  formatN,
  getEnumEntryByValue,
  logObject,
  toNumberDecimal,
  applySlippage,
} from "../common/helper";
import { getExplorerUrl } from "../configs/gmx/chains";
import { timer } from "execution-time-decorators";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import { getTokenPrice, getTokenPrice18 } from "../configs/pyth/prices";

export default class SynthetixV2Service implements IExchange {
  private opChainId = 10;
  private sdk: KwentaSDK;
  private sUSDAddr = "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9";
  private sUsd: Token = {
    name: "Synthetix USD",
    symbol: "sUSD",
    decimals: "18",
    address: this.sUSDAddr,
  };
  private swAddr: string;
  private protocolIdentifier: PROTOCOL_NAME = "SYNTHETIX_V2";
  private decimals = 18;

  constructor(sdk: KwentaSDK, _swAddr: string) {
    this.sdk = sdk;
    this.swAddr = _swAddr;
  }

  async getMarketAddress(market: ExtendedMarket): Promise<string> {
    let marketAddress = market.address;
    if (!marketAddress) {
      const targetMarket = await this.findMarketByKey(market.indexOrIdentifier);
      if (!targetMarket) {
        throw new Error("Market not found");
      }
      marketAddress = targetMarket.market;
    }
    return marketAddress;
  }

  async findMarketByKey(marketKey: string): Promise<FuturesMarket | undefined> {
    // find the market
    const markets = await this.sdk.futures.getMarkets();
    return markets.find((m) => m.marketKey == marketKey);
  }

  setup(provider: Provider): Promise<UnsignedTxWithMetadata[]> {
    return Promise.resolve([]);
  }

  supportedNetworks(): readonly { name: string; chainId: number }[] {
    return [
      {
        name: "optimism",
        chainId: this.opChainId,
      },
    ];
  }

  async supportedMarkets(network: {
    name: string;
    chainId: number;
  }): Promise<ExtendedMarket[]> {
    const markets = await this.sdk.futures.getProxiedMarkets();

    let extendedMarkets: ExtendedMarket[] = [];

    markets.forEach((m) => {
      let extendedMarket: ExtendedMarket = {
        mode: "ASYNC",
        longCollateral: [this.sUsd],
        shortCollateral: [this.sUsd],
        indexOrIdentifier: m.marketKey!,
        supportedOrderTypes: {
          LIMIT_INCREASE: false,
          LIMIT_DECREASE: false,
          MARKET_INCREASE: true,
          MARKET_DECREASE: true,
          DEPOSIT: false,
          WITHDRAW: false,
        },
        supportedOrderActions: {
          CREATE: true,
          UPDATE: false,
          CANCEL: true,
        },
        asset: m.asset,
        address: m.market,
        maxLeverage: toNumberDecimal(
          m.contractMaxLeverage!.toBN(),
          this.decimals
        ),
        minInitialMargin: toNumberDecimal(parseUnits("50", 18), this.decimals),
        protocolName: this.protocolIdentifier,
        minPositionSize: toNumberDecimal(BigNumber.from(0), this.decimals),
        minLeverage: toNumberDecimal(BigNumber.from(1), this.decimals),
      };

      extendedMarkets.push(extendedMarket);
    });

    return extendedMarkets;
  }

  async getDynamicMetadata(
    market: ExtendedMarket
  ): Promise<DynamicMarketMetadata> {
    const futureMarket = await this.sdk.futures.getMarketMetadata(
      market.address!
    );

    return {
      oiLong: futureMarket.openInterest.long.toBN(),
      oiShort: futureMarket.openInterest.short.toBN(),
      fundingRate: futureMarket.currentFundingRate.toBN(),
      fundingVelocity: futureMarket.currentFundingVelocity.toBN(),
      makerFee: futureMarket.feeRates.makerFeeOffchainDelayedOrder.toBN(),
      takerFee: futureMarket.feeRates.takerFeeOffchainDelayedOrder.toBN(),
      availableLiquidityLongUSD: futureMarket.marketLimitUsd
        .sub(futureMarket.openInterest.longUSD)
        .toBN(),
      availableLiquidityShortUSD: futureMarket.marketLimitUsd
        .sub(futureMarket.openInterest.shortUSD)
        .toBN(),
      oiLongUsd: futureMarket.openInterest.longUSD.toBN(),
      oiShortUsd: futureMarket.openInterest.shortUSD.toBN(),
      marketLimitUsd: futureMarket.marketLimitUsd.toBN(),
      marketLimitNative: futureMarket.marketLimitNative.toBN(),
    };
  }

  async getMarketPrice(market: ExtendedMarket): Promise<NumberDecimal> {
    return {
      value: (await getTokenPrice18("BTC")).toString(),
      decimals: 18,
    };
  }

  async getMarketPriceByAddress(marketAddress: string): Promise<NumberDecimal> {
    return {
      value: (await this.sdk.futures.getAssetPrice(marketAddress))
        .toBN()
        .toString(),
      decimals: 18,
    };
  }

  async createOrder(
    provider: Provider,
    market: ExtendedMarket,
    order: Order
  ): Promise<UnsignedTxWithMetadata[]> {
    let txs: UnsignedTxWithMetadata[] = [];
    if (order.sizeDelta.eq(0)) return txs;

    const marketAddress = await this.getMarketAddress(market);
    await this.sdk.setProvider(provider);

    if (order.inputCollateralAmount.gt(0)) {
      // withdraw unused collateral tx's
      txs.push(...(await this.withdrawUnusedCollateral(this.swAddr, provider)));

      // deposit
      let depositTx = await this.formulateDepositTx(
        marketAddress,
        wei(order.inputCollateralAmount)
      );
      // logObject("depositTx", depositTx);
      txs.push(depositTx);
    }

    // proper orders
    let sizeDelta =
      order.direction == "SHORT"
        ? wei(order.sizeDelta).neg()
        : wei(order.sizeDelta);

    const acceptablePrice =
      order.slippage && order.slippage != ""
        ? applySlippage(
            order.trigger?.triggerPrice!,
            order.slippage,
            order.direction == "LONG"
          )
        : order.trigger?.triggerPrice!;

    txs.push({
      tx: (await this.sdk.futures.submitIsolatedMarginOrder(
        marketAddress,
        sizeDelta,
        wei(acceptablePrice)
      )) as UnsignedTransaction,
      type: "SNX_V2",
      data: undefined,
    });

    return txs;
  }

  updateOrder(
    provider: Provider,
    market: Market | undefined,
    updatedOrder: Partial<ExtendedOrder>
  ): Promise<UnsignedTxWithMetadata[]> {
    throw new Error("Method not Supported.");
  }

  async cancelOrder(
    provider: Provider,
    market: ExtendedMarket,
    order: Partial<ExtendedOrder>
  ): Promise<UnsignedTxWithMetadata[]> {
    const marketAddress = await this.getMarketAddress(market);

    return [
      {
        tx: await this.sdk.futures.cancelDelayedOrder(
          marketAddress,
          this.swAddr,
          true
        ),
        type: "SNX_V2",
        data: undefined,
      },
    ];
  }

  async closePosition(
    provider: Provider,
    position: ExtendedPosition,
    closeSize: BigNumber,
    isTrigger: boolean,
    triggerPrice: BigNumber | undefined,
    triggerAboveThreshold: boolean | undefined,
    outputToken: Token | undefined
  ): Promise<UnsignedTxWithMetadata[]> {
    if (closeSize.eq(0) || closeSize.gt(position.size)) {
      throw new Error("Invalid close size");
    }

    let fillPrice = await this.getFillPriceInternal(
      position.marketAddress!,
      position.direction == "LONG" ? wei(closeSize).neg() : wei(closeSize)
    );

    fillPrice =
      position.direction == "LONG"
        ? fillPrice.mul(99).div(100)
        : fillPrice.mul(101).div(100);

    return this.createOrder(
      provider,
      {
        mode: "ASYNC",
        longCollateral: [this.sUsd],
        shortCollateral: [this.sUsd],
        indexOrIdentifier: position.indexOrIdentifier,
        address: position.marketAddress,
        supportedOrderTypes: {
          LIMIT_DECREASE: false,
          LIMIT_INCREASE: false,
          MARKET_INCREASE: true,
          MARKET_DECREASE: true,
          DEPOSIT: true,
          WITHDRAW: true,
        },
        protocolName: this.protocolIdentifier,
      },
      {
        type: "MARKET_DECREASE",
        direction: position.direction == "LONG" ? "SHORT" : "LONG",
        inputCollateral: {
          name: "string",
          symbol: "string",
          decimals: "string",
          address: "string",
        },
        inputCollateralAmount: BigNumber.from(0),
        sizeDelta: closeSize,
        isTriggerOrder: false,
        referralCode: undefined,
        trigger: {
          triggerPrice: fillPrice,
          triggerAboveThreshold: true,
        },
        slippage: "1",
      }
    );
  }

  async updatePositionMargin(
    provider: Provider,
    position: ExtendedPosition,
    marginAmount: BigNumber,
    isDeposit: boolean
  ): Promise<UnsignedTxWithMetadata[]> {
    let txs: UnsignedTxWithMetadata[] = [];

    // validation
    if (
      marginAmount.eq(0) ||
      (!isDeposit && marginAmount.gt(position.accessibleMargin!))
    ) {
      throw new Error("Invalid collateral delta");
    }

    if (isDeposit) {
      // withdraw unused collateral tx's
      txs.push(...(await this.withdrawUnusedCollateral(this.swAddr, provider)));

      // deposit
      let depositTx = await this.formulateDepositTx(
        position.marketAddress!,
        wei(marginAmount)
      );
      txs.push(depositTx);
    } else {
      await this.sdk.setProvider(provider);

      // no need to withdraw from 0-positioned markets
      // withdraw from the position
      let withdrawTx = await this.formulateWithdrawTx(
        position.marketAddress!,
        wei(marginAmount)
      );
      txs.push(withdrawTx);
    }

    return txs;
  }

  async getFillPrice(market: ExtendedMarket, order: Order): Promise<BigNumber> {
    const marketAddress = await this.getMarketAddress(market);

    return this.getFillPriceInternal(marketAddress, wei(order.sizeDelta));
  }

  async getFillPriceInternal(marketAddress: string, sizeDelta: Wei) {
    let fillPrice = await this.sdk.futures.getFillPrice(
      marketAddress,
      sizeDelta
    );

    return fillPrice.price;
  }

  async getTradePreview(
    user: string,
    provider: Provider,
    market: ExtendedMarket,
    order: Order,
    existingPosition: ExtendedPosition | undefined
  ): Promise<ExtendedPosition> {
    const marketAddress = await this.getMarketAddress(market);
    const marketPrice = await this.getMarketPrice(market);
    await this.sdk.setProvider(provider);

    const futureMarket = this.mapExtendedMarketsToPartialFutureMarkets([
      market,
    ])[0];
    const sUsdBalanceInMarket = (
      await this.sdk.futures.getIdleMarginInMarketsCached(this.swAddr, [
        futureMarket,
      ])
    ).totalIdleInMarkets;

    let sizeDelta = wei(order.sizeDelta);
    sizeDelta = order.direction == "LONG" ? sizeDelta : sizeDelta.neg();

    const btcCurrentPrice = await getTokenPrice18("BTC");
    console.log("BTC Price: ", formatUnits(btcCurrentPrice, 18));

    const tradePreview =
      await this.sdk.futures.getSimulatedIsolatedTradePreview(
        user,
        getEnumEntryByValue(FuturesMarketKey, market.indexOrIdentifier!)!,
        marketAddress,
        {
          sizeDelta: sizeDelta,
          marginDelta: wei(order.inputCollateralAmount).sub(
            sUsdBalanceInMarket
          ),
          orderPrice: wei(btcCurrentPrice),
        }
      );

    return {
      indexOrIdentifier: "",
      size: tradePreview.size.abs(),
      collateral: tradePreview.margin,
      collateralToken: this.sUsd,
      averageEntryPrice: tradePreview.price,
      liqudationPrice: tradePreview.liqPrice,
      otherFees: tradePreview.fee,
      status: tradePreview.status,
      fee: tradePreview.fee.add(tradePreview.keeperFee),
      leverage:
        order.inputCollateralAmount && order.inputCollateralAmount.gt(0)
          ? tradePreview.size
              .mul(marketPrice.value)
              .div(order.inputCollateralAmount)
              .abs()
          : undefined,
    };
  }

  async getEditCollateralPreview(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    marginDelta: BigNumber,
    isDeposit: boolean
  ): Promise<ExtendedPosition> {
    const marketAddress = position.marketAddress!;
    const marketPrice = await this.getMarketPriceByAddress(
      position.marketAddress!
    );
    await this.sdk.setProvider(provider);

    let fillPrice = await this.getFillPriceInternal(marketAddress, wei(0));
    // console.log("FillPrice: ", formatN(fillPrice));

    const tradePreview =
      await this.sdk.futures.getSimulatedIsolatedTradePreview(
        user,
        getEnumEntryByValue(FuturesMarketKey, position.indexOrIdentifier!)!,
        marketAddress,
        {
          sizeDelta: wei(0),
          marginDelta: isDeposit ? wei(marginDelta) : wei(marginDelta).neg(),
          orderPrice: wei(fillPrice),
        }
      );

    return {
      indexOrIdentifier: "",
      size: tradePreview.size.abs(),
      collateral: tradePreview.margin,
      collateralToken: this.sUsd,
      averageEntryPrice: tradePreview.price,
      liqudationPrice: tradePreview.liqPrice,
      otherFees: tradePreview.fee,
      status: tradePreview.status,
      fee: tradePreview.fee.add(tradePreview.keeperFee),
      leverage: tradePreview.margin
        ? tradePreview.size
            .mul(marketPrice.value)
            .div(tradePreview.margin)
            .abs()
        : undefined,
    };
  }

  async getCloseTradePreview(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    closeSize: BigNumber,
    isTrigger: boolean,
    triggerPrice: BigNumber | undefined,
    triggerAboveThreshold: boolean | undefined,
    outputToken: Token | undefined
  ): Promise<ExtendedPosition> {
    const marketAddress = position.marketAddress!;
    const marketPrice = await this.getMarketPriceByAddress(marketAddress);
    const isFullClose = closeSize.eq(position.size);
    await this.sdk.setProvider(provider);

    // because simulation is for only (partial) close position
    let sizeDeltaIn =
      position.direction == "LONG" ? wei(closeSize).neg() : wei(closeSize);

    let fillPrice = await this.getFillPriceInternal(marketAddress, sizeDeltaIn);
    // console.log("FillPrice: ", formatN(fillPrice));

    const tradePreview =
      await this.sdk.futures.getSimulatedIsolatedTradePreview(
        user,
        getEnumEntryByValue(FuturesMarketKey, position.indexOrIdentifier!)!,
        marketAddress,
        {
          sizeDelta: sizeDeltaIn,
          marginDelta: wei(0),
          orderPrice: wei(fillPrice),
        }
      );

    // logObject("tradePreview", tradePreview);

    return {
      indexOrIdentifier: "",
      size: tradePreview.size.abs(),
      collateral: isFullClose ? BigNumber.from(0) : tradePreview.margin,
      collateralToken: this.sUsd,
      averageEntryPrice: tradePreview.price,
      liqudationPrice: tradePreview.liqPrice,
      otherFees: tradePreview.fee,
      status: tradePreview.status,
      fee: tradePreview.fee.add(tradePreview.keeperFee),
      leverage: tradePreview.margin
        ? tradePreview.size
            .mul(marketPrice.value)
            .div(tradePreview.margin)
            .abs()
        : undefined,
      receiveAmount: isFullClose ? tradePreview.margin : BigNumber.from(0),
      receiveUsd: isFullClose ? tradePreview.margin : BigNumber.from(0),
    };
  }

  async getOrder(
    user: string,
    orderIdentifier: OrderIdentifier, // serves as market identifier for SNX
    market: ExtendedMarket
  ): Promise<ExtendedOrder> {
    const marketAddress = await this.getMarketAddress(market);

    const orderData = await this.sdk.futures.getDelayedOrder(
      user,
      marketAddress
    );

    if (orderData.size.eq(0)) {
      return {} as ExtendedOrder;
    }

    const order: Order = {
      type: orderData.size.gt(0) ? "MARKET_INCREASE" : "MARKET_DECREASE",
      direction: orderData.side == PositionSide.LONG ? "LONG" : "SHORT",
      sizeDelta: orderData.size.abs().toBN(),
      isTriggerOrder: false,
      referralCode: undefined,
      trigger: {
        triggerPrice: orderData.desiredFillPrice.toBN(),
        triggerAboveThreshold: true,
      },
      inputCollateral: this.sUsd,
      inputCollateralAmount: orderData.commitDeposit.toBN(),
      slippage: undefined,
    };

    const orderAction: OrderAction = { orderAction: "CREATE" };

    return {
      ...order,
      ...orderAction,
      ...{
        orderIdentifier: orderIdentifier.toString(),
      },
      ...{
        indexOrIdentifier: market.indexOrIdentifier,
      },
      triggerType: "NONE",
    };
  }

  async getAllOrders(
    user: string,
    provider: Provider,
    openMarkets: OpenMarkets | undefined
  ): Promise<Array<ExtendedOrder>> {
    throw new Error("Method not implemented.");
    // let markets = await this.getExtendedMarketsFromOpenMarkets(openMarkets);

    // let ordersData: ExtendedOrder[] = [];
    // markets.forEach(async (m) => {
    //   let orderData = await this.getOrder(user, m.indexOrIdentifier, m);
    //   if (orderData.orderIdentifier) {
    //     ordersData.push(orderData);
    //   }
    // });

    // return ordersData;
  }

  getAllOrdersForPosition(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    openMarkers: OpenMarkets | undefined
  ): Promise<Array<ExtendedOrder>> {
    throw new Error("Method not implemented.");
  }

  // will work as getOrder for SNX
  async getMarketOrders(
    user: string,
    market: ExtendedMarket
  ): Promise<Array<ExtendedOrder>> {
    let ordersData: ExtendedOrder[] = [];

    ordersData.push(
      await this.getOrder(user, market.indexOrIdentifier, market)
    );

    return ordersData;
  }

  async getPosition(
    positionIdentifier: Position["indexOrIdentifier"], // serves as market identifier for SNX
    market: OpenMarketData,
    user: string | undefined
  ): Promise<ExtendedPosition> {
    let extendedPosition: ExtendedPosition = {} as ExtendedPosition;
    let marketAddress = await this.getMarketAddress(market);

    let futureMarkets = [];
    futureMarkets.push({
      asset: getEnumEntryByValue(FuturesMarketAsset, market.asset!)!,
      marketKey: getEnumEntryByValue(
        FuturesMarketKey,
        market.indexOrIdentifier!
      )!,
      address: marketAddress,
    });

    let futurePositions = await this.sdk.futures.getFuturesPositions(
      user!,
      futureMarkets
    );

    if (futurePositions.length != 0) {
      extendedPosition = this.mapFuturePositionToExtendedPosition(
        futurePositions[0],
        marketAddress
      );
    }

    return extendedPosition;
  }

  async getAllPositions(
    user: string,
    provider: Provider,
    openMarkets: OpenMarkets | undefined
  ): Promise<ExtendedPosition[]> {
    let extendedPositions: ExtendedPosition[] = [];

    let markets = await this.getExtendedMarketsFromOpenMarkets(openMarkets);

    let futureMarkets = [];

    for (let i = 0; i < markets.length; i++) {
      futureMarkets.push({
        asset: getEnumEntryByValue(FuturesMarketAsset, markets[i].asset!)!,
        marketKey: getEnumEntryByValue(
          FuturesMarketKey,
          markets[i].indexOrIdentifier!
        )!,
        address: markets[i].address!,
      });
    }

    let futurePositions = await this.sdk.futures.getFuturesPositions(
      user,
      futureMarkets
    );
    // console.log("Future positions: ", futurePositions.length);
    // futurePositions.forEach((p) => {
    //   logObject("Future position: ", p);
    //   if (p.position) logObject("Inside Position: ", p.position);
    // });

    for (let i = 0; i < futurePositions.length; i++) {
      if (futurePositions[i].position == null) continue;

      extendedPositions.push(
        this.mapFuturePositionToExtendedPosition(
          futurePositions[i],
          markets.find(
            (m) =>
              m.indexOrIdentifier == futurePositions[i].marketKey.toString()
          )!.address!
        )
      );
    }
    // console.log("Extended positions: ", extendedPositions.length);
    // extendedPositions.forEach((p) => {
    //   logObject("Extended position: ", p);
    // });

    return extendedPositions;
  }

  async getTradesHistory(
    user: string,
    openMarkers: OpenMarkets | undefined
  ): Promise<TradeHistory[]> {
    let trades: TradeHistory[] = [];
    let markets = await this.getExtendedMarketsFromOpenMarkets(openMarkers);

    let tradesHistory = await this.sdk.futures.getAllTrades(
      user,
      "isolated_margin",
      1000
    );

    tradesHistory.forEach((t) => {
      let market = markets.find((m) => m.asset == t.asset.toString())!;
      trades.push({
        marketIdentifier: { indexOrIdentifier: market.indexOrIdentifier },
        operation: t.orderType,
        sizeDelta: t.size.toBN(),
        collateralDelta: t.margin.toBN(),
        price: t.price.toBN(),
        timestamp: t.timestamp,
        realisedPnl: t.pnl.toBN(),
        direction: t.side == PositionSide.LONG ? "LONG" : "SHORT",
        keeperFeesPaid: t.keeperFeesPaid.toBN(),
        txHash: t.txnHash,
      });
    });

    return trades;
  }

  async getLiquidationsHistory(
    user: string,
    openMarkers: OpenMarkets | undefined
  ): Promise<TradeHistory[]> {
    let trades: TradeHistory[] = [];
    let markets = await this.getExtendedMarketsFromOpenMarkets(openMarkers);

    let tradesHistory = await this.sdk.futures.getAllTrades(
      user,
      "isolated_margin",
      1000
    );

    tradesHistory = tradesHistory.filter((t) => t.orderType == "Liquidation");

    tradesHistory.forEach((t) => {
      let market = markets.find((m) => m.asset == t.asset.toString())!;
      trades.push({
        marketIdentifier: { indexOrIdentifier: market.indexOrIdentifier },
        operation: t.orderType,
        sizeDelta: t.size.toBN(),
        collateralDelta: t.margin.toBN(),
        price: t.price.toBN(),
        timestamp: t.timestamp,
        realisedPnl: t.pnl.toBN(),
        direction: t.side == PositionSide.LONG ? "LONG" : "SHORT",
        keeperFeesPaid: t.keeperFeesPaid.toBN(),
        txHash: t.txnHash,
      });
    });

    return trades;
  }

  async getIdleMargins(
    user: string,
    openMarkets: OpenMarkets | undefined
  ): Promise<(MarketIdentifier & CollateralData)[]> {
    const result = await this.sdk.futures.getIdleMarginInMarketsCached(
      user,
      await this.getPartialFutureMarketsFromOpenMarkets(openMarkets)
    );

    return result.marketsWithIdleMargin.map((m) => ({
      indexOrIdentifier: FuturesMarketKey[m.marketKey].toString(),
      inputCollateral: this.sUsd,
      inputCollateralAmount: m.position.accessibleMargin.toBN(),
    }));
  }

  async getAvailableSusdBalance(
    user: string,
    openMarkets: OpenMarkets | undefined
  ): Promise<BigNumber> {
    const result = await this.sdk.futures.getIdleMarginInMarketsCached(
      user,
      await this.getPartialFutureMarketsFromOpenMarkets(openMarkets)
    );
    return result.totalIdleInMarkets.toBN();
  }

  async withdrawUnusedCollateral(
    user: string,
    provider: Provider
  ): Promise<UnsignedTxWithMetadata[]> {
    let txs: UnsignedTxWithMetadata[] = [];

    await this.sdk.setProvider(provider);
    // withdraw unused collateral tx's
    const idleMargins = await this.sdk.futures.getIdleMarginInMarkets(user);

    if (idleMargins.totalIdleInMarkets.gt(0)) {
      let idleMarkets = idleMargins.marketsWithIdleMargin;

      for (let i = 0; i < idleMarkets.length; i++) {
        let withdrawTx = await this.formulateWithdrawTx(
          idleMarkets[i].marketAddress,
          idleMarkets[i].position!.remainingMargin
        );
        // logObject("withdrawTx", withdrawTx);

        txs.push(withdrawTx);
      }
    }

    return txs;
  }

  //// HELPERS ////

  mapFuturePositionToExtendedPosition(
    futurePosition: FuturesPosition,
    marketAddress: string
  ): ExtendedPosition {
    return {
      indexOrIdentifier: futurePosition.marketKey.toString(),
      size: futurePosition.position!.size.toBN(),
      collateral: futurePosition.position!.initialMargin.toBN(),
      collateralToken: this.sUsd,
      averageEntryPrice: futurePosition.position!.lastPrice.toBN(),
      cumulativeFunding: futurePosition.position!.accruedFunding.toBN(),
      unrealizedPnl: futurePosition.position!.pnl.toBN(),
      liqudationPrice: futurePosition.position!.liquidationPrice.toBN(),
      leverage: futurePosition.position!.initialLeverage.toBN(),
      direction:
        futurePosition.position!.side == PositionSide.LONG ? "LONG" : "SHORT",
      accessibleMargin: futurePosition.accessibleMargin.toBN(),
      marketAddress: marketAddress,
      marketIdentifier: futurePosition.marketKey.toString(),
      protocolMetadata: {
        protocolName: this.protocolIdentifier,
      },
    };
  }

  mapOpenMarketsToExtendedMarkets(openMarkets: OpenMarkets): ExtendedMarket[] {
    let extendedMarkets: ExtendedMarket[] = [];
    Object.keys(openMarkets).forEach((key) => {
      openMarkets[key]
        .filter(
          (m) => m.protocolName && m.protocolName == this.protocolIdentifier
        )
        .forEach((m) => {
          extendedMarkets.push(m);
        });
    });
    return extendedMarkets;
  }

  mapExtendedMarketsToPartialFutureMarkets(
    extendedMarkets: ExtendedMarket[]
  ): Partial<FuturesMarket>[] {
    let futureMarkets: Partial<FuturesMarket>[] = [];
    extendedMarkets
      .filter(
        (m) => m.protocolName && m.protocolName == this.protocolIdentifier
      )
      .forEach((m) => {
        futureMarkets.push({
          asset: getEnumEntryByValue(FuturesMarketAsset, m.asset!)!,
          marketKey: getEnumEntryByValue(
            FuturesMarketKey,
            m.indexOrIdentifier!
          )!,
          market: m.address!,
        });
      });
    return futureMarkets;
  }

  async getExtendedMarketsFromOpenMarkets(
    openMarkets: OpenMarkets | undefined
  ): Promise<ExtendedMarket[]> {
    let supportedMarkets: ExtendedMarket[] = [];
    if (openMarkets) {
      supportedMarkets = this.mapOpenMarketsToExtendedMarkets(openMarkets);
    } else {
      supportedMarkets = await this.supportedMarkets(
        this.supportedNetworks()[0]
      );
    }
    return supportedMarkets;
  }

  async getPartialFutureMarketsFromOpenMarkets(
    openMarkets: OpenMarkets | undefined
  ): Promise<Partial<FuturesMarket>[]> {
    let extendedMarkets = await this.getExtendedMarketsFromOpenMarkets(
      openMarkets
    );
    return this.mapExtendedMarketsToPartialFutureMarkets(extendedMarkets);
  }

  async formulateWithdrawTx(marketAddress: string, withdrawAmount: Wei) {
    const withdrawTx = (await this.sdk.futures.withdrawIsolatedMargin(
      marketAddress,
      withdrawAmount
    )) as UnsignedTransaction;

    return {
      tx: withdrawTx,
      type: "SNX_V2",
      data: undefined,
    } as UnsignedTxWithMetadata;
  }

  async formulateDepositTx(marketAddress: string, depositAmount: Wei) {
    const depositTx = (await this.sdk.futures.depositIsolatedMargin(
      marketAddress,
      depositAmount
    )) as UnsignedTransaction;

    return {
      tx: depositTx,
      type: "SNX_V2",
      data: undefined,
    } as UnsignedTxWithMetadata;
  }
}
