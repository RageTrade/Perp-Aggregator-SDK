import { UnsignedTransaction, ethers } from "ethers";
import BigNumDec from "./common/BigNumDec";

export type Provider = ethers.providers.Provider;

export type Mode = "SYNC" | "ASYNC";

// SNX does not support update order
export type OrderAction = {
  orderAction: "CREATE" | "UPDATE" | "CANCEL";
};

export type PROTOCOL_NAME = "GMX_V1" | "SYNTHETIX_V2";

export type TRIGGER_TYPE = "STOP_LOSS" | "TAKE_PROFIT" | "NONE";

export type OrderType =
  | "LIMIT_INCREASE"
  | "LIMIT_DECREASE"
  | "MARKET_INCREASE"
  | "MARKET_DECREASE"
  | "DEPOSIT"
  | "WITHDRAW";

export type HistoricalOrderType =
  | OrderType
  | `${OrderType}_EXECUTED`
  | "LIQUIDATED";

export type OrderDirection = "LONG" | "SHORT";

export type Network = {
  name: string;
  chainId: number;
};

export type Token = {
  name: string;
  symbol: string;
  decimals: string;
  address: string;
};

export type MarketIdentifier = {
  indexOrIdentifier: string;
  marketToken?: Token;
};

export type Market = {
  mode: Mode;
  longCollateral: Token[];
  shortCollateral: Token[];
  supportedOrderTypes: Record<OrderType, Boolean>;
  supportedOrderActions?: Record<OrderAction["orderAction"], Boolean>;
} & MarketIdentifier;

export type StaticMarketMetadata = {
  maxLeverage?: BigNumDec;
  address?: string;
  asset?: string;
  minInitialMargin?: BigNumDec;
  minPositionSize?: BigNumDec;
  minLeverage?: BigNumDec;
};

export type DynamicMarketMetadata = {
  price?: BigNumDec;
  oiLong?: BigNumDec;
  oiShort?: BigNumDec;
  oiTotal?: BigNumDec;
  fundingRate?: BigNumDec;
  fundingVelocity?: BigNumDec;
  borrowRate?: BigNumDec;
  makerFee?: BigNumDec;
  takerFee?: BigNumDec;
  availableLiquidity?: BigNumDec;
  availableLiquidityLongUSD?: BigNumDec;
  availableLiquidityShortUSD?: BigNumDec;
  oiLongUsd: BigNumDec;
  oiShortUsd: BigNumDec;
  marketLimitUsd: BigNumDec;
  marketLimitNative: BigNumDec;
};

export type ProtocolMetadata = {
  protocolName: PROTOCOL_NAME;
};

export type ExtendedMarket = Market & StaticMarketMetadata & ProtocolMetadata;

export type Position = {
  indexOrIdentifier: string;
  size: BigNumDec;
  collateral: BigNumDec;
  // find equivalent on SNX
  averageEntryPrice: BigNumDec;
  // verify accrued funding for SNX
  cumulativeFunding?: BigNumDec;
  // check for SNX
  lastUpdatedAtTimestamp?: number;
};

export type ExtendedPosition = Position & {
  unrealizedPnl?: BigNumDec;
  liqudationPrice?: BigNumDec;
  otherFees?: BigNumDec;
  fee?: BigNumDec;
  leverage?: BigNumDec;
  status?: number;
  priceImpact?: BigNumDec;
  exceedsPriceProtection?: boolean;
  sizeDelta?: BigNumDec;
  skewAdjustedPrice?: BigNumDec;
  direction?: OrderDirection;
  accessibleMargin?: BigNumDec;
  marketAddress?: string;
  originalCollateralToken?: string;
  indexToken?: Token;
  collateralToken: Token;
  pnlwithoutfees?: BigNumDec;
  closeFee?: BigNumDec;
  swapFee?: BigNumDec;
  borrowFee?: BigNumDec;
  positionFee?: BigNumDec;
  collateralAfterFee?: BigNumDec;
  delta?: BigNumDec;
  hasProfit?: boolean;
  marketIdentifier?: MarketIdentifier["indexOrIdentifier"];
  entryFundingRate?: BigNumDec;
  cumulativeFundingRate?: BigNumDec;
  protocolMetadata?: ProtocolMetadata;
};

export type Trade = ExtendedPosition & {
  isLiquidated?: boolean;
  totalDeposits?: BigNumDec;
  positionClosed?: boolean;
  keeperFeesPaid?: BigNumDec;
  pnl?: BigNumDec;
  txHash?: string;
  txLink?: string;
};

export type TradeHistory = {
  marketIdentifier: MarketIdentifier;
  timestamp: number;
  operation: string;
  sizeDelta: BigNumDec;
  direction?: OrderDirection;
  price: BigNumDec;
  collateralDelta: BigNumDec;
  realisedPnl: BigNumDec;
  keeperFeesPaid?: BigNumDec;
  isTriggerAboveThreshold?: Boolean;
  txHash: string;
};

