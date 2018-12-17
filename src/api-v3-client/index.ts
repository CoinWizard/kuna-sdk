import { head } from 'lodash';
import Axios, { AxiosInstance } from 'axios';
import { KunaV3Ticker, KunaV3OrderBook, KunaV3Order } from './types';
import { mapTicker, mapOrderBook } from './utils';

export { KunaV3Ticker, KunaV3OrderBook, KunaV3Order };

export default class KunaApiV3Client {

    private readonly baseURL: string;
    private readonly client: AxiosInstance;

    public constructor(baseURL?: string) {
        this.baseURL = baseURL || 'https://api.kuna.io/v3';
        this.client = Axios.create({
            baseURL: this.baseURL,
        });
    }


    public async status(): Promise<any> {
        const response = await this.client.get('/status');

        return response.data;
    }


    public async getTicker(symbol: string): Promise<KunaV3Ticker> {
        const response = await this.client.get('/tickers', {
            params: { symbols: symbol },
        });

        return mapTicker(head(response.data));
    }


    public async getTickers(symbols?: string[]): Promise<KunaV3Ticker[]> {
        const requestSymbols = symbols ? symbols.join(',') : 'ALL';

        const response = await this.client.get('/tickers', {
            params: { symbols: requestSymbols },
        });

        return response.data.map(mapTicker);
    }


    public async getOrderBook(symbol: string): Promise<KunaV3OrderBook> {
        const response = await this.client.get(`/book/${symbol}`);

        return mapOrderBook(response.data);
    }


    public async checkKunaCode(code: string): Promise<any> {
        const response = await this.client.get(`/kuna_codes/${code}/check`);

        return response.data;
    }
}
