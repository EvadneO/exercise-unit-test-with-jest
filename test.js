const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test('sum 14+9 nos dará 23', function(){
    let total = sum(14,9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')
test("fromEuroToDollar 3.5*1.2 dollars", function(){
    let total = fromEuroToDollar(3.5,);
    expect(total).toBe(4.2);
})

test("fromDollarToYen oneEuro*127.9 yenes", function() {
    const { fromDollarToYen } = require('./app.js')
    let total = fromDollarToYen(16);
    expect(total).toBe(2455.68);
})

const { fromYenToPound} = require('./app.js')
test("fromYenToPound yenes*0.8 GBP", function() {
    let total = fromYenToPound(35);
    expect(total).toBe(28);
})