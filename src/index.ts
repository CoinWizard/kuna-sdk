export { KunaTicker } from './ticker';
export { AssetColor } from './colors';
export { KunaAssetUnit, KunaAsset, kunaAssets, getAsset } from './asset';
export { KunaMarket, kunaMarketMap } from './markets';
import { KunaApiClient } from './api-client';

export { KunaApiClient };
export const kunaApiClient: KunaApiClient = new KunaApiClient();
