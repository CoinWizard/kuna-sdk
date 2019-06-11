const assert = require('assert');
const expect = require('expect');
const moment = require('moment');

const Kuna = require('../');

describe('Test API V3 Client', () => {

    let apiClient;
    before(() => {
        apiClient = new Kuna.KunaApiV3Client({
            publicKey: '50VExXAENWUIPv9hWIEngSWYfevwxtsnNnPx3cxH',
            privateKey: 'vzveddrDHgnL9CJnTKRIR1UsI8fxX9eJ8KQ4SlBS',
        });
    });

    it('Test Me', async () => {
        const data = await apiClient.me();

        assert.ok(typeof data, 'object');
        assert.ok(typeof data.email, 'string');
    });

    it('Test Wallets', async () => {
        const data = await apiClient.myWallets();

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Test Check Kuna Code', async () => {
        const data = await apiClient.checkKunaCode('DfJhS');

        assert.ok(typeof data, 'object');
    });

    it('Test my Order list', async () => {
        const data = await apiClient.myOrderList();

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Test my Order history', async () => {
        const data = await apiClient.myOrderHistory(
            undefined,
            moment().subtract(12, 'months').valueOf(),
        );

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Test my Order Trades', async () => {
        const data = await apiClient.myTradesByOrder('wavesuah', 100235252);

        assert.ok(typeof data, 'object');
    });

    it('Kuna Code redeemed by me', async () => {
        const data = await apiClient.kunaCodesRedeemed();
        console.log(data);
    });

    it('Kuna Code issued by me', async () => {
        const data = await apiClient.kunaCodeIssued();
        console.log(data);
    });
});
