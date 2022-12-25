import inquirer from "inquirer";
var Currencies;
(function (Currencies) {
    Currencies["PKRUPEE"] = "PKR";
    Currencies["INRRUPEE"] = "INR";
    Currencies["USDOLLAR"] = "USD";
})(Currencies || (Currencies = {}));
let ratesMap = new Map();
ratesMap.set(Currencies.PKRUPEE, { "INR": 0.27027, "PKR": 1, "USD": 0.0041 });
ratesMap.set(Currencies.INRRUPEE, { "INR": 1, "PKR": 3.7, "USD": 240 });
ratesMap.set(Currencies.USDOLLAR, { "INR": 120, "PKR": 240, "USD": 1 });
function getRates(from, to, amount) {
    let rates = ratesMap?.get(from);
    let rate;
    rate = rates[to];
    return rate * amount;
}
async function currencyConverter() {
    let answers = await inquirer.prompt([{
            type: "list",
            name: 'fromCurrency',
            message: 'Select your currency',
            choices: Object.values(Currencies)
        },
        {
            type: "input",
            name: 'amount',
            message: 'Enter YOur amount',
        },
        {
            type: "list",
            name: 'toCurrency',
            message: 'Select your currency',
            choices: Object.values(Currencies)
        }
    ]);
    // let result = getRates(answers.fromCurrency,answers.toCurrency,answers.amount)
    let result;
    switch (answers["toCurrency"]) {
        case Currencies.PKRUPEE:
            result = getRates(answers.fromCurrency, answers.toCurrency, answers.amount);
            break;
        case Currencies.INRRUPEE:
            result = getRates(answers.fromCurrency, answers.toCurrency, answers.amount);
        case Currencies.USDOLLAR:
            result = getRates(answers.fromCurrency, answers.toCurrency, answers.amount);
        default:
            break;
    }
    console.log("Rsule is ", result);
}
currencyConverter();
