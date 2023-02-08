let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
};

//обръща обекта car в стринг
let jsonCar = JSON.stringify(car);
console.log(jsonCar); 

//обръща стринга в обект => може да кажем console.log(parseCar.model), защото обекта има модел
let parseCar = JSON.parse(jsonCar);
console.log(parseCar); 