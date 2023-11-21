import { BigNumber, UnsignedTransaction } from 'ethers'
import { AddressValidationAdditionalSessionData, ERC20ApprovalAddtionalSessionData } from '../../tx-metadata-types'
import { Token } from '../../common/tokens'
import { Chain } from 'viem'
import { arbitrum, optimism } from 'viem/chains'
import { protocols } from '../../common/protocols'
import { FixedNumber } from '../../common/fixedNumber'

export type ApiOpts = {
  bypassCache: boolean // bypass query client cache altogether
  overrideStaleTime?: number // pass the stale time to override default stale time
}

export type AmountInfo = {
  amount: FixedNumber
  isTokenAmount: boolean
}

export type CreateOrderType = 'LIMIT' | 'MARKET' // IncreasePosition

export type CloseOrderType = 'STOP_LOSS' | 'TAKE_PROFIT' | 'MARKET' // ClosePosition

export type OrderType = CreateOrderType | CloseOrderType

export type OrderAction = 'CREATE' | 'UPDATE' | 'CANCEL'

export type ProtocolId = 'GMXV1' | 'SYNTHETIXV2' | 'PERV2' | 'GMXV2'

export type TradeOperationType = 'Open Long' | 'Close Long' | 'Open Short' | 'Close Short' | 'Long' | 'Short'

export type ClaimType = 'Funding'

export type Protocol = {
  protocolId: ProtocolId
}

export type Market = {
  marketId: string // Global unique identifier for the market (ChainId:protocolId:protocolMarketId)
  chain: Chain
  indexToken: Token
  longCollateral: Token[]
  shortCollateral: Token[]
  supportedOrderTypes: Record<OrderType, Boolean>
  supportedOrderActions: Record<OrderAction, Boolean>
  marketSymbol: string
}

export type GenericStaticMarketMetadata = {
  maxLeverage: FixedNumber
  minLeverage: FixedNumber
  minInitialMargin: FixedNumber
  minPositionSize: FixedNumber
}

export type SynV2StaticMarketMetadata = GenericStaticMarketMetadata & {
  address: string
  asset: string // check if can be removed
}

export type StaticMarketMetadata =
  | {
      protocolId: 'GMXV1'
      data: GenericStaticMarketMetadata
    }
  | {
      protocolId: 'SYNTHETIXV2'
      data: SynV2StaticMarketMetadata
    }
  | {
      protocolId: 'PERV2'
      data: GenericStaticMarketMetadata
    }

export type DynamicMarketMetadata = {
  oiLong: FixedNumber
  oiShort: FixedNumber
  availableLiquidityLong: FixedNumber
  availableLiquidityShort: FixedNumber
  longFundingRate: FixedNumber
  shortFundingRate: FixedNumber
  longBorrowRate: FixedNumber
  shortBorrowRate: FixedNumber
}

export type MarketInfo = Market & GenericStaticMarketMetadata & Protocol

export type TradeDirection = 'LONG' | 'SHORT'

export type TriggerData = {
  triggerPrice: FixedNumber
  triggerAboveThreshold: boolean
}

export type TradeData = {
  marketId: Market['marketId']
  direction: TradeDirection
  sizeDelta: AmountInfo
  marginDelta: AmountInfo
}

export type OrderData = TradeData & {
  triggerData: TriggerData | undefined
}

export type CollateralData = {
  collateral: Token
}

export type OrderIdentifier = {
  marketId: Market['marketId']
  orderId: string
}

export type CreateOrder = OrderData &
  CollateralData & {
    type: CreateOrderType
    slippage: number | undefined
  }

export type UpdateOrder = OrderData &
  OrderIdentifier & {
    orderType: OrderType
  }

export type OrderInfo = OrderData &
  OrderIdentifier & { orderType: OrderType } & CollateralData & {
    protocolId: ProtocolId
  }

// for SNX v2, orderIdentifier is same as marketIdentifier
export type CancelOrder = OrderIdentifier & {
  type: OrderType
}

export type PositionData = {
  marketId: Market['marketId']
  posId: string
  size: AmountInfo
  margin: AmountInfo
  accessibleMargin: AmountInfo
  avgEntryPrice: FixedNumber
  cumulativeFunding: FixedNumber
  unrealizedPnl: FixedNumber
  liquidationPrice: FixedNumber
  leverage: FixedNumber
  direction: TradeDirection
  collateral: Token
  indexToken: Token
}

export type PositionInfo = PositionData & {
  protocolId: ProtocolId
} & {
  metadata: any
}

