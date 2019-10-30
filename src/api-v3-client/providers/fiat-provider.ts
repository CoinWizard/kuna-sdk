import {
    KunaApiV3BaseInterface,
    KunaV3MePublicKeys,
    KunaV3Prerequest,
    KunaV3PaymentInvoiceRequest,
    KunaV3PaymentInvoice,
} from '../types';
import Axios, { AxiosInstance } from 'axios';

export default class FiatProvider {
    private readonly client: KunaApiV3BaseInterface;
    private readonly payClient: AxiosInstance;

    public constructor(client: KunaApiV3BaseInterface) {
        this.client = client;

        this.payClient = Axios.create({
            baseURL: 'https://paygate.kuna.io/public-api',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public getPayClient(baseURL?: string): AxiosInstance {
        if (baseURL) {
            return Axios.create({
                baseURL: baseURL,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return this.payClient;
    }

    public async getPublicKeys(): Promise<KunaV3MePublicKeys> {
        const me = await this.client.me();

        return me.public_keys;
    }


    public async payoutPrerequest(
        currency: string,
        amount: number,
        isWorldwide: boolean = false,
    ): Promise<any> {
        const keys = await this.getPublicKeys();

        const publicKeyIndex = FiatProvider.buildDepositPublicKeyIndex(currency, isWorldwide);
        const publicKey = keys[publicKeyIndex];

        const requestData = {
            amount: amount,
            currency: currency.toUpperCase(),
            public_key: publicKey,
        };

        const response
            = await this.getPayClient().post('/payout-prerequest', requestData);

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


    public async createPaymentInvoice(requestData: KunaV3PaymentInvoiceRequest): Promise<KunaV3PaymentInvoice> {
        const { data }
            = await this.getPayClient().post<{ data: KunaV3PaymentInvoice }>('/payment-invoices', requestData);

        return data.data;
    }


    public async exchangeRates(currency: string): Promise<any> {
        const requestData = {
            currency: currency.toLowerCase(),
        };

        const response
            = await this.client.getClient().post('/v3/deposit/exchange-rates', requestData);

        return response.data;
    }


    public async paymentPrerequestSign(
        currency: string,
        isWorldwide: boolean = false,
    ): Promise<KunaV3Prerequest> {
        const keys = await this.getPublicKeys();

        const publicKeyIndex = FiatProvider.buildDepositPublicKeyIndex(currency, isWorldwide);
        const publicKey = keys[publicKeyIndex];

        const requestData = {
            currency: currency.toUpperCase(),
            public_key: publicKey,
        };

        const { data }
            = await this.getPayClient().post('/payment-prerequest', requestData);

        return data.data;
    }


    protected static buildDepositPublicKeyIndex(currency: string, isWorldwide: boolean = false): string {
        return [
            'deposit_sdk',
            currency.toLowerCase(),
            isWorldwide ? 'worldwide' : undefined,
            'public_key',
        ]
            .filter((s: any) => !!s)
            .join('_');
    }
}
