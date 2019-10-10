import Axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import qs from 'qs';
import { map, flatMap, chain } from 'lodash';
import crypto from 'crypto';
import { URL } from 'url';

import { KunaTicker, KunaOrder, KunaOrderBook, KunaTrade, KunaUserAccount, KunaUserInfo } from './types';
import { create as createDebugger } from './debugger';
import { mapOrder, mapTicker, mapTrade } from './utils';

export class KunaApiClient {

    private accessKey?: string;
    private secretKey?: string;

    private readonly debug;
    private readonly baseURL: string = 'https://kuna.io/api/v2';
    private readonly axiosClient: AxiosInstance;

    public constructor(accessKey?: string, secretKey?: string, baseURL?: string) {
        if (accessKey) {
            this.accessKey = accessKey;
        }
        if (secretKey) {
            this.secretKey = secretKey;
        }
        if (baseURL) {
            this.baseURL = baseURL;
        }

        this.axiosClient = Axios.create({
            baseURL: this.baseURL,
        });

        this.debug = createDebugger('api-client');
    }


    public setKeys(accessKey: string, secretKey: string) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }


    public async getTimeStamp(): Promise<number> {
        const { data }: AxiosResponse = await this.axiosClient.get('/timestamp');

        this.debug('getTimeStamp() ', data);

        return data;
    }


    public async getTicker(market: string): Promise<KunaTicker> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/tickers/${market}`);

        this.debug(`getTicker(${market}) `, data);

        return mapTicker(market, data.ticker);
    }


    public async getTickers(): Promise<KunaTicker[]> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/tickers`);

        this.debug('getTickers() ', data);

        return map(data, (tickerResponse: any, market: string) => {
            return mapTicker(market, tickerResponse.ticker);
        });
    }


    public async getOrderBook(market: string): Promise<KunaOrderBook> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/depth?market=${market}`);

        this.debug(`getOrderBook(${market}) = `, data);

        // kuna returns asks prices in descending order,
        // that is not expected and different from binance response
        data.asks.sort(function (a, b) {
            if (+a[0] === +b[0]) return 0;
            else return (+a[0] < +b[0]) ? -1 : 1;
        });

        return data;
    }


    public async getTrades(market: string): Promise<KunaTrade[]> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/trades?market=${market}`);

        this.debug(`getTrades(${market}) = `, data);

        return flatMap(data, mapTrade);
    }


    public async getUserInfo(): Promise<KunaUserInfo> {
        const data: KunaUserInfo = await this.privateRequest<KunaUserInfo>('/members/me');

        this.debug('getUserInfo data = ', data);

        return data;
    }


    public async getUserTrades(market: string): Promise<KunaTrade[]> {
        const data = await this.privateRequest('/trades/my', { market: market });

        this.debug('getUserTrades data = ', data);

        return flatMap(data, mapTrade);
    }

    public async getUserOrders(market: string): Promise<KunaOrder[]> {
        const data = await this.privateRequest('/orders', { market: market });

        this.debug('getUserTrades data = ', data);

        return flatMap(data, mapOrder);
    }

    public async getUserOrder(orderID: string): Promise<KunaOrder> {
        const data = await this.privateRequest('/order', { id: orderID });

        this.debug('getUserOrder data = ', data);

        return mapOrder(data);
    }


    public async newOrder(side: string, volume: number, market: string, price: number): Promise<KunaOrder> {
        const requestParams = {
            market: market,
            price: price,
            side: side,
            volume: volume,
        };

        const data = await this.privateRequest('/orders', requestParams, 'POST');

        this.debug('newOrder data=', data);

        return mapOrder(data);
    }


    public async newMarketOrder(
        side: string,
        volume: number,
        market: string,
        isQuote: boolean = false,
    ): Promise<KunaOrder> {
        const requestParams = {
            market: market,
            ord_type: isQuote ? 'market_by_quote' : 'market',
            side: side,
            volume: volume,
        };

        const data = await this.privateRequest('/orders', requestParams, 'POST');

        this.debug('newOrder data=', data);

        return mapOrder(data);
    }


    public async cancelOrder(id: number): Promise<KunaOrder> {

        const data = await this.privateRequest('/order/delete', { id: id }, 'POST');

        this.debug('newOrder data=', data);

        return mapOrder(data);
    }


    public async privateRequest<R = object>(path: string, params: object = {}, method: Method = 'GET'): Promise<R> {
        const tonce = new Date().getTime();

        let requestParams = {
            access_key: this.accessKey,
            ...params,
            tonce: tonce,
        };

        const signature = this.signRequest(method, path, requestParams);
        const methodUrl = path + '?' + qs.stringify(requestParams);

        const { data }: AxiosResponse = await this.axiosClient.request({
            url: `${methodUrl}&signature=${signature}`,
            method: method,
        });

        return data as R;
    }


    /**
     * Signature is generated by an algorithm HEX(HMAC-SHA256("HTTP-verb|URI|params", secret_key))
     *
     * HTTP-verb    GET or POST
     * URI          the query string without the domain
     * params       assorted parameters, including access_key and tonce, but without signature
     * secret_key   secret part of API-token
     *
     * For example, a request for user bidding history:
     * HEX(
     *   HMAC-SHA256(
     *     "GET|/api/v2/trades/my|access_key=dV6vEJe1CO&market=btcuah&tonce=1465850766246",
     *     "AYifzxC3Xo"
     *   )
     * )
     */
    protected signRequest(httpVerb: string, path: string, params: object): string {

        // @see https://nodejs.org/api/url.html#url_the_whatwg_url_api
        const u = new URL(this.baseURL + path);

        const assortedParams = chain(params).toPairs().sortBy(0).fromPairs().value();

        const queryString = `${httpVerb}|${u.pathname}|${qs.stringify(assortedParams)}`;

        return crypto.createHmac('sha256', this.secretKey)
            .update(queryString)
            .digest('hex');
    }
}
