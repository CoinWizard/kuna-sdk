export const mapTicker = (marketSymbol: string, tickerResponse: any): KunaTicker => {
    return {
        market: marketSymbol,
        ...tickerResponse,
    };
};

export const mapTrade = (value: object): Trade => {
    return {
        id: +value['id'],
        price: +value['price'],
        volume: +value['volume'],
        funds: +value['funds'],
        market: value['market'],
        created_at: "" + value['created_at'],
        side: value['side'],
    };
};

export const mapOrder = (value: object): Order => {
    return {
        id: +value["id"],
        side: value["side"],
        ord_type: value["ord_type"],
        price: +value["price"],
        avg_price: +value["avg_price"],
        state: value["state"],
        market: value["market"],
        created_at: value["created_at"],
        volume: +value["volume"],
        remaining_volume: +value["remaining_volume"],
        executed_volume: +value["executed_volume"],
        trades_count: +value["trades_count"],
    };
};