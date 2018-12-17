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


export type KunaV3Order = [number, number, number];

export type KunaV3OrderBook = {
    ask: KunaV3Order[];
    bid: KunaV3Order[];
};
