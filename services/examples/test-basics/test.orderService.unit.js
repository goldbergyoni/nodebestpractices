const expect = require('chai').expect;
const sinon = require('sinon');

describe('Order Service', () => {

    before(() => {
        sinon.stub(DAL.prototype, DAL.prototype.save.name).callsFake((order)=>{
            console.log('Save stub is running now')
            return order;
        })    
    });

    describe('Adding new', () => {
        it('Under 1000 order, expect to be approved #cold', () => {
            const result = new orderService().add({});
            expect(result.approved).to.be.true;
        })

        it('Price is higher than 1000, expect not approved #cold', () => {
            const result = new orderService().add({
                price: 1500
            });
            expect(result.approved).to.be.false;
        })

        it('Proving empty order, expect an error #hot', () => {
            expect(new orderService().add).to.throw(Error);
        })
    });
});


class orderService {
    add(order) {
        if (!order)
            throw new Error("Bad boy!")

        const result = order;

        if (order.price > 1000) {
            result.approved = false;
        } else {
            result.approved = true;
        }

        new DAL().save(order);

        return result;
    }
}

class DAL{
    save(order){
        return new Promise((resolve, reject) => {
            console.log('Save DAL is running now')
            setTimeout(() => {
                resolve(order);
            }, 1000);
        });
    }
}