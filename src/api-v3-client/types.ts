import { AxiosInstance } from 'axios';

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
    [key: string]: string;

}

export type KunaV3Me = {
    email: string;
    kunaid: string;
    two_factor: boolean;
    withdraw_confirmation: true;
    public_keys: KunaV3MePublicKeys;
};

export type KunaAPIToken = {
    publicKey: string;
    privateKey: string;
};

export interface KunaApiV3BaseInterface {
    privateRequest<R = any>(
        path: string,
        method?: 'GET' | 'POST' | 'DELETE' | 'PUT',
        data?: object,
    ): Promise<R>;

    getClient(): AxiosInstance;

    me(): Promise<KunaV3Me>;
}
