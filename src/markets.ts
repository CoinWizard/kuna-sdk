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
    bnbuah: {
        key: 'bnbuah',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
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
    dreamuah: {
        key: 'dreamuah',
        baseAsset: KunaAssetUnit.DreamTeam,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
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
    goluah: {
        key: 'goluah',
        baseAsset: KunaAssetUnit.Golos,
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
    ptiuah: {
        key: 'ptiuah',
        baseAsset: KunaAssetUnit.PaytomatToken,
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
    usdtuah: {
        key: 'usdtuah',
        baseAsset: KunaAssetUnit.Tether,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    usduah: {
        key: 'usduah',
        baseAsset: KunaAssetUnit.USDollar,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
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

    /**
     * to Tether
     */
    btcusdt: {
        key: 'btcusdt',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },
    ethusdt: {
        key: 'ethusdt',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ethusd',
    },
    bnbusdt: {
        key: 'bnbusdt',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[00]',
        decimal: 2,
    },
    gbgusdt: {
        key: 'gbgusdt',
        baseAsset: KunaAssetUnit.GolosGold,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[000000]',
        decimal: 6,
    },


    /**
     * to Bitcoin
     */
    kunbtc: {
        key: 'kunbtc',
        baseAsset: KunaAssetUnit.KunaToken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    bnbbtc: {
        key: 'bnbbtc',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[0000]',
        decimal: 4,
    },
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
    bchbtc: {
        key: 'bchbtc',
        baseAsset: KunaAssetUnit.BitcoinCash,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    dreambtc: {
        key: 'dreambtc',
        baseAsset: KunaAssetUnit.DreamTeam,
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
    arnbtc: {
        key: 'arnbtc',
        baseAsset: KunaAssetUnit.Aeron,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    ptibtc: {
        key: 'ptibtc',
        baseAsset: KunaAssetUnit.PaytomatToken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    golbtc: {
        key: 'golbtc',
        baseAsset: KunaAssetUnit.Golos,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[00000000]',
        decimal: 8,
    },


    /**
     * to Stasis Euro
     */
    btceurs: {
        key: 'btceurs',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.StasisEuro,
        format: '0,0.[0000]',
        decimal: 4,
    },

    /**
     * to U.S. Dollar
     */
    ethusd: {
        key: 'ethusd',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
    },
    btcusd: {
        key: 'btcusd',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },
    bnbusd: {
        key: 'bnbusd',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
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
     * to Russian Rubble
     */
    btcrub: {
        key: 'btcrub',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },
    bnbrub: {
        key: 'bnbrub',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },
    ethrub: {
        key: 'ethrub',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },
    usdtrub: {
        key: 'usdtrub',
        baseAsset: KunaAssetUnit.Tether,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },
};
