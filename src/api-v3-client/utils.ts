import { KunaV3Order, KunaV3OrderBook, KunaV3Ticker } from './types';

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

export function mapOrderBook(data: Array<KunaV3Order>): KunaV3OrderBook {
    const book = {
        bid: [],
        ask: [],
    };

    data.forEach((order: KunaV3Order) => {
        if (order[1] > 0) {
            book.bid.push(order);
        } else {
            book.ask.push(order);
        }
    });

    return book;
}
