import { getDefaultConfig } from 'connectkit'
import { configureChains, createConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

import { sepolia, scrollTestnet, neonDevnet, lineaTestnet, avalancheFuji, evmosTestnet, shardeumSphinx } from '@wagmi/chains'

const walletConnectProjectId = 'mm'

const { chains } = configureChains(
  [
    sepolia,
    scrollTestnet,
    neonDevnet,
    lineaTestnet,
    avalancheFuji,
    evmosTestnet,
    // shardeumSphinx
  ],
  [
    infuraProvider({ apiKey: 'c6c8d8ff284e4aeda9dc04579c5e7354' }),
    publicProvider(),
  ]
)

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'TokeNice | k1merran.eth',
    walletConnectProjectId,
    chains,
  })
)
