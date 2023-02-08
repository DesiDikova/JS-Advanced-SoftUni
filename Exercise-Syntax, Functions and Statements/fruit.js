function fruit(fruitType, weightGrams, priceKilogram ) {
    
    let weightKilogram = weightGrams * 0.001;
    let money = weightKilogram * priceKilogram;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKilogram.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);