export type HistoricalTradeInfo = TradeData &
  CollateralData & {
    timestamp: number
    indexPrice: FixedNumber
    collateralPrice: FixedNumber
    realizedPnl: FixedNumber
    keeperFeesPaid: FixedNumber
    positionFee: FixedNumber
    operationType: TradeOperationType
    txHash: string
  }

export type LiquidationInfo = CollateralData & {
  marketId: Market['marketId']
  liquidationPrice: FixedNumber
  direction: TradeDirection
  sizeClosed: AmountInfo
  realizedPnl: FixedNumber
  liquidationFees: FixedNumber
  remainingCollateral: AmountInfo
  liqudationLeverage: FixedNumber
  timestamp: number
  txHash: string | undefined // currently undefined for snx
}

export type ClaimInfo = {
  marketId: Market['marketId']
  timestamp: number
  token: Token
  amount: AmountInfo
  claimType: ClaimType
  txHash: string
}

export type ClosePositionData = {
  closeSize: AmountInfo
  type: CloseOrderType
  triggerData: TriggerData | undefined
  outputCollateral: Token | undefined
}

export type UpdatePositionMarginData = CollateralData & {
  margin: AmountInfo
  isDeposit: boolean
}

export type ErrorData = {
  isError: boolean
  errMsg: string
}

export type PreviewInfo = CollateralData & {
  marketId: Market['marketId']
  leverage: FixedNumber
  size: AmountInfo
  margin: AmountInfo
  avgEntryPrice: FixedNumber
  liqudationPrice: FixedNumber
  fee: FixedNumber
} & ErrorData

export type OpenTradePreviewInfo = PreviewInfo & {
  priceImpact: FixedNumber
}

export type CloseTradePreviewInfo = PreviewInfo & {
  receiveMargin: AmountInfo
}

export type IdleMarginInfo = CollateralData & {
  marketId: Market['marketId']
  amount: FixedNumber // Always token terms
}

export type PageOptions = {
  limit: number
  skip: number
}

export type PaginatedRes<T> = {
  result: T[]
  maxItemsCount: number
}

export type RouterAdapterMethod = keyof IRouterAdapterBaseV1

export interface IRouterAdapterBaseV1 {
  /**
   * Retrieve list of supported chains
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {Chain[]} list of supported chains
   */
  supportedChains(opts?: ApiOpts): Chain[]

  ///// Market api's //////

  /**
   * Retrieve list of supported markets for the given chains
   * @param {Chain[] | undefined} chains Chains to filter on. If undefined, returns all supported markets
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {MarketInfo[]} list of supported markets
   */
  supportedMarkets(chains: Chain[] | undefined, opts?: ApiOpts): Promise<MarketInfo[]>

