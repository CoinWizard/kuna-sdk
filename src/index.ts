export { KunaTicker, KunaOrder, KunaOrderBook, KunaTrade, KunaUserAccount, KunaUserInfo } from './types';
export { AssetColor } from './colors';
export { KunaAssetUnit, KunaAsset, kunaAssets, getAsset } from './asset';
export { KunaMarket, kunaMarketMap } from './markets';

export {
    KunaV3Ticker,
    KunaV3OrderBook,
    KunaV3Order,
    KunaV3ExchangeRate,
    KunaV3Currency,
    KunaV3LandingPageStatistic,
    KunaV3Market,
} from './api-v3-client';


import { KunaApiClient } from './api-client';
import KunaApiV3Client from './api-v3-client';

export { KunaApiClient, KunaApiV3Client };
export const kunaApiClient: KunaApiClient = new KunaApiClient();
