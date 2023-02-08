function cityRecord(name, population, treasury) {
    
    //First way
    let city = {
        name: name,
        population: population,
        treasury: treasury,
    }

    //Second way - dynamic
    // let city = {};
    // city.name = name;
    // city.population = population;
    // city.treasury = treasury;

    //Third way - shorthand syntax
    // let city = { name, population, treasury };

    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));