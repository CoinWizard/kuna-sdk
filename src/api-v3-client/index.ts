import { head } from 'lodash';
import Axios, { AxiosInstance } from 'axios';
import { KunaV3Ticker } from './types';
import { mapTicker } from './utils';

export { KunaV3Ticker };

export default class KunaApiV3Client {

    private readonly baseURL: string;
    private readonly client: AxiosInstance;

    public constructor(baseURL?: string) {
        this.baseURL = baseURL || 'https://api.kuna.io/v3';
        this.client = Axios.create({
            baseURL: this.baseURL,
        });
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
            params: {
                symbols: requestSymbols,
            },
        });

        return response.data.map(mapTicker);
    }
}
