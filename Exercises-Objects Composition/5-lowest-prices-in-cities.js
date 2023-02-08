function lowestPricesInCities(array) {

    let product = {};

    for (let line of array) {
        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);

        if (!product.hasOwnProperty(productName)) {
            product[productName] = { townName, productPrice };
        } else {
            if (product[productName].productPrice > productPrice) {
                product[productName].productPrice = productPrice;
                product[productName].townName = townName;
            }
        }
    }

    let entries = Object.entries(product);
    for (let [key, value] of entries) {
        let productName = key;
        let productPrice = value.productPrice;
        let townName = value.townName;

        console.log(`${productName} -> ${productPrice} (${townName})`);
    }
}

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
]);
// lowestPricesInCities([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'

// ]);