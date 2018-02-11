const expect = require('chai').expect;
const sinon = require('sinon');
const orderServiceUnderTest = require('./orderService').orderService;
const orderDAL =  require('./orderService').orderDAL;

describe('Order Service', () => {

    before(() => {
        sinon.stub(orderDAL.prototype, orderDAL.prototype.save.name).callsFake((order)=>{
            console.log('Save stub is running now')
            return order;
        })
    });

    describe('Adding new', () => {
        it('Under 1000 order, expect to be approved #cold', () => {
            const result = new orderServiceUnderTest().add({});const orderDAL = require("./orderService").orderDAL;
            expect(result.approved).to.be.true;
        })

        it('Price is higher than 1000, expect not approved #cold', () => {
            const result = new orderServiceUnderTest().add({
                price: 1500
            });
            expect(result.approved).to.be.false;
        })

        it('Proving empty order, expect an error #hot', () => {
            expect(new orderServiceUnderTest().add).to.throw(Error);
        })
    });
});