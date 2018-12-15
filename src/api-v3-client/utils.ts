import { KunaV3Ticker } from './types';

export function mapTicker(data: Array<any>): KunaV3Ticker {
    return {
        symbol: data[0],
        bid: data[1],
        bidSize: data[2],
        ask: data[3],
        askSize: data[4],
        dailyChange: data[5],
        dailyChangePercent: data[6],
        lastPrice: data[7],
        volume: data[8],
        high: data[9],
        low: data[10],
    };
}
