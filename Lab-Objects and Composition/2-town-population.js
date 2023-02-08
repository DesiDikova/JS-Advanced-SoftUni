function townPopulation(array) {

    let town = {};

    for (let char of array) {
        let [townName, townPopulation] = char.split(' <-> ');
        townPopulation = Number(townPopulation);

        if (!town.hasOwnProperty(townName)) {
            town[townName] = townPopulation;
        } else {
            town[townName] += townPopulation;
        }
    }
    
    let entries = Object.entries(town);
    for (let [key, value] of entries) {
        let townName = key;
        let townPopulation = value;

        console.log(`${townName} : ${townPopulation}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);