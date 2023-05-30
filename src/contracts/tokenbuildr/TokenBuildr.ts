import artifact from './TokenBuildr.json'


export const contracts = {
    'sepolia': '0xac4E08Af133Fa59BB69707E1F40AAdF91785a905',
    'scroll-testnet': '0xBD278aE6A29Bd5FA5bE9729F1Bd8e93C76f11c87',
    'neonDevnet':'0x600d4a8cf5cAEFdecA95592fBB1c48a0c5a75C7d',
    'linea-testnet': '0x8B8AD9071d5bE4FDB8Fa123d8BFbF61b7E40FDA2',
    'avalanche-fuji': '0x600d4a8cf5cAEFdecA95592fBB1c48a0c5a75C7d',
    'evmos-testnet': '0x600d4a8cf5cAEFdecA95592fBB1c48a0c5a75C7d',
    'shmSphinx': '0x600d4a8cf5cAEFdecA95592fBB1c48a0c5a75C7d',

} as const;

export const TokenBuildrContract = {
    ...artifact,
} as const