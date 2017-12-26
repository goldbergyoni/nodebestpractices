const Order = require('./../order')
const expect = require('chai').expect

it('Check valid order, expect get positive result', ()=>{
    const newOrder = new Order(0, 1 , 2 , 'New', new Date());
    const result = newOrder.validate();
    expect(result).to.be.true
})

it('Check order with inalid user, expect negative result', ()=>{
    const newOrder = new Order(0, 'ds' , 2 , 'New', new Date());
    const result = newOrder.validate();
    expect(result).to.be.false
})





















// const orderService = require('./../orderService')
// const Order = require('./../order')
// const expect = require('chai').expect

// describe('Order', ()=>{
//     describe('Add new' , ()=>{
//         it('Add new valid order, expect positive result', ()=>{
//             const newOrder = new Order(1,2,5, 'new', new Date());
//             const result = newOrder.validate(Error);
            
//             expect(result).to.be.true;
//         })
        
//         it('Add order with invalid user, expect error', ()=>{
//             const newOrder = new Order(1,'user as string', 7,'new', new Date());
        
//             const result = newOrder.validate();
            
//             expect(result).to.be.false;            
//         })
//     })
// })


