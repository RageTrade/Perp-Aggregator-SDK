import { ethers } from 'ethers'
import { TradeData, Market } from '../../interfaces/V1/IRouterAdapterBaseV1'

export const isWallet = (wallet: string | undefined): boolean => {
  return wallet !== undefined && ethers.utils.isAddress(wallet)
}

