import { HistoryResolutions, KunaApiV3BaseInterface } from 'api-v3-client/types';

export default class ChartProvider {
    private readonly client: KunaApiV3BaseInterface;

    public constructor(client: KunaApiV3BaseInterface) {
        this.client = client;
    }

    /**
     * @param {string}              market
     * @param {HistoryResolutions}  resolution
     * @param {number}              from
     * @param {number}              to
     *
     * @return {Promise<any>}
     */
    public async history(
        market: string,
        resolution: HistoryResolutions = 60,
        from?: number,
        to?: number,
    ): Promise<any> {
        if (!from) {
            from = (new Date().getTime() / 1000) - (7 * 24 * 60 * 60);
        }

        if (!to) {
            to = new Date().getTime() / 1000;
        }

        const response = await this.client.getClient().get('/v3/tv/history', {
            params: {
                symbol: market,
                resolution: resolution,
                from: from,
                to: to,
            },
        });

        return response.data;
    }
}
