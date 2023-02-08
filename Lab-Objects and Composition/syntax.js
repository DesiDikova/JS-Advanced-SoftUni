//Single line object literal
//let otherPerson = { name: 'Pesho', age: 20, isMale: true };

//Multi line object literal
// let person = {
//     name: 'Pesho',
//     age: 20,
//     isMale: true,
// };

//Empty object literal
// let emptyObject = {};

//--------------------------
//Dynamic assing of properties
let cat = {};
let propName = 'age';

cat.name = 'Navcho'; //Dot notation. За предпочитане е Dot notation. 
cat['breed'] = 'Persian'; //Bracket notation ---- cat['name'] = 'Navcho'
//Използва се, когато: 
//  - искаме да използване някакъв вид символ, който не е позволен в Dot notation
cat['fur-color'] = 'yellow';

//  - ако имаме вече променлива (името на пропъртито, го имаме като променлива).
//Тогава не може да достъпим динамично пропъртито. В propName се записва променливата age.
cat[propName] = 7;

//--------------------------------
//Object property access
// console.log(cat.age); //7
// console.log(cat['fur-color']); //yellow
// console.log(cat[propName]); //7

//--------------------------------
//Object Destructuring Assingment Synax
let { age, name, ...rest } = cat;

//...rest - връща нов обект, НО стария (cat) се запазва

//Деструктурирането, запазва променливите със своите собствени референтни стойности. 
//При следващия пример age няма да промени своята референтна стойност:
age = 8;

console.log(cat);

//First way to Clone object
let { ...clonedCat } = cat;
clonedCat.name = 'Garrty';
console.log(clonedCat);

//-------------------------------
//Object reference
//stack - специално заделена, ограничена памет. Тук се записват примитивните типове данни (7броя: string, number, bolean ...)
//heap - дефинираме референтните типове (масиви, обети); адрес, който сочи към обекта който е дефиниран някъде в паметта.

//Пример 1
let otherCat = cat; //copy by reference (данните, запазени в heap-а)
otherCat.name = 'Garry';

console.log(otherCat.name);  //Garry
console.log(cat.name);  //Garry

//Пример 2
let firstName = 'Pesho';  //'Pesho' не е референтен тип, а примитивен (стринг)
let otherName = firstName;  //Копира се стойността на firstaName върху новата променлива, а не референцията
otherName = 'Gosho';  //т.е. двете променливи държат две различни променливи

console.log(firstName);  //Pesho


//------------------------------
//Comparing objects
let person1 = {name: 'Pesho'};
let person2 = {name: 'Pesho'};
console.log(person1 === person2);  //false 
    //Операторът за сравнение сравнява по стойност (т.е.по примитивна стойност), 
    //но ние тук сравняваме референциите на двата обекта, които са създадени 
    //на две различни места в паметта (с различни адреси)




