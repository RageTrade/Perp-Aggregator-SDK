import { Router, Request, Response, NextFunction } from 'express'

import asyncErrorHandler from 'express-async-handler'
import { CreateOrder } from '../../../interfaces/V1/IRouterAdapterBaseV1'
import routerV1 from '../../utils/router'

const router: Router = Router()

router.post(
  '/',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { orderData, wallet } = req.body

    let od = orderData as CreateOrder[]
    let w = wallet as string

    const txs = await routerV1.increasePosition(od, w)

    res.status(200).send(txs)
  })
)

export default router
