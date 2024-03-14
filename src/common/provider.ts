import { providers } from 'ethers'

export const rpc: Record<number, providers.StaticJsonRpcProvider> = {
  10: new providers.StaticJsonRpcProvider(
    'https://optimism.blockpi.network/v1/rpc/bb6bdff44725a80b24301a08741599cecf1121ca'
  ),
  42161: new providers.StaticJsonRpcProvider(
    'https://arbitrum.blockpi.network/v1/rpc/49cf2d710acdabe5c086b4e298d7c82458a08722'
  )
}
