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

    it('Test Create Deposit addresses', async () => {
        try {
            const data = await apiClient.creteDepositAddress('ltc');
            assert.ok(data, 'Response must be an object');
        } catch (error) {

        }

        const depositInfo = await apiClient.getDepositInfo('ltc');
        assert.ok(depositInfo, 'Response must be an object');
    });

    it('Test Fees', async () => {
        const data = await apiClient.getFees();

        assert.ok(Array.isArray(data), 'Response must be an array');
    });

    it('Send To', async () => {
        const data = await apiClient.sendTo({
            currency: 'btc',
            kunaid: 'kunaid-r1ukpd5hq3me',

        });

        console.log(data);
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

    it('Get asset History Deposit', async () => {
        const data = await apiClient.assetHistory('deposits');
        assert.strictEqual(typeof data, 'object');
    });

    it('Payout Pre Request', async () => {
        const data = await apiClient.fiat().payoutPrerequest('UAH', 1000);
        assert.strictEqual(typeof data, 'object');
    });

    it('Deposit details', async () => {
        const data = await apiClient.depositDetails(581303);
        assert.strictEqual(typeof data, 'object');
    });

    it('Deposit / Payment Pre Request', async () => {
        const data = await apiClient.fiat().paymentPrerequest('UAH');
        assert.strictEqual(typeof data, 'object');
    });

    it('Deposit / Exchange Rates', async () => {
        const data = await apiClient.fiat().exchangeRates('UAH');
        assert.strictEqual(typeof data, 'object');
    });
});
