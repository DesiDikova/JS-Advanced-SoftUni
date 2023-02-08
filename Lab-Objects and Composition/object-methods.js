let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honк: function() {  //Method with function expression
        console.log(`Beep beep!`);  
    },
    honк2: () => {  //Method with arrow function
        console.log(`Beep beep2`);
    },
    honк3() {  //Object method notation
        console.log(`Beep, beep3!`);
    }
}

car.honк();
car.honк2();
car.honк3();


//----------------------------
//Object as function library
function division(a, b) {
    return a / b;
}

let calc = {
    sum: function(a, b) {
        return a + b;
    },
    multiplication: (a, b) => a * b,
    substraction(a, b) {
        return a - b;
    },
    division  //division: division
}

console.log(calc.sum(10, 15));