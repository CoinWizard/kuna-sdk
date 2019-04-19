import { AssetColor } from './colors';

export enum KunaAssetUnit {
    Bitcoin = 'BTC',
    Ethereum = 'ETH',
    Dash = 'DASH',
    Litecoin = 'LTC',
    Ripple = 'XRP',
    Stellar = 'XLM',
    EOS = 'EOS',

    EthereumClassic = 'ETC',

    BitcoinCash = 'BCH',
    BitcoinCashSV = 'BSV',
    BitcoinCashABC = 'BAB',

    Waves = 'WAVES',
    Golos = 'GOL',

    Remme = 'REM',
    Karbo = 'KRB',
    Nem = 'XEM',

    B2bx = 'B2B',
    Hacken = 'HKN',
    ZCash = 'ZEC',

    AdvancedUSD = 'AUSD',
    AdvancedRUB = 'ARUB',
    TrueUSD = 'TUSD',
    Tether = 'USDT',
    StasisEuro = 'EURS',

    KunaToken = 'KUN',

    UkrainianHryvnia = 'UAH',
    USDollar = 'USD',
    RussianRuble = 'RUB',
    Euro = 'EUR',


    /** @deprecated */
    Aeron = 'ARN',
    /** @deprecated */
    Revain = 'R',
    /** @deprecated */
    CSNP = 'CSNP',
    /** @deprecated */
    Everus = 'EVR',
    /** @deprecated */
    ERC20 = 'ERC20',
    /** @deprecated */
    GolosGold = 'GBG',
    /** @deprecated */
    FoodCoin = 'FOOD',
    /** @deprecated */
    Octanox = 'OTX',
    /** @deprecated */
    NanjCoin = 'NANJ',
    /** @deprecated */
    RussianMinerCoin = 'RMC',
    /** @deprecated */
    Venus = 'VENUS',
}

export type KunaAsset = {
    key: KunaAssetUnit | string;
    name: string;
    color: AssetColor | string;
    format: string;
};

