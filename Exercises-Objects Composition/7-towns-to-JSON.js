function townsToJSON(array) {

    let townInfo = [];
    let arrayL = array.length;

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let i = 1; i < arrayL; i++) {
        let [town, latitude, longitude] = array[i]
            .split('|')
            .filter(x => x)
            .map(x => x.trim());

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let infoTown = new Town(town, latitude, longitude);
        townInfo.push(infoTown);
    }
    
    console.log(JSON.stringify(townInfo));  
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);