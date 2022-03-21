
test('sum 14+9 nos dará 23', function(){
    let total = sum(14,9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')
test("fromEuroToDollar 3.5*1.2 dollars", function(){
    let total = fromEuroToDollar(3.5,1.2);
    expect(total(3.5)).toBe(4.2);
})

test("fromDollarToYen oneEuro*127.9 yenes", function() {
    const { fromDollarToYen } = require('./app.js')
    let total = fromDollarToYen(oneEuro,127.9);
    expect(total).toBe(106.58);
})

const { fromYenToPound} = require('./app.js')
test("fromYenToPound yenes*0.8 GBP", function() {
    let total = fromYenToPound(yenes,0.8);
    expect(total).toBe(0.00625);
})