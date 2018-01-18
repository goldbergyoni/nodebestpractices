const request = require('supertest');

describe('Order Service API #hot #api', () => {

    describe('Adding new', () => {
        it('Under 1000 order, expect to be approved', () => {
                    request(require('./orderAPI'))
                        .post('/api/orders')
                        .send({
                            price: 100
                        })
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .end(function (err, res) {
                        });
                })
    });
});