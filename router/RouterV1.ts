import { Chain } from 'viem'
import {
  Protocol,
  MarketInfo,
  DynamicMarketMetadata,
  CreateOrder,
  UpdateOrder,
  CancelOrder,
  PositionInfo,
  ClosePositionData,
  UpdatePositionMarginData,
  CollateralData,
  AmountInfo,
  PageOptions,
  PaginatedRes,
  OrderInfo,
  HistoricalTradeInfo,
  LiquidationInfo,
  OpenTradePreviewInfo,
  CloseTradePreviewInfo,
  PreviewInfo,
  IRouterAdapterBaseV1,
  ProtocolId,
  Market,
  RouterAdapterMethod,
  PositionData,
  ClaimInfo,
  IdleMarginInfo,
  ApiOpts
} from '../src/interfaces/V1/IRouterAdapterBaseV1'
import { IRouterV1 } from '../src/interfaces/V1/IRouterV1'
import { protocols } from '../src/common/protocols'
import { arbitrum, optimism } from 'viem/chains'
import GMXV2Service from '../src/exchanges/gmxv2'
import { getPaginatedResponse } from '../src/common/helper'
import { decodeMarketId } from '../src/common/markets'
import { FixedNumber } from '../src/common/fixedNumber'
import { UnsignedTransaction } from 'ethers'

export default class RouterV1 implements IRouterV1 {
  adapters: Record<string, IRouterAdapterBaseV1> = {}

  private _checkAndGetProtocolId(marketId: Market['marketId']) {
    const { protocolId } = decodeMarketId(marketId)
    const adapter = this.adapters[protocolId]
    if (!adapter) throw new Error(`Protocol ${protocolId} not supported`)
    return protocolId
  }

  constructor() {
    this.adapters[protocols.GMXV2.symbol] = new GMXV2Service()
  }

  async getClaimHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<ClaimInfo>> {
    const promises: Promise<PaginatedRes<ClaimInfo>>[] = []
    const result: ClaimInfo[] = []

    for (const key in this.adapters) {
      promises.push(this.adapters[key].getClaimHistory(wallet, undefined, opts))
    }

    const out = await Promise.all(promises)
    out.forEach((res) => {
      result.push(...res.result)
    })

    return getPaginatedResponse(result, pageOptions)
  }

  supportedProtocols(): Protocol[] {
    const protocolKeys = Object.keys(this.adapters)
    const out = protocolKeys.map((key) => {
      return {
        protocolId: key
      } as Protocol
    })

    return out
  }

  supportedChains(opts?: ApiOpts): Chain[] {
    return [arbitrum, optimism]
  }

  async supportedMarkets(chains: Chain[] | undefined, opts?: ApiOpts): Promise<MarketInfo[]> {
    const marketInfoPromises: Promise<MarketInfo[]>[] = []
    for (const key in this.adapters) {
      marketInfoPromises.push(this.adapters[key].supportedMarkets(chains, opts))
    }

    const out = await Promise.all(marketInfoPromises)
    return out.flat()
  }

