import { KunaAssetUnit } from './asset';

export type KunaMarket = {
    key: string;
    baseAsset: KunaAssetUnit;
    quoteAsset: KunaAssetUnit;
    /** @deprecated */
    format: string;
    decimal: number;

    compareTo?: string;
    disabled?: boolean;
};

export const kunaMarketMap: Record<string, KunaMarket> = {
    /**
     * to UAH
     */
    btcuah: {
        key: 'btcuah',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },
    ethuah: {
        key: 'ethuah',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ethusd',
    },
    dashuah: {
        key: 'dashuah',
        baseAsset: KunaAssetUnit.Dash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'dshusd',
    },
    xrpuah: {
        key: 'xrpuah',
        baseAsset: KunaAssetUnit.Ripple,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'xrpusd',
    },
    ltcuah: {
        key: 'ltcuah',
        baseAsset: KunaAssetUnit.Litecoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ltcusd',
    },
    eosuah: {
        key: 'eosuah',
        baseAsset: KunaAssetUnit.EOS,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'eosusd',
    },
    krbuah: {
        key: 'krbuah',
        baseAsset: KunaAssetUnit.Karbo,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    xemuah: {
        key: 'xemuah',
        baseAsset: KunaAssetUnit.Nem,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    remuah: {
        key: 'remuah',
        baseAsset: KunaAssetUnit.Remme,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    wavesuah: {
        key: 'wavesuah',
        baseAsset: KunaAssetUnit.Waves,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    zecuah: {
        key: 'zecuah',
        baseAsset: KunaAssetUnit.ZCash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    bchuah: {
        key: 'bchuah',
        baseAsset: KunaAssetUnit.BitcoinCash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    gbguah: {
        key: 'gbguah',
        baseAsset: KunaAssetUnit.GolosGold,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    xlmuah: {
        key: 'xlmuah',
        baseAsset: KunaAssetUnit.Stellar,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[0000]',
        decimal: 4,
    },
    tusduah: {
        key: 'tusduah',
        baseAsset: KunaAssetUnit.TrueUSD,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    eursuah: {
        key: 'eursuah',
        baseAsset: KunaAssetUnit.StasisEuro,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[0000]',
        decimal: 4,
    },
    ausduah: {
        key: 'ausduah',
        baseAsset: KunaAssetUnit.AdvancedUSD,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },

    /**
     * to Bitcoin
     */
    ethbtc: {
        key: 'ethbtc',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[0000]',
        decimal: 4,
    },
    eosbtc: {
        key: 'eosbtc',
        baseAsset: KunaAssetUnit.EOS,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    kunbtc: {
        key: 'kunbtc',
        baseAsset: KunaAssetUnit.KunaToken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    bchbtc: {
        key: 'bchbtc',
        baseAsset: KunaAssetUnit.BitcoinCash,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    hknbtc: {
        key: 'hknbtc',
        baseAsset: KunaAssetUnit.Hacken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    rbtc: {
        key: 'rbtc',
        baseAsset: KunaAssetUnit.Revain,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    arnbtc: {
        key: 'arnbtc',
        baseAsset: KunaAssetUnit.Aeron,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    erc20btc: {
        key: 'erc20btc',
        baseAsset: KunaAssetUnit.ERC20,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    csnpbtc: {
        key: 'csnpbtc',
        baseAsset: KunaAssetUnit.CSNP,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 8,
    },

    /**
     * to Stasis Euro
     */
    btceurs: {
        key: 'btceurs',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.StasisEuro,
        format: '0,0.[000000]',
        decimal: 6,
    },

    /**
     * to Golos Gold
     */
    golgbg: {
        key: 'golgbg',
        baseAsset: KunaAssetUnit.Golos,
        quoteAsset: KunaAssetUnit.GolosGold,
        format: '0,0.[0000]',
        decimal: 4,
    },

    /**
     * to Ethereum
     */
    remeth: {
        key: 'remeth',
        baseAsset: KunaAssetUnit.Remme,
        quoteAsset: KunaAssetUnit.Ethereum,
        format: '0,0.[00000000]',
        decimal: 8,
    },


    /**
     * Advanced USD
     */
    btcausd: {
        key: 'btcausd',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.AdvancedUSD,
        format: '0,0.[00]',
        decimal: 2,
    },

    /**
     * Advanced RUB
     */
    btcarub: {
        key: 'btcarub',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.AdvancedRUB,
        format: '0,0.[00]',
        decimal: 2,
    },

    ausdarub: {
        key: 'ausdarub',
        baseAsset: KunaAssetUnit.AdvancedUSD,
        quoteAsset: KunaAssetUnit.AdvancedRUB,
        format: '0,0.[00]',
        decimal: 2,
    },

    uaharub: {
        key: 'uaharub',
        baseAsset: KunaAssetUnit.UkrainianHryvnia,
        quoteAsset: KunaAssetUnit.AdvancedRUB,
        format: '0,0.[00]',
        decimal: 2,
    },

};
