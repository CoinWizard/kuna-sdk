export type KunaTicker = {
    market: string;
    buy: string;
    sell: string;
    low: string;
    high: string;
    last: string;
    vol: string;
    price: string;
};

export type KunaOrderBook = {
    timestamp: number;
    asks: [[number, number]];
    bids: [[number, number]];
};

export type KunaUserAccount = {
    currency: string;
    balance: number;
    locked: number;
}

export type KunaUserInfo = {
    email: string;
    accounts: KunaUserAccount[];
};

export type KunaTrade = {
    // trade ID
    id: number;
    price: number;
    volume: number;

    // volume in UAH
    funds: number;

    // market ID
    market: string;

    /**
     * string representation of UTC date, can be easy converted to Date object
     */
    created_at: string;

    /**
     * always null it's documented this way,
     * it will be interesting to find out if this is sell or buy side order
     */
    side: any;
};

export type KunaOrder = {
    // order ID
    id: number;

    // buy or sell
    side: string;

    // order type limit or market
    ord_type: string;

    // price for 1 BTC
    price: number;

    // the average trade price for the order
    avg_price: number;

    // order state always wait
    state: string;

    // market ID
    market: string;

    // the time of placing the order
    created_at: string;

    // volume of trading in BTC
    volume: number;

    // unfilled amount of BTC
    remaining_volume: number;

    // sold amount of BTC
    executed_volume: number;

    // the number of the trades on the order
    trades_count: number;
};
