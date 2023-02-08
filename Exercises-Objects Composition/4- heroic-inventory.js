function heroicInventory(array) {

    let heros = [];

    for (let line of array) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        
        items = items ? items.split(', ') : [];

        heros.push({ name, level, items: items });
    }

    console.log(JSON.stringify(heros));
}

heroicInventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
//heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);