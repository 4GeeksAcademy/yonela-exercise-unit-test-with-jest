//  tasas de conversión
const conversionRates = {
    "JPY": 156.5, // yenes japoneses por euro
    "USD": 1.07, // dólares estadounidenses por euro
    "GBP": 0.87 // libras esterlinas por euro
};

//  dólares a yenes
const fromDollarToYen = function(amountInDollars) {
    // Convertimos dólares a euros
    let amountInEuros = amountInDollars / conversionRates["USD"];
    // Convertimos euros a yenes
    return amountInEuros * conversionRates["JPY"];
};

// yenes a libras
const fromYenToPound = function(amountInYen) {
    // Convertimos yenes a euros
    let amountInEuros = amountInYen / conversionRates["JPY"];
    // Convertimos euros a libras
    return amountInEuros * conversionRates["GBP"];
};

// euros a dólares
const fromEuroToDollar = function(amountInEuro) {
    // Convertimos el valor a dólares
    return amountInEuro * conversionRates["USD"];
};


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };