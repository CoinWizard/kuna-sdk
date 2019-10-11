import { AxiosInstance, Method } from 'axios';

export type HistoryResolutions = number | string | '1D' | '1W';

export type KunaV3Ticker = {
    symbol: string;
    bid: number;
    bidSize: number;
    ask: number;
    askSize: number;
    dailyChange: number;
    dailyChangePercent: number;
    lastPrice: number;
    volume: number;
    high: number;
    low: number;
}

export type KunaV3LastTrade = {};

export type KunaV3Order = [number, number, number];

export type KunaV3OrderBook = {
    ask: KunaV3Order[];
    bid: KunaV3Order[];
};

export type KunaV3ExchangeRate = {
    currency: string;
    btc: number;
    uah: number;
    usd: number;
};

export type KunaV3Currency = {
    id: number;
    name: string;
    code: string;
    coin: boolean;
    explorer_link?: string;
    has_memo: boolean;
    icons: {
        xl?: string;
        std?: string;
        png_3x?: string;
        png_2x?: string;
    };

    precision: { real: number; trade: number; };
    sort_order: number;
};

export type KunaV3LandingPageStatistic = {
    day_usd_sum: number;
    traders: number;
    week_usd_sum: number;
};

export type KunaV3Market = {
    base_unit: string;
    quote_unit: string;
    base_precision: number;
    id: string;
    price_change: number;
    quote_precision: number;
};

export type KunaV3MePublicKeys = {
    deposit_sdk_uah_public_key: string;
    deposit_sdk_usd_public_key: string;
    deposit_sdk_rub_public_key: string;
    deposit_sdk_uah_worldwide_public_key: string;
    [key: string]: string;

}

export type KunaV3Me = {
    email: string;
    kunaid: string;
    two_factor: boolean;
    withdraw_confirmation: true;
    public_keys: KunaV3MePublicKeys;
};

export type KunaV3SendToParams = {
    currency: string;
    amount: number;
    kunaid: string;
    gRecaptchaResponse: string;

    comment?: string;
    channel?: string;

    payment_service?: string;
    return_url?: string;
    fields?: any;
    worldwide?: boolean;
};

export type KunaV3SendTo = {
    address: string;
    memo: string;
    sn: string;
    currency: string;
};

export type KunaAPIToken = {
    publicKey: string;
    privateKey: string;
};


export type KunaV3IOFee = {
    type: 'fixed' | 'percent';
    amount?: string;
    asset?: {
        amount: string;
        currency: string;
        to_usd: string;
    };
};

export type KunaLanguageAsset = 'ru' | 'en' | 'ua';

export type KunaV3Fee = {
    code: string;
    currency: string;
    category: 'coin' | 'rub' | 'uah' | 'usd';

    deposit_fees: KunaV3IOFee[];
    withdraw_fees: KunaV3IOFee[];
    min_deposit?: {
        amount: number;
        currency: string;
        to_usd: number;
    };
    min_withdraw?: {
        amount: number;
        currency: string;
        to_usd: number;
    };
};

export type KunaV3PaymentField = {
    key: string;
    type: 'string' | 'array' | 'object' | 'number';
    label: Record<KunaLanguageAsset, string>;
    hint: Record<KunaLanguageAsset, string>;
    example?: any;
    regexp?: string;
    required: boolean;
    position: number;
};

export type KunaV3PaymentService = {
    code: string;
    method: string;
    flow: string;
    currency: string;
    fields: KunaV3PaymentField[];
    amount_min: number;
    amount_max: number;
    exchange_rate?: number;
    amount?: number;
    fee: {
        rate: number;
        fixed: number;
        min: number;
        max: number;
    }
};

export type KunaV3PaymentMethod = {
    code: string;
    category: string;
    description: string;
    name: Record<KunaLanguageAsset, string>;
    logo: string;
    icon: string;
    metadata: any;
    position: number;
    hide: boolean;
};

export type KunaV3Prerequest = {
    amount?: number;
    currency: string;
    test_mode: boolean;
    services: Record<string, KunaV3PaymentService>;
    methods: Record<string, KunaV3PaymentMethod>;
    account: {
        name: string;
        description: string;
        icon: string;
        website: string;
    }
};


export type KunaV3CoinWithdrawParams = {
    currency: string;
    amount: string | number;
    address: string;
    memo?: string;

    allowBlankMemo?: boolean;
    includeFee?: boolean;
};

export type KunaV3Withdraw = {
    status: string;
    message: string;
    withdrawal_id: string;
};

export type KunaV3WithdrawDetail = {
    id: number;
    created_at: string;
    destination: string;
    currency: string;
    amount: string;
    status: string;
    txid?: string;
    sn: string;
    fee: string;
    total_amount: string;
    reference_id: any;
};


export interface KunaApiV3BaseInterface {
    privateRequest<R = any>(
        path: string,
        method?: Method,
        data?: object,
    ): Promise<R>;

    getClient(): AxiosInstance;

    me(): Promise<KunaV3Me>;
}
