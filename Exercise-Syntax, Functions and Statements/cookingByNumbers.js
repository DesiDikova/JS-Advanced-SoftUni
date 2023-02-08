function cookingByNumbers(num, ...arr) {

    // chop - разделяме числото на две
    // dice - корен квадратен от число
    // spice - добавяме 1 към числото
    // bake - умножаваме числото по 3
    // fillet - изваждаме 20% от числото

    let resul = null;

    for (let command of arr) {
        if (command === 'chop') {
            resul = num / 2;
        } else if (command === 'dice') {
            resul = Math.sqrt(num);
        } else if (command === 'spice') {
            resul = num + 1;
        } else if (command === 'bake') {
            resul = num * 3;
        } else if (command === 'fillet') {
            resul = num * 0.80;
        }

        num = resul;
        console.log(resul);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('--------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');