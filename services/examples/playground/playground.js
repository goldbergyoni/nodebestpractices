const util = require('util');

const deep = {
    something:{
        boo:{
            goo:1,
            doo:2,
            coo:3,
            roo:4,
            hoo:{
                dsdfs:
                {
                    fsdf:
                    {qoo:"fsdf"},
                    boo:{
                        goo:1,
                        doo:2,
                        coo:3,
                        roo:4,
                        hoo:{
                            dsdfs:
                            {
                                fsdf:
                                {qoo:43432}
                            }
                        }
                    }
                }
            }
        }
    }
}

console.time("serialize")
for (let index = 0; index < 3000; index++) {
    console.log(util.inspect(deep))
}
console.timeEnd("serialize")