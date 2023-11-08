import { getHighExecutionFee } from '../../config/chains'
import { NATIVE_TOKEN_ADDRESS } from '../../config/tokens'
import { BigNumber } from 'ethers'
import { ExecutionFee, GasLimitsConfig } from '../types'
import { TokensData } from '../../tokens/types'
import { convertToUsd, getTokenData } from '../../tokens/utils'
import { USD_DECIMALS, applyFactor, expandDecimals } from '../../lib/numbers'

export function getExecutionFee(
  chainId: number,
  gasLimts: GasLimitsConfig,
  tokensData: TokensData,
  estimatedGasLimit: BigNumber,
  gasPrice: BigNumber
): ExecutionFee | undefined {
  const nativeToken = getTokenData(tokensData, NATIVE_TOKEN_ADDRESS)

  if (!nativeToken) return undefined

  const baseGasLimit = gasLimts.estimatedFeeBaseGasLimit
  const multiplierFactor = gasLimts.estimatedFeeMultiplierFactor
  const adjustedGasLimit = baseGasLimit.add(applyFactor(estimatedGasLimit, multiplierFactor))

  const feeTokenAmount = adjustedGasLimit.mul(gasPrice)

  const feeUsd = convertToUsd(feeTokenAmount, nativeToken.decimals, nativeToken.prices.minPrice)!

  const isFeeHigh = feeUsd.gt(expandDecimals(getHighExecutionFee(chainId), USD_DECIMALS))

  const warning = isFeeHigh
    ? `The network cost to send transactions is high at the moment, please check the "Max Execution Fee" value before proceeding.`
    : undefined

  return {
    feeUsd,
    feeTokenAmount,
    feeToken: nativeToken,
    warning
  }
}

export function estimateExecuteDepositGasLimit(
  gasLimits: GasLimitsConfig,
  deposit: {
    longTokenSwapsCount?: number
    shortTokenSwapsCount?: number
    initialLongTokenAmount?: BigNumber
    initialShortTokenAmount?: BigNumber
    callbackGasLimit?: BigNumber
  }
) {
  const gasPerSwap = gasLimits.singleSwap
  const swapsCount = (deposit.longTokenSwapsCount || 0) + (deposit.shortTokenSwapsCount || 0)

  const gasForSwaps = gasPerSwap.mul(swapsCount)
  const isMultiTokenDeposit = deposit.initialLongTokenAmount?.gt(0) && deposit.initialShortTokenAmount?.gt(0)

  const depositGasLimit = isMultiTokenDeposit ? gasLimits.depositMultiToken : gasLimits.depositSingleToken

  return depositGasLimit.add(gasForSwaps).add(deposit.callbackGasLimit || 0)
}

export function estimateExecuteWithdrawalGasLimit(
  gasLimits: GasLimitsConfig,
  withdrawal: { callbackGasLimit?: BigNumber }
) {
  return gasLimits.withdrawalMultiToken.add(withdrawal.callbackGasLimit || 0)
}

export function estimateExecuteIncreaseOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount?: number; callbackGasLimit?: BigNumber }
) {
  return gasLimits.increaseOrder.add(gasLimits.singleSwap.mul(order.swapsCount || 0)).add(order.callbackGasLimit || 0)
}

export function estimateExecuteDecreaseOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount?: number; callbackGasLimit?: BigNumber }
) {
  return gasLimits.decreaseOrder.add(gasLimits.singleSwap.mul(order.swapsCount || 0)).add(order.callbackGasLimit || 0)
}

export function estimateExecuteSwapOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount?: number; callbackGasLimit?: BigNumber }
) {
  return gasLimits.swapOrder.add(gasLimits.singleSwap.mul(order.swapsCount || 0)).add(order.callbackGasLimit || 0)
}
