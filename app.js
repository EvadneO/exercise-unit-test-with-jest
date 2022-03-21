const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(oneEuros){ 
    let oneDollares = (oneEuros * 1.2);
    return oneDollares;
}

function fromDollarToYen(oneDollar) {
    let oneEuro = (oneDollar * 1.2);
    let oneYen = (oneEuro * 127.9);
    return oneYen;
}

function fromYenToPound(yenes){
    let GBP = yenes * 0.8;
    return GBP;
}

module.exports = { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen };