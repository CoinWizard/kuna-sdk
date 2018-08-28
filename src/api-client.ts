import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { map } from 'lodash';
import { create as createDebugger } from './debugger';

function mapTicker(marketSymbol: string, tickerResponse: any): KunaTicker {
    return {
        market: marketSymbol,
        ...tickerResponse,
    };
}

export class KunaApiClient {

    private readonly debug;
    private readonly baseURL: string = 'https://kuna.io/api/v2';
    private readonly axiosClient: AxiosInstance;


    public constructor(baseURL?: string) {
        if (baseURL) {
            this.baseURL = baseURL;
        }

        this.axiosClient = Axios.create({
            baseURL: this.baseURL,
        });

        this.debug = createDebugger('api-client');
    }

    public async getTicker(market: string): Promise<KunaTicker> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/tickers/${market}`);

        this.debug('GET_TICKER', data);

        return mapTicker(market, data.ticker);
    }

    public async getTickers(): Promise<KunaTicker[]> {
        const { data }: AxiosResponse = await this.axiosClient.get(`/tickers`);

        this.debug('GET_TICKERS', data);

        return map(data, (tickerResponse: any, market: string) => {
            return mapTicker(market, tickerResponse.ticker);
        });
    }
}
