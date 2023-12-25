import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | MushroomSwap',
  defaultTitle: 'MushroomSwap',
  description:
    'A Native Dex On Fon Smart Chain.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: 'MushroomSwap - A next evolution DeFi exchange on Fon Smart Chain',
    description:
      'Most Popular and Use Dex On FON smart Chain.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
