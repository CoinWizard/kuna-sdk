/**
 * @warning
 *
 * It's unstable version of node Kuna API v3 client.
 * Please do not use it on production environment and don't try to trade with
 * real funds.
 */

import { head } from 'lodash';
import crypto from 'crypto';
import pusher from 'pusher-js';
import Axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { mapTicker, mapOrderBook } from './utils';
import { KunaCodeProvider, FiatProvider, PusherProvider, ChartProvider } from './providers';

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
    KunaApiV3BaseInterface,
    KunaV3MePublicKeys,
    KunaV3Me,
    KunaV3SendToParams,
    KunaV3SendTo,
    KunaV3IOFee,
    KunaV3Fee,
    KunaV3PaymentField,
    KunaV3PaymentService,
    KunaV3PaymentMethod,
    KunaV3Prerequest,
    KunaV3CoinWithdrawParams,
    KunaV3Withdraw,
    KunaV3WithdrawDetail,

    KunaLanguageAsset,
    HistoryResolutions,
} from './types';

export {
    KunaV3Ticker,
    KunaV3OrderBook,
    KunaV3Order,
    KunaV3ExchangeRate,
    KunaV3Currency,
    KunaV3LandingPageStatistic,
    KunaV3Market,
    KunaV3MePublicKeys,
    KunaV3Me,
    KunaV3SendToParams,
    KunaV3SendTo,
    KunaV3IOFee,
    KunaV3Fee,
    KunaV3PaymentField,
    KunaV3PaymentService,
    KunaV3PaymentMethod,
    KunaV3Prerequest,
    KunaV3CoinWithdrawParams,
    KunaV3Withdraw,
    KunaV3WithdrawDetail,

    KunaLanguageAsset,
    HistoryResolutions,
    KunaAPIToken,
};

export default class KunaApiV3Client implements KunaApiV3BaseInterface {

    private readonly baseURL: string;
    private readonly client: AxiosInstance;
    private readonly apiToken?: KunaAPIToken;

    private kunaCodeProvider?: KunaCodeProvider;
    private chartProvider?: ChartProvider;
    private fiatProvider?: FiatProvider;

    public constructor(apiToken?: KunaAPIToken, baseURL?: string) {
        this.baseURL = baseURL || 'https://api.kuna.io';
        this.client = Axios.create({
            baseURL: this.baseURL,
        });

        this.apiToken = apiToken;
    }

    public async privateRequest<R = any>(
        path: string,
        method: Method = 'GET',
        data: object = {},
    ): Promise<R> {
        if (!this.apiToken) {
            throw new Error('API Token does not provided');
        }

        const nonce = new Date().getTime();

        const signatureString = `${path}${nonce}${JSON.stringify(data)}`;
        const signature = crypto
            .createHmac('sha384', this.apiToken.privateKey)
            .update(signatureString)
            .digest('hex');

        const requestConfig: AxiosRequestConfig = {
            url: path,
            method: method,
            data: data,
            headers: {
                'Kun-Nonce': nonce,
                'Kun-ApiKey': this.apiToken.publicKey,
                'Kun-Signature': signature,
            },
        };

        const response = await this.client.request(requestConfig);

        return response.data as R;
    }

    public createPusher(PusherBuilder: pusher.PusherStatic): PusherProvider {
        return new PusherProvider(PusherBuilder, this);
    }

    /**
     * This method returns Axios HTTP client
     *
     * @return {AxiosInstance}
     */
    public getClient(): AxiosInstance {
        return this.client;
    }

    /**
     * @return {KunaCodeProvider}
     */
    public kunaCode(): KunaCodeProvider {
        if (!this.kunaCodeProvider) {
            this.kunaCodeProvider = new KunaCodeProvider(this);
        }

        return this.kunaCodeProvider;
    }

    /**
     * @return {FiatProvider}
     */
    public fiat(): FiatProvider {
        if (!this.fiatProvider) {
            this.fiatProvider = new FiatProvider(this);
        }

        return this.fiatProvider;
    }

