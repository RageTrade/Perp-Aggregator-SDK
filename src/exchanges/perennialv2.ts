import { AssetMetadata, MarketSnapshot, PositionSide2, QuoteCurrency, SupportedAsset, addressToAsset2, buildCancelOrder, calcTakerLiqudidity, fetchChainLivePrices2, fetchMarketSnapshots2, modifyPosition } from "perennial-sdk-ts";
import { Network, Provider } from "../interface";
import { AmountInfo, CancelOrder, ClosePositionData, CloseTradePreviewInfo, CollateralData, CreateOrder, DynamicMarketMetadata, HistoricalTradeInfo, LiquidationInfo, Market, MarketInfo, OpenTradePreviewInfo, OrderInfo, PageOptions, PaginatedRes, PositionInfo, PreviewInfo, Protocol, RouterV1, UnsignedTxWithMetadata, UpdateOrder, UpdatePositionMarginData } from "../interfaces/V1/RouterV1";
import {
    http,
    createPublicClient,
    Address,
    PublicClient,
    zeroAddress,
} from "viem";

import { arbitrum, songbird } from "viem/chains";
import { tokens } from "../common/tokens";
import { FixedNumber } from "ethers-v6";
import { cancelOrderUnsigned, modifyPositionUnsigned } from "../configs/perennial/positions";

export default class PerennialV2Service implements RouterV1 {

    // Create Public Client
    publicClient = createPublicClient({
        chain: arbitrum,
        transport: http(arbitrum.rpcUrls.public.http[0], {
            batch: true,
        }),
    });
    smartWalletAddress: Address = zeroAddress;

    constructor(_smartWalletAddress: Address) {
        this.smartWalletAddress = _smartWalletAddress;
    }
    getIdleMargins(wallet: string): Promise<(CollateralData & { marketId: string; amount: AmountInfo; })[]> {
        throw new Error("Method not implemented.");
    }
    getUpdateMarginPreview(wallet: string, marketId: string, marginDelta: AmountInfo, isDeposit: boolean, existingPos: PositionInfo | undefined): Promise<PreviewInfo> {
        throw new Error("Method not implemented.");
    }

    supportedProtocols(): Protocol[] {
        throw new Error("Method not implemented.");
    }

    // something to indicate when setup should be called
    async setup(_smartWalletAddress: Address): Promise<void> {
        this.smartWalletAddress = _smartWalletAddress;
    }

    supportedNetworks(): Network[] {
        const networks: Network[] = [];
        networks.push({
            name: "arbitrum",
            chainId: 42161,
        });
        return networks;
    }

    async supportedMarkets(networks: Network[] | undefined): Promise<MarketInfo[]> {
        const snapshot = await fetchMarketSnapshots2(this.publicClient)
        if (!snapshot) throw new Error("No snapshot found")
        const marketKeys = Object.keys(snapshot.market)

        const marketInfoList: MarketInfo[] = []
        for (const key of marketKeys) {
            const value = snapshot.market[key as keyof typeof snapshot.market]
            marketInfoList.push(this.getMarketInfoFromMarketSnapshot(value))
        }

        return marketInfoList
    }

    async getMarketPrice(marketId: Market["marketId"]): Promise<FixedNumber> {
        const asset = this.getAssetFromMarketId(marketId)

        //TODO: only fetch price for the requested market
        const prices = await fetchChainLivePrices2(this.publicClient)

        const price = prices[asset]
        if (!price) throw new Error('No price found')
        return FixedNumber.fromValue(price, 6, 'fixed128x30')
    }

    async getMarketInfo(marketId: Market["marketId"]): Promise<MarketInfo> {
        const asset = this.getAssetFromMarketId(marketId)
        const snapshot = await fetchMarketSnapshots2(this.publicClient)
        if (!snapshot) throw new Error("No snapshot found")

        return this.getMarketInfoFromMarketSnapshot(snapshot.market[asset])
    }

