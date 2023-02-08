function carFactory(input) {

    //-----ПЪРВИ ВАРИАНТ

    // let car = {};
    // let engine = {};
    // let carriage = {};
    // let wheels = [];

    // if (input.power <= 90) {
    //     engine.power = 90;
    //     engine.volume = 1800;
    // } else if (input.power <= 120) {
    //     engine.power = 120;
    //     engine.volume = 2400;
    // } else if (input.power <= 200) {
    //     engine.power = 200;
    //     engine.volume = 3500;
    // }

    // carriage.type = input.carriage;
    // carriage.color = input.color;

    // if (input.wheelsize % 2 === 0) {
    //     let wheel = input.wheelsize - 1;
    //     wheels.push(wheel, wheel, wheel, wheel);
    // } else {
    //     let wheel = input.wheelsize
    //     wheels.push(wheel, wheel, wheel, wheel);
    // }

    // car.model = input.model;
    // car.engine = engine;
    // car.carriage = carriage;
    // car.wheels = wheels;

    // return car;


    //---------ВТОРИ ВАРИАНТ

    let engine = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriage = [{ type: 'hatchback', color: input.color }, { type: 'coupe', color: input.color }];
    let wheels = input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize;

    return {
        model: input.model,
        engine: engine.filter(e => e.power >= input.power)[0],
        carriage: carriage.filter(c => c.type === input.carriage)[0],
        wheels: Array(4).fill(wheels, 0),
    }
}

console.log(carFactory(
    {
        model: 'Brichka',
        power: 65,
        color: 'white',
        carriage: 'hatchback',
        wheelsize: 16
    }
));

// console.log(carFactory(
//     {
//         model: 'VW Golf II',
//         power: 90,
//         color: 'blue',
//         carriage: 'hatchback',
//         wheelsize: 14
//     }
// ));
// console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }));
