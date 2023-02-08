function storeCatalogue(array) {

    let product = {};

    for (let line of array) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);
        let char = productName[0];

        if (!product.hasOwnProperty(char)) {
            product[char] = {};
        }

        product[char][productName] = productPrice;
    }

    let sortChar = Object.keys(product).sort((a, b) => a.localeCompare(b));

    for (let char of sortChar) {
        console.log(`${char}`);

        Object
            .keys(product[char])
            .sort((a, b) => a.localeCompare(b))
            .forEach(sortProduct => {
                console.log(`  ${sortProduct}: ${product[char][sortProduct]}`)
            });
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge  : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
// storeCatalogue([
//     'Banana : 2',
//     'Rubics Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
// ]);