    /**
     * @return {ChartProvider}
     */
    public chart(): ChartProvider {
        if (!this.chartProvider) {
            this.chartProvider = new ChartProvider(this);
        }

        return this.chartProvider;
    }

    public async status(): Promise<any> {
        const response = await this.client.get('/v3/status');

        return response.data;
    }


    public async getFees(): Promise<KunaV3Fee[]> {
        const response = await this.client.get('/v3/fees');

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

    /**
     * @param {KunaV3SendToParams}  params
     *
     * @return {Promise<KunaV3SendTo>}
     */
    public async sendTo(params: KunaV3SendToParams): Promise<KunaV3SendTo> {
        const {
            gRecaptchaResponse,
            kunaid,
            ...elseData
        } = params;

        const data = {
            ...elseData,
            recipient: kunaid,
            'g-recaptcha-response': gRecaptchaResponse,
        };

        const response = await this.client.post('/v3/send_to', data);

        return response.data;
    }

    public async checkKunaid(kunaid: string): Promise<any> {
        const response = await this.client.post('/v3/kunaid', {
            kunaid: kunaid,
        });

        return response.data;
    }

    public async getLandingPageStatistics(): Promise<KunaV3Currency[]> {
        const response = await this.client.get('/v3/landing_page_statistic');

        return response.data;
    }

    public async getMarkets(): Promise<KunaV3Market[]> {
        const response = await this.client.get('/v3/markets');

        return response.data;
    }

    /** @deprecated */
    public async tradesHistory(
        market: string,
        resolution: HistoryResolutions = 60,
        from?: number,
        to?: number,
    ): Promise<any> {

        if (!from) {
            from = (new Date().getTime() / 1000) - (7 * 24 * 60 * 60);
        }

        if (!to) {
            to = new Date().getTime() / 1000;
        }

        const response = await this.client.get('/v3/tv/history', {
            params: {
                symbol: market,
                resolution: resolution,
                from: from,
                to: to,
            },
        });

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

    public async getDepositInfo(currency: string): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/deposit/info',
            'POST',
            { currency },
        );
    }

    public async createDepositAddress(currency: string): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/payment_addresses',
            'POST',
            { currency: currency.toLowerCase() },
        );
    }

    public async fundSourceList(currency: number): Promise<any> {
        return await this.privateRequest(
            '/v3/auth/fund_sources/list',
            'POST',
            { currency },
        );
    }

    public async assetHistory(
        type?: 'withdraws' | 'deposits',
        currencyIds?: number[],
        statuses?: string[],
    ): Promise<any> {
        const data: any = {};
        if (currencyIds && currencyIds.length > 0) {
            data.currency_ids = currencyIds;
        }

        if (statuses && statuses.length > 0) {
            data.statuses = statuses;
        }

        return await this.privateRequest(
            `/v3/auth/assets-history` + (type ? `/${type}` : ''),
            'POST',
            data,
        );
    }

    public async depositDetails(id: string): Promise<any> {
        return await this.privateRequest(
            `/v3/auth/deposit/details`,
            'POST',
            { id: id },
        );
    }

    public async requestCoinWithdraw(params: KunaV3CoinWithdrawParams): Promise<KunaV3Withdraw> {
        const requestData = {
            withdraw_type: params.currency.toLowerCase(),
            amount: params.amount,
            address: params.address,
            payment_id: params.memo,
            allow_blank_memo: params.allowBlankMemo,
            withdrawal: params.includeFee,
        };

        const data = await this.privateRequest<KunaV3Withdraw[]>('/v3/auth/withdraw', 'POST', requestData);

        const withdrawResponse = data[0];
        if (!withdrawResponse) {
            throw new Error('No withdraw response');
        }

        return withdrawResponse;
    }


    public async withdrawDetails(withdrawID: string | number): Promise<KunaV3WithdrawDetail> {
        const requestData = {
            id: withdrawID,
        };

        return await this.privateRequest<KunaV3WithdrawDetail>(
            '/v3/auth/withdraw/details',
            'POST',
            requestData,
        );
    }
}
