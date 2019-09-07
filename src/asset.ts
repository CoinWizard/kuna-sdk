import { AssetColor } from './colors';

export enum KunaAssetUnit {
    Bitcoin = 'BTC',
    Ethereum = 'ETH',
    Dash = 'DASH',
    Litecoin = 'LTC',
    Ripple = 'XRP',
    Stellar = 'XLM',
    EOS = 'EOS',

    DreamTeam = 'DREAM',

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
    PaytomatToken = 'PTI',


    KunaToken = 'KUN',
    BinanceCoin = 'BNB',

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
    backgroundColor: AssetColor | string;
    format: string;
};

export const kunaAssets: Record<KunaAssetUnit | string, KunaAsset> = {
    [KunaAssetUnit.Bitcoin]: {
        key: KunaAssetUnit.Bitcoin,
        name: 'Bitcoin',
        color: AssetColor.Bitcoin,
        backgroundColor: '#FFF',
        format: '0,0.[000000]',
    },
    [KunaAssetUnit.Ethereum]: {
        key: KunaAssetUnit.Ethereum,
        name: 'Ethereum',
        color: AssetColor.Ethereum,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Dash]: {
        key: KunaAssetUnit.Dash,
        name: 'Dash',
        color: AssetColor.Dash,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Litecoin]: {
        key: KunaAssetUnit.Litecoin,
        name: 'Litecoin',
        color: AssetColor.Litecoin,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.UkrainianHryvnia]: {
        key: KunaAssetUnit.UkrainianHryvnia,
        name: 'Ukrainian Hryvnia',
        color: AssetColor.UkrainianHryvnia,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.KunaToken]: {
        key: KunaAssetUnit.KunaToken,
        name: 'Kun',
        color: AssetColor.KunaToken,
        backgroundColor: '#FFF',
        format: '0,0',
    },
    [KunaAssetUnit.BinanceCoin]: {
        key: KunaAssetUnit.BinanceCoin,
        name: 'Binance Coin',
        color: AssetColor.BinanceCoin,
        backgroundColor: '#1A1A1A',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.EthereumClassic]: {
        key: KunaAssetUnit.EthereumClassic,
        name: 'Ethereum Classic',
        color: AssetColor.Ethereum,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.BitcoinCashSV]: {
        key: KunaAssetUnit.BitcoinCashSV,
        name: 'Bitcoin Cash SV',
        color: AssetColor.BitcoinCashSV,
        backgroundColor: '#FFF',
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.BitcoinCashABC]: {
        key: KunaAssetUnit.BitcoinCashABC,
        name: 'Bitcoin Cash ABC',
        color: AssetColor.BitcoinCashABC,
        backgroundColor: '#FFF',
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.BitcoinCash]: {
        key: KunaAssetUnit.BitcoinCash,
        name: 'Bitcoin Cash',
        color: AssetColor.BitcoinCash,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Waves]: {
        key: KunaAssetUnit.Waves,
        name: 'Waves',
        color: AssetColor.Waves,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.DreamTeam]: {
        key: KunaAssetUnit.DreamTeam,
        name: 'DreamTeam',
        color: AssetColor.DreamTeam,
        backgroundColor: AssetColor.DreamTeamBackground,
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.PaytomatToken]: {
        key: KunaAssetUnit.PaytomatToken,
        name: 'Paytomat Token',
        color: AssetColor.PaytomatToken,
        backgroundColor: '#FFF',
        format: '0,0.[000000]',
    },
    [KunaAssetUnit.Golos]: {
        key: KunaAssetUnit.Golos,
        name: 'Golos',
        color: AssetColor.Golos,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.B2bx]: {
        key: KunaAssetUnit.B2bx,
        name: 'B2bx',
        color: AssetColor.B2bx,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Ripple]: {
        key: KunaAssetUnit.Ripple,
        name: 'Ripple',
        color: AssetColor.Ripple,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.EOS]: {
        key: KunaAssetUnit.EOS,
        name: 'EOS',
        color: AssetColor.EOS,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Hacken]: {
        key: KunaAssetUnit.Hacken,
        name: 'Hacken',
        color: AssetColor.Hacken,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Stellar]: {
        key: KunaAssetUnit.Stellar,
        name: 'Stellar',
        color: AssetColor.Stellar,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.TrueUSD]: {
        key: KunaAssetUnit.TrueUSD,
        name: 'TrueUSD',
        color: AssetColor.TrueUSD,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.ZCash]: {
        key: KunaAssetUnit.ZCash,
        name: 'ZCash',
        color: AssetColor.ZCash,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Remme]: {
        key: KunaAssetUnit.Remme,
        name: 'Remme',
        color: AssetColor.Remme,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Karbo]: {
        key: KunaAssetUnit.Karbo,
        name: 'Karbo',
        color: AssetColor.Karbo,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Nem]: {
        key: KunaAssetUnit.Nem,
        name: 'Nem',
        color: AssetColor.Nem,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.StasisEuro]: {
        key: KunaAssetUnit.StasisEuro,
        name: 'Stasis Euro',
        color: AssetColor.StasisEuro,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.AdvancedUSD]: {
        key: KunaAssetUnit.AdvancedUSD,
        name: 'Advanced USD',
        color: AssetColor.AdvancedUSD,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.AdvancedRUB]: {
        key: KunaAssetUnit.AdvancedRUB,
        name: 'Advanced RUB',
        color: AssetColor.AdvancedRUB,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.Tether]: {
        key: KunaAssetUnit.Tether,
        name: 'Tether',
        color: AssetColor.Tether,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.USDollar]: {
        key: KunaAssetUnit.USDollar,
        name: 'U.S. Dollar',
        color: AssetColor.USDollar,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.RussianRuble]: {
        key: KunaAssetUnit.RussianRuble,
        name: 'Russian Ruble',
        color: AssetColor.RussianRuble,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
    [KunaAssetUnit.Euro]: {
        key: KunaAssetUnit.Euro,
        name: 'Euro',
        color: AssetColor.Euro,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },


    /**
     * @deprecated
     */
    [KunaAssetUnit.CSNP]: {
        key: KunaAssetUnit.CSNP,
        name: 'Crowdsale Net',
        color: AssetColor.CSNP,
        backgroundColor: '#FFF',
        format: '0,0.[000000]',
    },
    [KunaAssetUnit.Revain]: {
        key: KunaAssetUnit.Revain,
        name: 'Revain',
        color: AssetColor.Revain,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Aeron]: {
        key: KunaAssetUnit.Aeron,
        name: 'Aeron',
        color: AssetColor.Aeron,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Everus]: {
        key: KunaAssetUnit.Everus,
        name: 'Everus',
        color: AssetColor.Everus,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.ERC20]: {
        key: KunaAssetUnit.ERC20,
        name: 'ERC20',
        color: AssetColor.ERC20,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.GolosGold]: {
        key: KunaAssetUnit.GolosGold,
        name: 'Golos Gold',
        color: AssetColor.GolosGold,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.FoodCoin]: {
        key: KunaAssetUnit.FoodCoin,
        name: 'FoodCoin',
        color: AssetColor.FoodCoin,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Octanox]: {
        key: KunaAssetUnit.Octanox,
        name: 'Octanox',
        color: AssetColor.Octanox,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.Venus]: {
        key: KunaAssetUnit.Venus,
        name: 'Venus',
        color: AssetColor.Venus,
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    },
    [KunaAssetUnit.NanjCoin]: {
        key: KunaAssetUnit.NanjCoin,
        name: 'Nanjcoin',
        color: AssetColor.NanjCoin,
        backgroundColor: '#FFF',
        format: '0,0.[00000000]',
    },
    [KunaAssetUnit.RussianMinerCoin]: {
        key: KunaAssetUnit.RussianMinerCoin,
        name: 'Russian Miner Coin',
        color: AssetColor.RussianMinerCoin,
        backgroundColor: '#FFF',
        format: '0,0.[00]',
    },
};

export function getAsset(assetUnit: KunaAssetUnit): KunaAsset {
    return kunaAssets[assetUnit] || {
        key: assetUnit,
        name: 'Asset ' + assetUnit,
        color: '#0096C8',
        backgroundColor: '#FFF',
        format: '0,0.[0000]',
    };
}
