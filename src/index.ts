export { KunaTicker, KunaOrder, KunaOrderBook, KunaTrade, KunaUserAccount, KunaUserInfo } from './types';
export { AssetColor } from './colors';
export { KunaAssetUnit, KunaAsset, kunaAssets, getAsset } from './asset';
export { KunaMarket, kunaMarketMap } from './markets';
import { KunaApiClient } from './api-client';
import KunaApiV3Client, { KunaV3Ticker } from './api-v3-client';

export { KunaApiClient, KunaApiV3Client, KunaV3Ticker };
export const kunaApiClient: KunaApiClient = new KunaApiClient();
