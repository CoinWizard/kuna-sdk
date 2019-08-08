import { KunaApiV3BaseInterface } from '../types';

export default class KunaCodeProvider {
    private readonly client: KunaApiV3BaseInterface;

    public constructor(client: KunaApiV3BaseInterface) {
        this.client = client;
    }

    public async check(code: string): Promise<any> {
        const response = await this.client.getClient()
                                   .get(`/v3/kuna_codes/${code}/check`);

        return response.data;
    }

    public async create(amount: number, cur: string): Promise<any> {
        let data: any = {
            amount: amount,
            currency: cur,
        };

        return await this.client.privateRequest(
            `/v3/auth/kuna_codes`,
            'POST',
            data,
        );
    }

    public async details(id: number): Promise<any> {
        let data: any = { id };
        return await this.client.privateRequest(
            `/v3/auth/kuna_codes/details`,
            'POST',
            data,
        );
    }

    public async redeemed(): Promise<any[]> {
        return await this.client.privateRequest(
            '/v3/auth/kuna_codes/redeemed-by-me',
            'POST',
            {},
        );
    }

    public async issued(): Promise<any[]> {
        return await this.client.privateRequest(
            '/v3/auth/kuna_codes/issued-by-me',
            'POST',
            {},
        );
    }
}
