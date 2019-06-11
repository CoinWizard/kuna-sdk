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
    KunaV3LastTrade,
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
            = crypto.createHmac('sha384', this.apiToken.privateKey).
            update(signatureString).
            digest('hex');

        // console.log({
        //     path: path,
        //     data: data,
        //     signature: signature,
        //     nonce: nonce,
        // });

        const response = await this.client.request({
            url: path,
            method: method,
            data: data,
            headers: {
                'Kun-Nonce': nonce,
                'Kun-ApiKey': this.apiToken.publicKey,
                'Kun-Signature': signature,
            },
        });

        // console.log(response.data);

        return response.data;
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

    public async getLastTrades(symbol: string): Promise<KunaV3LastTrade> {
        const response = await this.client.get(`/trades/${symbol}`);

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

    public async myWallets(): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/r/wallets',
            'POST',
            {},
        );
    }

    public async me(): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/me',
            'POST',
            {},
        );
    }

    public async myOrderList(market?: string): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/r/orders' + (market ? `/${market}` : ''),
            'POST',
            {},
        );
    }

    public async myOrderHistory(
        market?: string,
        start?: number,
        end?: number,
        limit?: number,
        sort?: boolean,
    ): Promise<any> {

        const data: any = {};
        if (start) {
            data.start = start;
        }
        if (end) {
            data.end = end;
        }
        if (limit) {
            data.limit = limit;
        }

        if (typeof sort !== 'undefined') {
            data.sort = sort ? 1 : -1;
        }

        return await this.privateRequest(
            '/v3/auth/r/orders' + (market ? `/${market}` : '') + '/hist',
            'POST',
            data,
        );
    }

    public async myTradesByOrder(
        market: string,
        orderId: number | string,
    ): Promise<any> {
        return await this.privateRequest(
            `/v3/auth/r/order/${market}:${orderId}/trades`,
            'POST',
            {},
        );
    }

    public async myCancelOrder(
        orderIds: string | string[] | number | number[],
    ): Promise<any> {
        let path = `/v3/order/cancel`;
        const data: any = {};
        if (Array.isArray(orderIds)) {
            data.order_ids = orderIds;
            path += '/multy';
        } else {
            data.order_id = orderIds;
        }

        return await this.privateRequest(path, 'POST', data);
    }

    public async checkKunaCode(code: string): Promise<any> {
        const response = await this.client.get(`/v3/kuna_codes/${code}/check`);

        return response.data;
    }

    public async kunaCodeCreate(amount: number, cur: string): Promise<any> {
        let data: any = {
            amount: amount,
            currency: cur,
        };

        return await this.privateRequest(
            `/v3/auth/kuna_codes`,
            'POST',
            data,
        );
    }

    public async kunaCodeDetails(id: number): Promise<any> {
        let data: any = { id };
        return await this.privateRequest(
            `/v3/auth/kuna_codes/details`,
            'POST',
            data,
        );
    }

    public async kunaCodesRedeemed(): Promise<any[]> {
        return await this.privateRequest(
            '/v3/auth/kuna_codes/redeemed-by-me',
            'POST',
            {},
        );
    }

    public async kunaCodeIssued(): Promise<any[]> {
        return await this.privateRequest(
            '/v3/auth/kuna_codes/issued-by-me',
            'POST',
            {},
        );
    }
}
