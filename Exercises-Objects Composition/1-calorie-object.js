function calorieObject(array) {

    let infoFood = {};

    for (let i = 0; i < array.length; i++) {
        let food = array[i];
        let calories = array[i += 1];
        
        if (!infoFood.hasOwnProperty(food)) {
            infoFood[food] = Number(calories);
        }
    } 

    console.log(infoFood);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);