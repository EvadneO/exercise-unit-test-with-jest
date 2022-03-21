
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { fromEuroToDollar };
function fromEuroToDollar(oneEuros){ 
    let oneDollares = (oneEuros * 1.2);
    return oneDollares;
}

module.exports = { fromDollarToYen };
function fromDollarToYen(oneDollar) {
    let oneEuro = (oneDollar / 1.2);
    let oneYen = (oneEuro * 127.9);
    return oneYen;
}

module.exports = { fromYenToPound };
 function fromYenToPound(oneEur){
    let yenes = (oneEur / 127.9);
    let GBP = yenes * 0.8;
    return GBP;
 }