  /**
   * Retrieve market prices for the market
   * @param {String[]} marketIds array of marketIds
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {FixedNumber[]} array of market prices
   */
  getMarketPrices(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<FixedNumber[]>

  /**
   * Retrieve market info for given marketIds
   * @param {String[]} marketIds array of marketIds
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {MarketInfo[]} array of market info
   */
  getMarketsInfo(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<MarketInfo[]>

  /**
   * Retrive dynamic market metadata for given marketIds
   * @param {String[]} marketIds array of marketIds
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {DynamicMarketMetadata[]} array of dynamic market metadata
   */
  getDynamicMarketMetadata(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<DynamicMarketMetadata[]>

  ///// Action api's //////

  /**
   * Retrieve create position transactions
   * @param {CreateOrder[]} orderData Array of order data for creating multiple positions
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of create position transactions
   */
  increasePosition(orderData: CreateOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]>

  /**
   * Retrieve update position transactions
   * @param {UpdateOrder[]} orderData Array of order data for updating multiple positions
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of update position transactions
   */
  updateOrder(orderData: UpdateOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]>

  /**
   * Retrieve cancel order transactions
   * @param {CancelOrder[]} orderData Array of order data for cancelling multiple orders
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of cancel order transactions
   */
  cancelOrder(orderData: CancelOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]>

  /**
   * Retrieve close position transactions
   * @param {PositionInfo[]} positionInfo Array of existing position info
   * @param {ClosePositionData[]} closePositionData Array of close position data
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of close position transactions
   */
  closePosition(
    positionInfo: PositionInfo[],
    closePositionData: ClosePositionData[],
    wallet: string,
    opts?: ApiOpts
  ): Promise<UnsignedTransaction[]>

  /**
   * Retrieve add/remove collateral transactions
   * @param {PositionInfo[]} positionInfo Array of existing position info
   * @param {UpdatePositionMarginData[]} updatePositionMarginData Array of update position margin data
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of add/remove collateral transactions
   */
  updatePositionMargin(
    positionInfo: PositionInfo[],
    updatePositionMarginData: UpdatePositionMarginData[],
    wallet: string,
    opts?: ApiOpts
  ): Promise<UnsignedTransaction[]>

  /**
   * Retrieve claim funding transactions
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {UnsignedTransaction[]} array of claim funding transactions
   */
  claimFunding(wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]>

  ///// Fetching api's //////

  /**
   * Retrieve idle margins (collateral that is not being used for any position) for the given wallet
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {IdleMarginInfo[]} array of idle margins
   */
  getIdleMargins(wallet: string, opts?: ApiOpts): Promise<Array<IdleMarginInfo>>

  /**
   * Retrieve all open positions for a wallet
   * @param {String} wallet Wallet address
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PaginatedRes<PositionInfo>} paginated result of open positions
   */
  getAllPositions(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<PositionInfo>>

  /**
   * Retrieve all orders for a wallet
   * @param {String} wallet Wallet address
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PaginatedRes<OrderInfo>} paginated result of orders
   */
  getAllOrders(wallet: string, pageOptions: PageOptions | undefined, opts?: ApiOpts): Promise<PaginatedRes<OrderInfo>>

  /**
   * Retrieve all orders for a position
   * @param {String} wallet Wallet address
   * @param {PositionInfo[]} positionInfo Array of existing position info
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {Record<PositionData['posId'], PaginatedRes<OrderInfo>>} Record of paginated result of orders for each position
   */
  getAllOrdersForPosition(
    wallet: string,
    positionInfo: PositionInfo[],
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<Record<PositionData['posId'], PaginatedRes<OrderInfo>>>

  /**
   * Retrieve all trades for a wallet
   * @param {String} wallet Wallet address
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PaginatedRes<HistoricalTradeInfo>} paginated result of trades
   */
  getTradesHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<HistoricalTradeInfo>>

  /**
   * Retrieve all liquidations for a wallet
   * @param {String} wallet Wallet address
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PaginatedRes<LiquidationInfo>} paginated result of liquidations
   */
  getLiquidationHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<LiquidationInfo>>

  /**
   * Retrieve all funding fee claims for a wallet
   * @param {String} wallet Wallet address
   * @param {PageOptions | undefined} pageOptions Pagination options
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PaginatedRes<ClaimInfo>} paginated result of claims
   */
  getClaimHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<ClaimInfo>>

  /**
   * Retrieve simulatied previews for create position orders
   * @param {String} wallet Wallet address
   * @param {CreateOrder[]} orderData Array of order data for creating multiple positions
   * @param {PositionInfo[]} existingPos Array of existing position info
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {OpenTradePreviewInfo[]} array of simulated previews
   */
  getOpenTradePreview(
    wallet: string,
    orderData: CreateOrder[],
    existingPos: Array<PositionInfo | undefined>,
    opts?: ApiOpts
  ): Promise<OpenTradePreviewInfo[]>

  /**
   * Retrieve simulatied previews for close position orders
   * @param {String} wallet Wallet address
   * @param {PositionInfo[]} positionInfo Array of existing position info
   * @param {ClosePositionData[]} closePositionData Array of close position data
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {CloseTradePreviewInfo[]} array of simulated previews
   */
  getCloseTradePreview(
    wallet: string,
    positionInfo: PositionInfo[],
    closePositionData: ClosePositionData[],
    opts?: ApiOpts
  ): Promise<CloseTradePreviewInfo[]>

  /**
   * Retrieve simulatied previews for update position margin orders
   * @param {String} wallet Wallet address
   * @param {Boolean[]} isDeposit Array of booleans indicating whether margin is being added or removed
   * @param {AmountInfo[]} marginDelta Array of margin deltas
   * @param {PositionInfo[]} existingPos Array of existing position info
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {PreviewInfo[]} array of simulated previews
   */
  getUpdateMarginPreview(
    wallet: string,
    isDeposit: boolean[],
    marginDelta: AmountInfo[],
    existingPos: Array<PositionInfo>,
    opts?: ApiOpts
  ): Promise<PreviewInfo[]>

  /**
   * Retrieve total claimable funding amounts
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {FixedNumber} total claimable funding amount
   */
  getTotalClaimableFunding(wallet: string, opts?: ApiOpts): Promise<FixedNumber>

  /**
   * Retrieve total accured funding amounts
   * @param {String} wallet Wallet address
   * @param {ApiOpts} [opts] Extra Api options like bypassCache
   * @returns {FixedNumber} total accured funding amount
   */
  getTotalAccuredFunding(wallet: string, opts?: ApiOpts): Promise<FixedNumber>
}