export type CollateralData = {
  inputCollateral: Token;
  inputCollateralAmount: BigNumDec;
  shouldWrap?: boolean;
};

export type Order = {
  // check for GMX how frontend will know if it MI or MD
  type: OrderType;
  direction: OrderDirection;

  // in SNX cannot update size and collateral delta in same call
  sizeDelta: BigNumDec;
  isTriggerOrder: Boolean;
  referralCode: string | undefined;
  trigger:
    | {
        triggerPrice: BigNumDec;
        triggerAboveThreshold: boolean;
      }
    | undefined;
} & CollateralData;

export type ExtendedOrder = Order &
  OrderAction & {
    orderIdentifier: OrderIdentifier;
  } & MarketIdentifier & {
    triggerType: TRIGGER_TYPE;
  };

// at any point in time, there is only one delayed order per market for SNX
export type OrderIdentifier = string;

export type OpenMarketData = ExtendedMarket &
  Network & { openMarketIdentifier: string };

export type OpenMarkets = {
  [index: string]: Array<OpenMarketData>;
};

export interface IExchange {
  // something to indicate when setup should be called
  setup(provider: Provider): Promise<UnsignedTransaction[]>;

  supportedNetworks(): readonly Network[];

  supportedMarkets(network: Network): Promise<ExtendedMarket[]>;

  createOrder(
    provider: Provider,
    market: ExtendedMarket,
    order: Order
  ): Promise<UnsignedTransaction[]>;

  updateOrder(
    provider: Provider,
    market: ExtendedMarket | undefined,
    updatedOrder: Partial<ExtendedOrder>
  ): Promise<UnsignedTransaction[]>;

  cancelOrder(
    provider: Provider,
    market: ExtendedMarket | undefined,
    order: Partial<ExtendedOrder>
  ): Promise<UnsignedTransaction[]>;

  closePosition(
    provider: Provider,
    position: ExtendedPosition,
    closeSize: BigNumDec,
    isTrigger: boolean,
    triggerPrice: BigNumDec | undefined,
    triggerAboveThreshold: boolean | undefined,
    outputToken: Token | undefined
  ): Promise<UnsignedTransaction[]>;

  updatePositionMargin(
    provider: Provider,
    position: ExtendedPosition,
    marginAmount: BigNumDec,
    isDeposit: boolean,
    transferToken: Token | undefined
  ): Promise<UnsignedTransaction[]>;

  getMarketPrice(market: ExtendedMarket): Promise<BigNumDec>;

  getDynamicMetadata(
    market: ExtendedMarket,
    provider?: Provider
  ): Promise<DynamicMarketMetadata>;

  // @dev There can be only 1 order per market per user for SNX
  getOrder(
    user: string,
    orderIdentifier: OrderIdentifier, // serves as market identifier for SNX
    market: ExtendedMarket
  ): Promise<ExtendedOrder>;

  getAllOrders(
    user: string,
    provider: Provider,
    openMarkers: OpenMarkets | undefined
  ): Promise<Array<ExtendedOrder>>;

  getAllOrdersForPosition(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    openMarkers: OpenMarkets | undefined
  ): Promise<Array<ExtendedOrder>>;

  // will work as getOrder for SNX
  getMarketOrders(
    user: string,
    market: ExtendedMarket
  ): Promise<Array<ExtendedOrder>>;

  getPosition(
    positionIdentifier: Position["indexOrIdentifier"], // serves as market identifier for SNX
    market: ExtendedMarket,
    user: string | undefined
  ): Promise<ExtendedPosition>;

  getAllPositions(
    user: string,
    provider: Provider,
    openMarkers: OpenMarkets | undefined
  ): Promise<ExtendedPosition[]>;

  getTradesHistory(
    user: string,
    openMarkers: OpenMarkets | undefined
  ): Promise<TradeHistory[]>;

  getIdleMargins(
    user: string,
    openMarkets: OpenMarkets | undefined
  ): Promise<Array<MarketIdentifier & CollateralData>>;

  getTradePreview(
    user: string,
    provider: Provider,
    market: ExtendedMarket,
    order: Order,
    existingPosition: ExtendedPosition | undefined
  ): Promise<ExtendedPosition>;

  getCloseTradePreview(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    closeSize: BigNumDec,
    isTrigger: boolean,
    triggerPrice: BigNumDec | undefined,
    triggerAboveThreshold: boolean | undefined,
    outputToken: Token | undefined
  ): Promise<ExtendedPosition>;

  getEditCollateralPreview(
    user: string,
    provider: Provider,
    position: ExtendedPosition,
    marginDelta: BigNumDec,
    isDeposit: boolean
  ): Promise<ExtendedPosition>;
}
