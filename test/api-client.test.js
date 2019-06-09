const assert = require('assert');
const expect = require('expect');

const Kuna = require('../');
const Markets = require('../lib/markets').kunaMarketMap;
const _ = require('lodash');

describe('Kuna API v2 Client', function () {
  const badUrl = "https://kuna.io.2/api/v2";
  describe('constructor with bad url ' + badUrl,
    function () {
      var kuna = new Kuna.KunaApiClient("", "", badUrl);
      it('getTicker(btcuah)', function (done) {
        kuna.getTicker("btcuah").then(function () {
            done(new Error("should throw exception with bad url " + badUrl));
          })
          .catch(function () {
            done(); //swallow error
          });
      });

    });

  describe('default constructor',
    function () {
      var kuna = new Kuna.KunaApiClient();

      it('getTimestamp()', function (done) {
        kuna.getTimeStamp().then(function (response) {
            assert.equal(typeof response, "number");
            done();
          })
          .catch(function (error) {
            done(error);
          });
      });

      it('getTicker(btcuah)', function (done) {
        kuna.getTicker(Markets.btcuah.key).then(function (response) {
            done();
          })
          .catch(function (error) {
            done(error);
          });
      });
      it('getTickers()', function (done) {
        kuna.getTickers().then(function (response) {
            expect(response.length).toBeGreaterThan(0);

            var responseMarkets = Object.keys(_.mapKeys(response, "market"));
            var kunaApiMarkets = Object.keys(Markets);

            var missingMarkets = _.difference(responseMarkets, kunaApiMarkets);

            if (missingMarkets.length > 0) {
              done(new Error("markets.ts[kunaMarketMap] missing supported markets=" + missingMarkets));
              return;
            }
            var notSupportedMarkets = _.difference(kunaApiMarkets, responseMarkets);
            if (notSupportedMarkets.length > 0) {
              done(new Error("kunaMarketMap has not supported markets=" + notSupportedMarkets));
              return;
            }
            done();

          })
          .catch(function (error) {
            done(error);
          });
      });

      it(`getOrderBook(${Markets.btcuah.key})`, function (done) {
        kuna.getOrderBook(Markets.btcuah.key).then(function (response) {
            assert.equal("timestamp" in response, true);
            assert.equal("bids" in response, true);
            assert.equal("asks" in response, true);
            //we need to verify that asks in ascending order
            expect(+response["asks"][0][0]).toBeLessThan(+response["asks"][1][0]);
            expect(+response["bids"][0][0]).toBeGreaterThan(+response["bids"][1][0]);
            done();
          })
          .catch(function (error) {
            done(error);
          });
      });

      it(`getTrades(${Markets.btcuah.key})`, function (done) {
        kuna.getTrades(Markets.btcuah.key).then(function (response) {
            expect(response.length).toBeGreaterThan(0);
            assert.equal(typeof response[0]["id"], "number");
            assert.equal(typeof response[0]["price"], "number");
            assert.equal(typeof response[0]["volume"], "number");
            assert.equal(typeof response[0]["funds"], "number");
            assert.equal(typeof response[0]["market"], "string");
            assert.equal(typeof response[0]["created_at"], "string");
            // console.log(response);
            done();
          })
          .catch(function (error) {
            done(error);
          });
      });

    });

  describe('constructor with read only secret key - no trades permissions',
    function () {
      //this is testing account with no balance or usage in trading tokens for read only info
      var kuna = new Kuna.KunaApiClient("50VExXAENWUIPv9hWIEngSWYfevwxtsnNnPx3cxH", "vzveddrDHgnL9CJnTKRIR1UsI8fxX9eJ8KQ4SlBS");

      it('getUserInfo()', function (done) {
        kuna.getUserInfo().then(function (response) {
            assert.equal("email" in response, true);
            assert.equal(response.activated, true);
            assert.equal("accounts" in response, true);
            assert.equal(typeof response["accounts"], "object");
            done();
          })
          .catch(function (error) {
            done(error);
          });
      });

      it('getUserTrades()', function (done) {

        kuna.getUserTrades(Markets.ethuah.key).then(function (response) {
            // console.log("user trades=", response);
            done();
          })
          .catch(function (error) {
            console.log(error.response.data);
            done(error);
          });
      });

      it('getUserOrders() with no permissions', function (done) {
        kuna.getUserOrders(Markets.btcuah.key).then(function (response) {
            done(new Error("support to fail this request as we do not have trade permissions"));
          })
          .catch(function () {
            // console.log(error.response.data);
            done();
          });
      });

    });

  describe('constructor with trade secret key - with trades permissions',
    function () {
      var kuna = new Kuna.KunaApiClient("FWVmBtxETtEdqlYRZxfcfboJpyuZxO3BV6nPNVeM", "wsSWP1AeAo0mvr18t0CcBXPLhT5RJo3xLdgxQKXn");

      it('newOrder()+getUserOrders()+cancelOrder()', function (done) {
        kuna.newOrder('sell', 0.0001, Markets.wavesuah.key, 300000.1).then(function (response) {
            expect(response.id).toBeGreaterThan(0);

            kuna.getUserOrders(Markets.wavesuah.key).then(function (response2) {
                assert.equal(typeof response, "object");
                expect(response2.length).toBeGreaterThan(0);
                // console.log("user orders=", response);
                kuna.cancelOrder(response.id).then(function (response2) {
                    expect(response2.id).toBeGreaterThan(0);
                  })
                  .catch(function (error) {
                    done(error);
                    console.log(error.response.data);
                  });
              })
              .catch(function (error) {
                console.log(error.response.data);
                done(error);
              });
          })
          .catch(function (error) {
            done(error);
            console.log(error.response.data);
          });
        done();
      });

      it('getUserOrders()', function (done) {
        kuna.getUserOrders(Markets.wavesuah.key).then(function (response) {
            assert.equal(typeof response, "object");
            // console.log(response);
            // expect(response.length).toBeGreaterThan(0);
            // console.log("user orders=", response);
            done();
          })
          .catch(function (error) {
            console.log(error.response.data);
            done(error);
          });
      });

    });


});