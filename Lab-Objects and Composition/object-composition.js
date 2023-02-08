let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honк: function () {
        console.log(`${this.model} Beep beep!`);
    },
    owner: {
        name: 'Pesho',
        age: 30,                   
        hobbies:[
            'sports',                //Може да имаме дълбоко нестнати данни
            'swiming'
        ]
    },
}

//Print nested value
console.log(car.owner.name);  //-дот нотейшън
console.log(car.owner['name']); //-комбинация от брекет и дот нотейшън
console.log(car['owner']['name']); //-брекет нотейшън

console.log(car.owner.hobbies);


//Renaming in destructuring
let { owner: person } = car; //преименувам пропъртито owner на person
console.log(person) 