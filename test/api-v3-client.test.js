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

    it('Trades History', async () => {
        const data = await apiClient.tradesHistory('btcuah');

        assert.strictEqual(typeof data, 'object');
        assert.strictEqual(data.s, 'ok');

        assert.ok(Array.isArray(data.t));
        assert.ok(Array.isArray(data.h));
        assert.ok(Array.isArray(data.l));
        assert.ok(Array.isArray(data.o));
        assert.ok(Array.isArray(data.c));
        assert.ok(Array.isArray(data.v));
    });

    it('Test Me', async () => {
        const data = await apiClient.me();

        assert.strictEqual(typeof data, 'object');
        assert.strictEqual(typeof data.email, 'string');
    });

    it('Test Wallets', async () => {
        const data = await apiClient.myWallets();

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Test Fees', async () => {
        const data = await apiClient.getFees();

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Test Check Kuna Code', async () => {
        const data = await apiClient.kunaCode().check('DfJhS');

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
        await apiClient.kunaCode().redeemed();
    });

    it('Kuna Code issued by me', async () => {
        await apiClient.kunaCode().issued();
    });

    it('Get deposit info', async () => {
        const data = await apiClient.getDepositInfo('xrp');
        assert.strictEqual(typeof data, 'object');
    });

    it('Get asset History', async () => {
        const data = await apiClient.assetHistory();
        assert.strictEqual(typeof data, 'object');
    });
});