    async getDynamicMarketMetadata(
        marketId: Market["marketId"]
    ): Promise<DynamicMarketMetadata> {
        const asset = this.getAssetFromMarketId(marketId)

        //TODO: Only get snapshot of the required market
        const snapshot = await fetchMarketSnapshots2(this.publicClient)
        if (!snapshot) throw new Error("No snapshot found")

        const market = snapshot.market[asset]

        const price = market.global.latestPrice
        const oiLongToken = market.majorSide == PositionSide2.long ? market.major : market.minor
        const oiShortToken = market.majorSide == PositionSide2.short ? market.major : market.minor

        const YEAR_IN_HR = 365n * 24n
        const FUNDING_RATE_MULTIPLIER = 10n ** (30n - 4n) / YEAR_IN_HR
        const longFundingRate1H = market.fundingRate.long * FUNDING_RATE_MULTIPLIER
        const shortFundingRate1H = market.fundingRate.short * FUNDING_RATE_MULTIPLIER
        const takerLiquidity = calcTakerLiqudidity(market)

        if (!takerLiquidity) throw new Error("No taker liquidity found")
        return {
            oiLong: {amount:FixedNumber.fromValue(oiLongToken, 6, 'fixed128x30'), isTokenAmount:true },
            oiShort: {amount:FixedNumber.fromValue(oiShortToken, 6, 'fixed128x30'),isTokenAmount:true },
            longRate: FixedNumber.fromValue(longFundingRate1H, 30, 'fixed128x30'),
            shortRate: FixedNumber.fromValue(shortFundingRate1H, 30, 'fixed128x30'),
            availableLiquidityLong: {amount:FixedNumber.fromValue(takerLiquidity.availableLongLiquidity, 6, 'fixed128x30'), isTokenAmount:true },
            availableLiquidityShort: {amount:FixedNumber.fromValue(takerLiquidity.availableShortLiquidity, 6, 'fixed128x30'), isTokenAmount:true },
        }
    }



    async createIncreaseOrder(
        marketId: Market["marketId"], // Global id
        order: CreateOrder
    ): Promise<UnsignedTxWithMetadata[]> {
        // await modifyPosition()
        const productAddress = this.getMarketAddressFromMarketId(marketId)
        const input = this.getInputFromCreateOrder(order)
        console.log({input})
        const unsignedTxWithMetadata = await modifyPositionUnsigned(this.publicClient, arbitrum, this.smartWalletAddress, productAddress, input)
        if (!unsignedTxWithMetadata) throw new Error("No unsigned tx found")
        return [unsignedTxWithMetadata]
    }

    async updateOrder(
        marketId: Market["marketId"], // Global id
        orderData: UpdateOrder
    ): Promise<UnsignedTxWithMetadata[]> {
        return Promise.resolve([])
    }

    async cancelOrder(
        marketId: Market["marketId"], // Global id
        orderData: CancelOrder
    ): Promise<UnsignedTxWithMetadata[]> {
        const market = this.getMarketAddressFromMarketId(marketId)
        const unsignedTxWithMetadata = await cancelOrderUnsigned(arbitrum, market, orderData.orderId)
        if (!unsignedTxWithMetadata) throw new Error("No unsigned tx found")
        return [unsignedTxWithMetadata]
    }

    async closePosition(
        marketId: Market["marketId"], // Global id
        positionInfo: PositionInfo,
        closePositionData: ClosePositionData
    ): Promise<UnsignedTxWithMetadata[]> {
        return Promise.resolve([])
    }

    async updatePositionMargin(
        marketId: Market["marketId"], // Global id
        positionInfo: PositionInfo,
        updatePositionMarginData: UpdatePositionMarginData
    ): Promise<UnsignedTxWithMetadata[]> {
        return Promise.resolve([])
    }

    ///// Fetching api's //////

    getAllPositions(
        wallet: string,
        pageOptions: PageOptions | undefined
    ): Promise<PaginatedRes<PositionInfo>> {
        throw new Error("Method not implemented.");
    }

    getAllOrders(
        wallet: string,
        pageOptions: PageOptions | undefined
    ): Promise<PaginatedRes<OrderInfo>> {
        throw new Error("Method not implemented.");
    }