  async getMarketPrices(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<FixedNumber[]> {
    const promises: Array<Promise<FixedNumber[]>> = []
    for (const marketId of marketIds) {
      const protocolId = this._checkAndGetProtocolId(marketId)
      promises.push(this.adapters[protocolId].getMarketPrices(marketIds, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async getMarketsInfo(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<MarketInfo[]> {
    const promises: Array<Promise<MarketInfo[]>> = []
    for (const marketId of marketIds) {
      const protocolId = this._checkAndGetProtocolId(marketId)
      promises.push(this.adapters[protocolId].getMarketsInfo(marketIds, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async getDynamicMarketMetadata(marketIds: Market['marketId'][], opts?: ApiOpts): Promise<DynamicMarketMetadata[]> {
    const promises: Array<Promise<DynamicMarketMetadata[]>> = []
    for (const marketId of marketIds) {
      const protocolId = this._checkAndGetProtocolId(marketId)
      promises.push(this.adapters[protocolId].getDynamicMarketMetadata(marketIds, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async increasePosition(orderData: CreateOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]> {
    const promises: Array<Promise<UnsignedTransaction[]>> = []
    for (const order of orderData) {
      const protocolId = this._checkAndGetProtocolId(order.marketId)
      promises.push(this.adapters[protocolId].increasePosition([order], wallet, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async updateOrder(orderData: UpdateOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]> {
    const promises: Array<Promise<UnsignedTransaction[]>> = []
    for (const order of orderData) {
      const protocolId = this._checkAndGetProtocolId(order.marketId)
      promises.push(this.adapters[protocolId].updateOrder([order], wallet, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async cancelOrder(orderData: CancelOrder[], wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]> {
    const promises: Array<Promise<UnsignedTransaction[]>> = []
    for (const order of orderData) {
      const protocolId = this._checkAndGetProtocolId(order.marketId)
      promises.push(this.adapters[protocolId].cancelOrder([order], wallet, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async closePosition(
    positionInfo: PositionInfo[],
    closePositionData: ClosePositionData[],
    wallet: string,
    opts?: ApiOpts
  ): Promise<UnsignedTransaction[]> {
    const promises: Promise<UnsignedTransaction[]>[] = []
    positionInfo.forEach((position, index) => {
      const protocolId = this._checkAndGetProtocolId(position.marketId)
      promises.push(this.adapters[protocolId].closePosition([position], [closePositionData[index]], wallet, opts))
    })
    const out = await Promise.all(promises)
    return out.flat()
  }

  async updatePositionMargin(
    positionInfo: PositionInfo[],
    updatePositionMarginData: UpdatePositionMarginData[],
    wallet: string,
    opts?: ApiOpts
  ): Promise<UnsignedTransaction[]> {
    const promises: Promise<UnsignedTransaction[]>[] = []
    positionInfo.forEach((position, index) => {
      const protocolId = this._checkAndGetProtocolId(position.marketId)
      promises.push(
        this.adapters[protocolId].updatePositionMargin([position], [updatePositionMarginData[index]], wallet, opts)
      )
    })
    const out = await Promise.all(promises)
    return out.flat()
  }

  async claimFunding(wallet: string, opts?: ApiOpts): Promise<UnsignedTransaction[]> {
    const claimPromises: Promise<UnsignedTransaction[]>[] = []
    for (const key in this.adapters) {
      claimPromises.push(this.adapters[key].claimFunding(wallet, opts))
    }
    const out = await Promise.all(claimPromises)
    return out.flat()
  }

  async getIdleMargins(wallet: string, opts?: ApiOpts): Promise<Array<IdleMarginInfo>> {
    const promises: Promise<Array<IdleMarginInfo>>[] = []
    for (const key in this.adapters) {
      promises.push(this.adapters[key].getIdleMargins(wallet, opts))
    }
    const out = await Promise.all(promises)
    return out.flat()
  }

  async getAllPositions(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<PositionInfo>> {
    const promises: Promise<PaginatedRes<PositionInfo>>[] = []
    const result: PositionInfo[] = []

    for (const key in this.adapters) {
      promises.push(this.adapters[key].getAllPositions(wallet, undefined, opts))
    }

    const out = await Promise.all(promises)

    out.forEach((res) => {
      result.push(...res.result)
    })

    return getPaginatedResponse(result, pageOptions)
  }

  async getAllOrders(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<OrderInfo>> {
    const promises: Promise<PaginatedRes<OrderInfo>>[] = []
    const result: OrderInfo[] = []

    for (const key in this.adapters) {
      promises.push(this.adapters[key].getAllOrders(wallet, undefined, opts))
    }

    const out = await Promise.all(promises)
    out.forEach((res) => {
      result.push(...res.result)
    })

    return getPaginatedResponse(result, pageOptions)
  }

  async getAllOrdersForPosition(
    wallet: string,
    positionInfo: PositionInfo[],
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<Record<PositionData['posId'], PaginatedRes<OrderInfo>>> {
    const promises: Promise<Record<PositionData['posId'], PaginatedRes<OrderInfo>>>[] = []
    const result: Record<PositionData['posId'], PaginatedRes<OrderInfo>> = {}

    for (const position of positionInfo) {
      const protocolId = this._checkAndGetProtocolId(position.marketId)
      promises.push(this.adapters[protocolId].getAllOrdersForPosition(wallet, [position], pageOptions, opts))
    }

    const out = await Promise.all(promises)
    out.forEach((res) => {
      for (const key in res) {
        result[key] = res[key]
      }
    })

    return result
  }

  async getTradesHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<HistoricalTradeInfo>> {
    const promises: Promise<PaginatedRes<HistoricalTradeInfo>>[] = []
    const result: HistoricalTradeInfo[] = []

    for (const key in this.adapters) {
      promises.push(this.adapters[key].getTradesHistory(wallet, undefined, opts))
    }

    const out = await Promise.all(promises)
    out.forEach((res) => {
      result.push(...res.result)
    })

    return getPaginatedResponse(result, pageOptions)
  }

  async getLiquidationHistory(
    wallet: string,
    pageOptions: PageOptions | undefined,
    opts?: ApiOpts
  ): Promise<PaginatedRes<LiquidationInfo>> {
    const promises: Promise<PaginatedRes<LiquidationInfo>>[] = []
    const result: LiquidationInfo[] = []

    for (const key in this.adapters) {
      promises.push(this.adapters[key].getLiquidationHistory(wallet, undefined, opts))
    }

    const out = await Promise.all(promises)
    out.forEach((res) => {
      result.push(...res.result)
    })

    return getPaginatedResponse(result, pageOptions)
  }

  async getOpenTradePreview(
    wallet: string,
    orderData: CreateOrder[],
    existingPos: (PositionInfo | undefined)[],
    opts?: ApiOpts
  ): Promise<OpenTradePreviewInfo[]> {
    const promises: Promise<OpenTradePreviewInfo[]>[] = []
    orderData.forEach((order, index) => {
      const protocolId = this._checkAndGetProtocolId(order.marketId)
      promises.push(this.adapters[protocolId].getOpenTradePreview(wallet, [order], [existingPos[index]], opts))
    })
    const out = await Promise.all(promises)
    return out.flat()
  }

  async getCloseTradePreview(
    wallet: string,
    positionInfo: PositionInfo[],
    closePositionData: ClosePositionData[],
    opts?: ApiOpts
  ): Promise<CloseTradePreviewInfo[]> {
    const promises: Promise<CloseTradePreviewInfo[]>[] = []
    positionInfo.forEach((position, index) => {
      const protocolId = this._checkAndGetProtocolId(position.marketId)
      promises.push(
        this.adapters[protocolId].getCloseTradePreview(wallet, [position], [closePositionData[index]], opts)
      )
    })
    const out = await Promise.all(promises)
    return out.flat()
  }

  async getUpdateMarginPreview(
    wallet: string,
    isDeposit: boolean[],
    marginDelta: AmountInfo[],
    existingPos: PositionInfo[],
    opts?: ApiOpts
  ): Promise<PreviewInfo[]> {
    const promises: Promise<PreviewInfo[]>[] = []

    existingPos.forEach((position, index) => {
      const protocolId = this._checkAndGetProtocolId(position.marketId)
      promises.push(
        this.adapters[protocolId].getUpdateMarginPreview(
          wallet,
          [isDeposit[index]],
          [marginDelta[index]],
          [existingPos[index]],
          opts
        )
      )
    })

    const out = await Promise.all(promises)
    return out.flat()
  }

  async getTotalClaimableFunding(wallet: string, opts?: ApiOpts): Promise<FixedNumber> {
    const fundingPromises: Promise<FixedNumber>[] = []
    for (const key in this.adapters) {
      fundingPromises.push(this.adapters[key].getTotalClaimableFunding(wallet, opts))
    }
    const out = await Promise.all(fundingPromises)
    return out.reduce((acc, curr) => acc.add(curr), FixedNumber.fromValue(0, 30, 30))
  }

  async getTotalAccuredFunding(wallet: string, opts?: ApiOpts): Promise<FixedNumber> {
    const fundingPromises: Promise<FixedNumber>[] = []
    for (const key in this.adapters) {
      fundingPromises.push(this.adapters[key].getTotalAccuredFunding(wallet, opts))
    }
    const out = await Promise.all(fundingPromises)
    return out.reduce((acc, curr) => acc.add(curr), FixedNumber.fromValue(0, 30, 30))
  }
}
