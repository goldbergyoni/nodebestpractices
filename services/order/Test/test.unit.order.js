






















const orderService = require('./../orderService')
const Order = require('./../order')
const expect = require('chai').expect

describe('Order', ()=>{
    describe('Add new' , ()=>{
        it('Add new valid order, expect positive result', ()=>{
            const newOrder = new Order(1,2,5, 'new', new Date());
            const result = newOrder.validate(Error);
            
            expect(result).to.be.true;
        })
        
        it('Add order with invalid user, expect error', ()=>{
            const newOrder = new Order(1,'user as string', 7,'new', new Date());
        
            const result = newOrder.validate();
            
            expect(result).to.be.false;            
        })
    })
})