    getAllOrdersForPosition(
        wallet: string,
        positionInfo: PositionInfo,
        pageOptions: PageOptions | undefined
    ): Promise<PaginatedRes<OrderInfo>> {
        throw new Error("Method not implemented.");
    }

    getTradesHistory(
        wallet: string,
        pageOptions: PageOptions | undefined
    ): Promise<PaginatedRes<HistoricalTradeInfo>> {
        throw new Error("Method not implemented.");
    }

    getLiquidationHistory(
        wallet: string,
        pageOptions: PageOptions | undefined
    ): Promise<PaginatedRes<LiquidationInfo>> {
        throw new Error("Method not implemented.");
    }

    getOpenTradePreview(
        wallet: string,
        marketId: Market["marketId"], // Global id
        orderData: CreateOrder,
        existingPos: PositionInfo | undefined
    ): Promise<OpenTradePreviewInfo> {
        throw new Error("Method not implemented.");
    }

    getCloseTradePreview(
        wallet: string,
        marketId: Market["marketId"], // Global id
        positionInfo: PositionInfo,
        closePositionData: ClosePositionData
    ): Promise<CloseTradePreviewInfo> {
        throw new Error("Method not implemented.");
    }

    private getInputFromCreateOrder(order: CreateOrder) {
        if(!order.sizeDelta.isTokenAmount) throw new Error("Size delta must be in token amount")
        if(!order.marginDelta.isTokenAmount) throw new Error("Margin delta must be in token amount")
        //TODO: check the decimals
        return {
            positionSide: order.direction === "LONG" ? PositionSide2.long : PositionSide2.short,
            positionAbs: order.sizeDelta.amount.value,
            collateralDelta: order.marginDelta.amount.value,
        }
    }

    private getMarketAddressFromMarketId(marketId: string) {
        return marketId.split("-")[2] as Address
    }

    private getAssetFromMarketId(marketId: string) {
        const marketAddress = this.getMarketAddressFromMarketId(marketId)
        const asset = addressToAsset2(marketAddress)
        if (!asset) throw new Error("No asset found")
        return asset
    }

    private getToken(perennialAsset: string) {
        const assetMetadata = tokens
        if (perennialAsset === SupportedAsset.btc) return tokens.BTC
        else if (perennialAsset === SupportedAsset.eth) return tokens.ETH
        else if (perennialAsset === SupportedAsset.sol) return tokens.SOL
        else if (perennialAsset === SupportedAsset.matic) return tokens.MATIC
        else if (perennialAsset === QuoteCurrency.usd) return tokens["USDC.e"]
        else throw new Error("Asset not supported")
    }

    private getMarketInfoFromMarketSnapshot(marketSnapshot: MarketSnapshot): MarketInfo {
        const assetMetadata = AssetMetadata[marketSnapshot.asset]

        return {
            marketId: `${arbitrum.id}-PERV2-${marketSnapshot.market}`,
            protocolId: "PERV2",
            protocolMarketId: marketSnapshot.market,
            indexToken: this.getToken(marketSnapshot.asset),
            longCollateral: [this.getToken(assetMetadata.quoteCurrency)],
            shortCollateral: [this.getToken(assetMetadata.quoteCurrency)],
            supportedOrderTypes: {
                LIMIT: true,
                MARKET: true,
                STOP_LOSS: true,
                TAKE_PROFIT: true,
            },
            supportedOrderActions: {
                CREATE: true,
                UPDATE: true,
                CANCEL: true,
            },
            data: {
                minLeverage: FixedNumber.fromString('0', 30),
                maxLeverage: FixedNumber.fromString((1000000 / Number(marketSnapshot.riskParameter.margin)).toString(), 30),
                minInitialMargin: { amount: FixedNumber.fromString('10', 6), isTokenAmount: false },
                minPositionSize: { amount: FixedNumber.fromString('0', 6), isTokenAmount: false },
            }
        } as MarketInfo
    }


}


