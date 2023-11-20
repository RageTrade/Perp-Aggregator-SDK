import { Router, Request, Response, NextFunction } from 'express'

import asyncErrorHandler from 'express-async-handler'
import { FixedNumber } from '../../../common/fixedNumber'

const router: Router = Router()

router.get(
  '/',
  [],
  //@ts-ignore
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const num = FixedNumber.fromValue(1.2345, 4)

    res.status(200).send({ num })
  })
)

export default router
