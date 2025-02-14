let exchange =(sumUAH, currencyValues, exchangeCurrency) =>{
    let chosenCurrency;
    for (const i of currencyValues) {
        if (i.currency === exchangeCurrency) {
            chosenCurrency = i;
        }

    }
    let result = sumUAH/chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'))