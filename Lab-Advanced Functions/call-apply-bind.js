//РЪЧНО ПРОМЕНЯМЕ КОНТЕКСТА НА ДАДЕНА ФУНКЦИЯ, ЧРЕЗ СЛЕДНИТЕ МЕТОДИТЕ:

//Call and Applay invocation
function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho', 'Ivanov');  //Global invocation

let person = {
    name: 'Pesho',
}

introduce.call(person, 'Gosho', 'Ivanov');  //invoce using Call, може да използва последователност от аргументи
introduce.apply(person, ['Stamat', 'Stamatov']);  //invoce using Apply, аргументите трябва да са подадени като array

//Bind
let sumerHuman = {
    name: 'Superman',
};

let superIntroduction = introduce.bind(sumerHuman, 'Lois', 'Lane');
superIntroduction();