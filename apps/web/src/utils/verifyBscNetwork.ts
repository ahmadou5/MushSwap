import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.FON_CHAIN || chainId === ChainId.FON_CHAIN
}
