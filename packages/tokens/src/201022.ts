import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import { BUSD, CAKE, USDC, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const fonchainTokens = {
  weth: WETH9[ChainId.FON_CHAIN],
  mush: CAKE[ChainId.FON_CHAIN],
  usdt: USDC[ChainId.FON_CHAIN]

}
