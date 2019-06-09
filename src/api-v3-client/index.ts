import { head } from 'lodash';
import crypto from 'crypto';
import Axios, { AxiosInstance } from 'axios';
import { mapTicker, mapOrderBook } from './utils';

import {
    KunaV3Ticker,
    KunaV3OrderBook,
    KunaV3Order,
    KunaV3ExchangeRate,
    KunaV3Currency,
    KunaV3LandingPageStatistic,
    KunaV3Market,
    KunaAPIToken,
} from './types';

export {
    KunaV3Ticker,
    KunaV3OrderBook,
    KunaV3Order,
    KunaV3ExchangeRate,
    KunaV3Currency,
    KunaV3LandingPageStatistic,
    KunaV3Market,
    KunaAPIToken,
};

export default class KunaApiV3Client {

    private readonly baseURL: string;
    private readonly client: AxiosInstance;
    private readonly apiToken?: KunaAPIToken;

    public constructor(apiToken?: KunaAPIToken, baseURL?: string) {
        this.baseURL = baseURL || 'https://api.kuna.io';
        this.client = Axios.create({
            baseURL: this.baseURL,
        });

        this.apiToken = apiToken;
    }

    public async privateRequest(
        path: string,
        method = 'GET',
        data: object = {},
    ): Promise<any> {
        if (!this.apiToken) {
            throw new Error('API Token does not provided');
        }

        const nonce = new Date().getTime();

        const signatureString = `${path}${nonce}${JSON.stringify(data)}`;
        const signature
            = crypto.createHmac('sha384', this.apiToken.privateKey)
            .update(signatureString)
            .digest('hex');

        this.client.request({
            url: path,
            method: method,
            data: data,
            headers: {
                'Kun-Nonce': nonce,
                'Kun-ApiKey': this.apiToken.publicKey,
                'Kun-Signature': signature,
            },
        });

    }

    public async status(): Promise<any> {
        const response = await this.client.get('/v3/status');

        return response.data;
    }

    public async getTicker(symbol: string): Promise<KunaV3Ticker> {
        const response = await this.client.get('/v3/tickers', {
            params: { symbols: symbol },
        });

        return mapTicker(head(response.data));
    }

    public async getTickers(symbols?: string[]): Promise<KunaV3Ticker[]> {
        const requestSymbols = symbols ? symbols.join(',') : 'ALL';

        const response = await this.client.get('/v3/tickers', {
            params: { symbols: requestSymbols },
        });

        return response.data.map(mapTicker);
    }

    public async getOrderBook(symbol: string): Promise<KunaV3OrderBook> {
        const response = await this.client.get(`/v3/book/${symbol}`);

        return mapOrderBook(response.data);
    }

    public async checkKunaCode(code: string): Promise<any> {
        const response = await this.client.get(`/v3/kuna_codes/${code}/check`);

        return response.data;
    }

    public async getExchangeRates(): Promise<KunaV3ExchangeRate[]> {
        const response = await this.client.get('/v3/exchange-rates');

        return response.data;
    }

    public async getCurrencies(): Promise<KunaV3Currency[]> {
        const response = await this.client.get('/v3/currencies');

        return response.data;
    }

    public async getLandingPageStatistics(): Promise<KunaV3Currency[]> {
        console.warn(
            'Please! Dont use the method KunaApiV3Client::getLandingPageStatistics()',
        );

        const response = await this.client.get('/v3/landing_page_statistic');

        return response.data;
    }

    public async getMarkets(): Promise<KunaV3Market[]> {
        const response = await this.client.get('/v3/markets');

        return response.data;
    }
}
