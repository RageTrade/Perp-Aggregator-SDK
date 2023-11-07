import { FixedNumber } from 'ethers-v6'
import { BigNumber, UnsignedTransaction } from 'ethers'
import { AddressValidationAdditionalSessionData, ERC20ApprovalAddtionalSessionData } from '../../tx-metadata-types'
import { Token } from '../../common/tokens'

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

export type Network = {
  name: string
  chainId: number
}

export type Protocol = {
  protocolId: ProtocolId
}

export type Market = {
  marketId: string // Global unique identifier for the market (ChainId:protocolId:protocolMarketId)
  indexToken: Token
  longCollateral: Token[]
  shortCollateral: Token[]
  supportedOrderTypes: Record<OrderType, Boolean>
  supportedOrderActions: Record<OrderAction, Boolean>
}

export type GenericStaticMarketMetadata = {
  maxLeverage: FixedNumber
  minLeverage: FixedNumber
  minInitialMargin: AmountInfo
  minPositionSize: AmountInfo
}

export type DynamicMarketMetadata = {
  oiLong: AmountInfo
  oiShort: AmountInfo
  availableLiquidityLong: AmountInfo
  availableLiquidityShort: AmountInfo
  longRate: FixedNumber
  shortRate: FixedNumber
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
  orderId: string
}

export type CreateOrder = OrderData &
  CollateralData & {
    type: CreateOrderType
    slippage: number | undefined
  }

export type UpdateOrder = OrderData &
  OrderIdentifier & {
    type: OrderType
  }

export type OrderInfo = OrderData &
  OrderIdentifier &
  OrderType &
  CollateralData & {
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
  unrealizedPnl: AmountInfo
  liquidationPrice: FixedNumber
  leverage: FixedNumber
  direction: TradeDirection
  collateral: Token
  indexToken: Token
}

export type PositionInfo = PositionData & {
  protocolId: ProtocolId
}

export type HistoricalTradeInfo = TradeData &
  CollateralData & {
    timestamp: number
    price: FixedNumber
    realizedPnl: AmountInfo
    keeperFeesPaid: AmountInfo
    positionFee: AmountInfo
    operationType: TradeOperationType
    txHash: string
  }

export type LiquidationInfo = CollateralData & {
  marketId: Market['marketId']
  liquidationPrice: FixedNumber
  direction: TradeDirection
  sizeClosed: AmountInfo
  realizedPnl: AmountInfo
  liquidationFees: AmountInfo
  remainingCollateral: AmountInfo
  liqudationLeverage: FixedNumber
  timestamp: number
  txHash: string | undefined // currently undefined for snx
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
  fee: AmountInfo
} & ErrorData

export type OpenTradePreviewInfo = PreviewInfo & {
  priceImpact: FixedNumber
}

export type CloseTradePreviewInfo = PreviewInfo & {
  receiveMargin: AmountInfo
}

export type PageOptions = {
  limit: number
  skip: number
}

export type PaginatedRes<T> = {
  result: T[]
  maxItemsCount: number
}

export type UnsignedTxWithMetadata =
  | {
    tx: UnsignedTransaction
    type: 'ERC20_APPROVAL'
    data: ERC20ApprovalAddtionalSessionData
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'GMX_V1'
    data: undefined
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'LIFI'
    data: undefined
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'SNX_V2'
    data: undefined
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'NATIVE'
    data: undefined
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'ADDRESS'
    data: AddressValidationAdditionalSessionData
    ethRequired?: BigNumber
  }
  | {
    tx: UnsignedTransaction
    type: 'GMX_V2'
    data: undefined
    ethRequired?: BigNumber
  }

export interface IRouterAdapterBaseV1 {
  ///// Setup api //////
  setup(swAddr: string): Promise<void>

  ///// Network api //////
  supportedNetworks(): Network[]

  ///// Market api's //////
  supportedMarkets(networks: Network[] | undefined): Promise<MarketInfo[]>

  getMarketPrices(marketIds: Market['marketId'][]): Promise<FixedNumber[]>

  getMarketsInfo(marketIds: Market['marketId'][]): Promise<MarketInfo[]>

  getDynamicMarketMetadata(marketIds: Market['marketId'][]): Promise<DynamicMarketMetadata[]>

  ///// Action api's //////
  increasePosition(orderData: CreateOrder[]): Promise<UnsignedTxWithMetadata[]>

  updateOrder(orderData: UpdateOrder[]): Promise<UnsignedTxWithMetadata[]>

  cancelOrder(orderData: CancelOrder[]): Promise<UnsignedTxWithMetadata[]>

  closePosition(positionInfo: PositionInfo[], closePositionData: ClosePositionData[]): Promise<UnsignedTxWithMetadata[]>

  updatePositionMargin(
    positionInfo: PositionInfo[],
    updatePositionMarginData: UpdatePositionMarginData[]
  ): Promise<UnsignedTxWithMetadata[]>

  ///// Fetching api's //////
  getIdleMargins(wallet: string): Promise<
    Array<
      CollateralData & {
        marketId: Market['marketId']
        amount: AmountInfo
      }
    >
  >

  getAllPositions(wallet: string, pageOptions: PageOptions | undefined): Promise<PaginatedRes<PositionInfo>>

  getAllOrders(wallet: string, pageOptions: PageOptions | undefined): Promise<PaginatedRes<OrderInfo>>

  getAllOrdersForPosition(
    wallet: string,
    positionInfo: PositionInfo[],
    pageOptions: PageOptions | undefined
  ): Promise<PaginatedRes<Record<PositionData['posId'], OrderInfo>>>

  getTradesHistory(wallet: string, pageOptions: PageOptions | undefined): Promise<PaginatedRes<HistoricalTradeInfo>>

  getLiquidationHistory(wallet: string, pageOptions: PageOptions | undefined): Promise<PaginatedRes<LiquidationInfo>>

  getOpenTradePreview(
    wallet: string,
    orderData: CreateOrder[],
    existingPos: Array<PositionInfo | undefined>
  ): Promise<OpenTradePreviewInfo[]>

  getCloseTradePreview(
    wallet: string,
    positionInfo: PositionInfo[],
    closePositionData: ClosePositionData[]
  ): Promise<CloseTradePreviewInfo[]>

  getUpdateMarginPreview(
    wallet: string,
    isDeposit: boolean[],
    marginDelta: AmountInfo[],
    existingPos: Array<PositionInfo | undefined>
  ): Promise<PreviewInfo[]>
}
