import { Router, Request, Response, NextFunction } from 'express'

import asyncErrorHandler from 'express-async-handler'
import {
  AmountInfo,
  CancelOrder,
  ClosePositionData,
  CreateOrder,
  PositionInfo,
  UpdateOrder,
  UpdatePositionMarginData
} from '../../../interfaces/V1/IRouterAdapterBaseV1'
import routerV1 from '../../utils/router'
import { Chain } from 'viem'

const router: Router = Router()

//supportedProtocols
router.post(
  '/supportedProtocols',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const protocols = routerV1.supportedProtocols()

    res.status(200).json({ protocols })
  })
)

//supportedChains
router.post(
  '/supportedChains',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const chains = routerV1.supportedChains()

    res.status(200).json({ chains })
  })
)

//supportedMarkets
router.post(
  '/supportedMarkets',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { chains } = req.body

    let chainArgs = chains ? (chains as Chain[]) : undefined
    const markets = routerV1.supportedMarkets(chainArgs)

    res.status(200).json({ markets })
  })
)

//getMarketPrices
router.post(
  '/getMarketPrices',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { marketIds } = req.body

    let mIds = marketIds as string[]
    const marketPrices = await routerV1.getMarketPrices(mIds)

    res.status(200).json({ marketPrices })
  })
)

//getMarketsInfo
router.post(
  '/getMarketsInfo',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { marketIds } = req.body

    let mIds = marketIds as string[]
    const marketsInfo = await routerV1.getMarketsInfo(mIds)

    res.status(200).json({ marketsInfo })
  })
)

//getDynamicMarketMetadata
router.post(
  '/getDynamicMarketMetadata',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { marketIds } = req.body

    let mIds = marketIds as string[]
    const dynamicMetadata = await routerV1.getDynamicMarketMetadata(mIds)

    res.status(200).json({ dynamicMetadata })
  })
)

//increasePosition
router.post(
  '/increasePosition',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { orderData, wallet } = req.body

    let od = orderData as CreateOrder[]
    const w = wallet as string

    const txs = await routerV1.increasePosition(od, w)

    res.status(200).json({ txs })
  })
)

//updateOrder
router.post(
  '/updateOrder',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { orderData, wallet } = req.body

    const w = wallet as string
    let od = orderData as UpdateOrder[]

    const txs = await routerV1.updateOrder(od, w)

    res.status(200).json({ txs })
  })
)

//cancelOrder
router.post(
  '/cancelOrder',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { orderData, wallet } = req.body

    const w = wallet as string
    let od = orderData as CancelOrder[]

    const txs = await routerV1.cancelOrder(od, w)

    res.status(200).json({ txs })
  })
)

//closePosition
router.post(
  '/closePosition',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { positionInfo, closePositionData, wallet } = req.body

    let pi = positionInfo as PositionInfo[]
    let cpd = closePositionData as ClosePositionData[]
    const w = wallet as string

    const txs = await routerV1.closePosition(pi, cpd, w)

    res.status(200).json({ txs })
  })
)

//updatePositionMargin
router.post(
  '/updatePositionMargin',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { positionInfo, updatePositionMarginData, wallet } = req.body

    let pi = positionInfo as PositionInfo[]
    let upmd = updatePositionMarginData as UpdatePositionMarginData[]
    const w = wallet as string

    const txs = await routerV1.updatePositionMargin(pi, upmd, w)

    res.status(200).json({ txs })
  })
)

//claimFunding
router.post(
  '/claimFunding',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string

    const txs = await routerV1.claimFunding(w)

    res.status(200).json({ txs })
  })
)

//getAllPositions
router.post(
  '/getAllPositions',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const positions = await routerV1.getAllPositions(w, undefined)

    res.status(200).json({ positions })
  })
)

//getAllOrders
router.post(
  '/getAllOrders',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const orders = await routerV1.getAllOrders(w, undefined)

    res.status(200).json({ orders })
  })
)

//getAllOrdersForPosition
router.post(
  '/getAllOrdersForPosition',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { positionInfo, wallet } = req.body

    const w = wallet as string
    const pi = positionInfo as PositionInfo[]
    const positionOrders = await routerV1.getAllOrdersForPosition(w, pi, undefined)

    res.status(200).json({ positionOrders })
  })
)

//getTradesHistory
router.post(
  '/getTradesHistory',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const tradeHistory = await routerV1.getTradesHistory(w, undefined)

    res.status(200).json({ tradeHistory })
  })
)

//getLiquidationHistory
router.post(
  '/getLiquidationHistory',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const liquidationHistory = await routerV1.getLiquidationHistory(w, undefined)

    res.status(200).json({ liquidationHistory })
  })
)

//getOpenTradePreview
router.post(
  '/getOpenTradePreview',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet, orderData, existingPos } = req.body

    const w = wallet as string
    const od = orderData as CreateOrder[]
    const ep = existingPos as (PositionInfo | undefined)[]
    const preview = await routerV1.getOpenTradePreview(w, od, ep)

    res.status(200).json({ preview })
  })
)

//getCloseTradePreview
router.post(
  '/getCloseTradePreview',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet, positionInfo, closePositionData } = req.body

    const w = wallet as string
    const pi = positionInfo as PositionInfo[]
    const cpd = closePositionData as ClosePositionData[]
    const preview = await routerV1.getCloseTradePreview(w, pi, cpd)

    res.status(200).json({ preview })
  })
)

//getUpdateMarginPreview
router.post(
  '/getUpdateMarginPreview',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet, isDeposit, marginDelta, existingPos } = req.body

    const w = wallet as string
    const id = isDeposit as boolean[]
    const md = marginDelta as AmountInfo[]
    const ep = existingPos as PositionInfo[]
    const preview = await routerV1.getUpdateMarginPreview(w, id, md, ep)

    res.status(200).json({ preview })
  })
)

//getTotalClaimableFunding
router.post(
  '/getTotalClaimableFunding',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const claimableFunding = await routerV1.getTotalClaimableFunding(w)

    res.status(200).json({ claimableFunding })
  })
)

//getTotalAccuredFunding
router.post(
  '/getTotalAccuredFunding',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const accuredFunding = await routerV1.getTotalAccuredFunding(w)

    res.status(200).json({ accuredFunding })
  })
)

//getClaimHistory
router.post(
  '/getClaimHistory',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { wallet } = req.body

    const w = wallet as string
    const claimHistory = await routerV1.getClaimHistory(w, undefined)

    res.status(200).json({ claimHistory })
  })
)

export default router
