import { providers } from 'ethers'

export const rpc: Record<number, providers.StaticJsonRpcProvider> = {
  10: new providers.StaticJsonRpcProvider(
    'https://optimism.blockpi.network/v1/rpc/e9eb838be05076b18bceb9e7efe3797c93bed264'
  ),
  42161: new providers.StaticJsonRpcProvider(
    'https://arbitrum.blockpi.network/v1/rpc/b9b90ca71a8ee022867bbd01acea67f69409cf8e'
  )
}
