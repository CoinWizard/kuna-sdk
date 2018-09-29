declare global {
    type KunaTicker = {
        market: string;
        buy: string;
        sell: string;
        low: string;
        high: string;
        last: string;
        vol: string;
        price: string;
    };

    type OrderBook = {
        timestamp: number;
        asks: [[number, number]];
        bids: [[number, number]];
    };

    type UserInfo = {
        email: string;
        accounts: [{ currency: string; balance: number; locked: number }];
    };

    type Trade = {
        id: number; //trade ID
        price: number;
        volume: number;
        funds: number; //volume in UAH
        market: string; //market ID,
        created_at: string; //string representation of UTC date, can be easy converted to Date object
        side: any; //always null it's documented this way, it will be interesting to find out if this is sell or buy side order
    };

    type Order = {
        id: number; // order ID,
        side: string; // buy or sell,
        ord_type: string; // order typ — limit or market,
        price: number; // price for 1 BTC,
        avg_price: number; // the average trade price for the order,
        state: string; // order state — always wait,
        market: string; // market ID,
        created_at: string; // the time of placing the order,
        volume: number; // volume of trading in BTC,
        remaining_volume: number; // unfilled amount of BTC,
        executed_volume: number; // sold amount of BTC,
        trades_count: number; // the number of the trades on the order
    };


}

export { };