export const kunaAssets: Record<KunaAssetUnit | string, KunaAsset> = {
    [KunaAssetUnit.Bitcoin]: {
        key: KunaAssetUnit.Bitcoin,
        name: 'Bitcoin',
        color: AssetColor.Bitcoin,
        format: '0,0.[000000]',
    },
    [KunaAssetUnit.Ethereum]: {
        key: KunaAssetUnit.Ethereum,
        name: 'Ethereum',
        color: AssetColor.Ethereum,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Dash]: {
        key: KunaAssetUnit.Dash,
        name: 'Dash',
        color: AssetColor.Dash,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Litecoin]: {
        key: KunaAssetUnit.Litecoin,
        name: 'Litecoin',
        color: AssetColor.Litecoin,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.UkrainianHryvnia]: {
        key: KunaAssetUnit.UkrainianHryvnia,
        name: 'Ukrainian Hryvnia',
        color: AssetColor.UkrainianHryvnia,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.KunaToken]: {
        key: KunaAssetUnit.KunaToken,
        name: 'Kun',
        color: AssetColor.KunaToken,
        format: '0,0',
    },
    [KunaAssetUnit.EthereumClassic]: {
        key: KunaAssetUnit.EthereumClassic,
        name: 'Ethereum Classic',
        color: AssetColor.Ethereum,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.BitcoinCashSV]: {
        key: KunaAssetUnit.BitcoinCashSV,
        name: 'Bitcoin Cash SV',
        color: AssetColor.BitcoinCashSV,
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.BitcoinCashABC]: {
        key: KunaAssetUnit.BitcoinCashABC,
        name: 'Bitcoin Cash ABC',
        color: AssetColor.BitcoinCashABC,
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.BitcoinCash]: {
        key: KunaAssetUnit.BitcoinCash,
        name: 'Bitcoin Cash',
        color: AssetColor.BitcoinCash,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Waves]: {
        key: KunaAssetUnit.Waves,
        name: 'Waves',
        color: AssetColor.Waves,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Golos]: {
        key: KunaAssetUnit.Golos,
        name: 'Golos',
        color: AssetColor.Golos,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.B2bx]: {
        key: KunaAssetUnit.B2bx,
        name: 'B2bx',
        color: AssetColor.B2bx,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Ripple]: {
        key: KunaAssetUnit.Ripple,
        name: 'Ripple',
        color: AssetColor.Ripple,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.EOS]: {
        key: KunaAssetUnit.EOS,
        name: 'EOS',
        color: AssetColor.EOS,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Hacken]: {
        key: KunaAssetUnit.Hacken,
        name: 'Hacken',
        color: AssetColor.Hacken,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Stellar]: {
        key: KunaAssetUnit.Stellar,
        name: 'Stellar',
        color: AssetColor.Stellar,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.TrueUSD]: {
        key: KunaAssetUnit.TrueUSD,
        name: 'TrueUSD',
        color: AssetColor.TrueUSD,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.ZCash]: {
        key: KunaAssetUnit.ZCash,
        name: 'ZCash',
        color: AssetColor.ZCash,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Remme]: {
        key: KunaAssetUnit.Remme,
        name: 'Remme',
        color: AssetColor.Remme,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Karbo]: {
        key: KunaAssetUnit.Karbo,
        name: 'Karbo',
        color: AssetColor.Karbo,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Nem]: {
        key: KunaAssetUnit.Nem,
        name: 'Nem',
        color: AssetColor.Nem,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.StasisEuro]: {
        key: KunaAssetUnit.StasisEuro,
        name: 'Stasis Euro',
        color: AssetColor.StasisEuro,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.AdvancedUSD]: {
        key: KunaAssetUnit.AdvancedUSD,
        name: 'Advanced USD',
        color: AssetColor.AdvancedUSD,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.AdvancedRUB]: {
        key: KunaAssetUnit.AdvancedRUB,
        name: 'Advanced RUB',
        color: AssetColor.AdvancedRUB,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.Tether]: {
        key: KunaAssetUnit.Tether,
        name: 'Tether',
        color: AssetColor.Tether,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.USDollar]: {
        key: KunaAssetUnit.USDollar,
        name: 'U.S. Dollar',
        color: AssetColor.USDollar,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.RussianRuble]: {
        key: KunaAssetUnit.RussianRuble,
        name: 'Russian Ruble',
        color: AssetColor.RussianRuble,
        format: '0,0.[00]',
    },
    [KunaAssetUnit.Euro]: {
        key: KunaAssetUnit.Euro,
        name: 'Euro',
        color: AssetColor.Euro,
        format: '0,0.[00]',
    },


    /**
     * @deprecated
     */
    [KunaAssetUnit.CSNP]: {
        key: KunaAssetUnit.CSNP,
        name: 'Crowdsale Net',
        color: AssetColor.CSNP,
        format: '0,0.[000000]',
    },
    [KunaAssetUnit.Revain]: {
        key: KunaAssetUnit.Revain,
        name: 'Revain',
        color: AssetColor.Revain,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Aeron]: {
        key: KunaAssetUnit.Aeron,
        name: 'Aeron',
        color: AssetColor.Aeron,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Everus]: {
        key: KunaAssetUnit.Everus,
        name: 'Everus',
        color: AssetColor.Everus,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.ERC20]: {
        key: KunaAssetUnit.ERC20,
        name: 'ERC20',
        color: AssetColor.ERC20,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.GolosGold]: {
        key: KunaAssetUnit.GolosGold,
        name: 'Golos Gold',
        color: AssetColor.GolosGold,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.FoodCoin]: {
        key: KunaAssetUnit.FoodCoin,
        name: 'FoodCoin',
        color: AssetColor.FoodCoin,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Octanox]: {
        key: KunaAssetUnit.Octanox,
        name: 'Octanox',
        color: AssetColor.Octanox,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Venus]: {
        key: KunaAssetUnit.Venus,
        name: 'Venus',
        color: AssetColor.Venus,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.NanjCoin]: {
        key: KunaAssetUnit.NanjCoin,
        name: 'Nanjcoin',
        color: AssetColor.NanjCoin,
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.RussianMinerCoin]: {
        key: KunaAssetUnit.RussianMinerCoin,
        name: 'Russian Miner Coin',
        color: AssetColor.RussianMinerCoin,
        format: '0,0.[00]',
    },
};

export function getAsset(assetUnit: KunaAssetUnit): KunaAsset {
    return kunaAssets[assetUnit] || {
        key: assetUnit,
        name: '<no assets>',
        color: '#0096C8',
        format: '0,0.[0000]',
    };
}
