import { KunaApiV3BaseInterface, KunaV3MePublicKeys } from '../types';
import Axios, { AxiosInstance } from 'axios';

export default class FiatProvider {
    private readonly client: KunaApiV3BaseInterface;
    private readonly payClient: AxiosInstance;

    public constructor(client: KunaApiV3BaseInterface) {
        this.client = client;

        this.payClient = Axios.create({
            // baseURL: 'https://pay.kuna.io/public-api',
            baseURL: 'https://com.paycore.io/public-api',
        });
    }

    public async getPublicKeys(): Promise<KunaV3MePublicKeys> {
        const me = await this.client.me();

        return me.public_keys;
    }

    public async payoutPrerequest(
        currency: string,
        amount: number,
    ): Promise<any> {
        const keys = await this.getPublicKeys();

        const publicKeyIndex
            = `deposit_sdk_${currency.toLowerCase()}_public_key`;

        const publicKey = keys[publicKeyIndex];

        const requestData = {
            amount: amount,
            currency: currency.toUpperCase(),
            public_key: publicKey,
        };

        const response
            = await this.payClient.post('/payout-prerequest', requestData);

        return response.data;
    }

    public async paymentPrerequest(currency: string): Promise<any> {
        const requestData = {
            currency: currency.toLowerCase(),
        };

        const response
            = await this.client.getClient().post('/v3/deposit/prerequest', requestData);

        return response.data;
    }

    public async exchangeRate(currency: string) {
        const requestData = {
            currency: currency.toLowerCase(),
        };

        const response
            = await this.client.getClient().post('/v3/deposit/exchange-rate', requestData);

        return response.data;
    }

    public async paymentPrerequestSign(
        currency: string,
    ): Promise<any> {
        const keys = await this.getPublicKeys();

        const publicKeyIndex
            = `deposit_sdk_${currency.toLowerCase()}_public_key`;
        const publicKey = keys[publicKeyIndex];

        const requestData = {
            currency: currency.toUpperCase(),
            public_key: publicKey,
        };

        const response
            = await this.payClient.post('/payment-prerequest', requestData);

        return response.data;
    }
}
