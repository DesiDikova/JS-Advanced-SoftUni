let phoneBook = {
    'Ivan Petrov': '123456789',
    'Georgi Georgiev': '2547892',
    'Petar Petrov': '4587962',
};

//Accessing and assigning
phoneBook['Ivan Petrov'] = '4587555'  //може да сменим телефонния номер
console.log(phoneBook['Ivan Petrov']);  

//------------------
//Iteration
 // ---- Еквивалентен начин със forEach
for (let key in phoneBook) {
    console.log(`${key} - ${phoneBook[key]}`); 
    //key - взимам всички имена, които се явяват ключове
    //phoneBook[key] - взимам всички телефонни номера, т.е. стойностите на ключовете
}

//--------------------
//Iteration - methods
let names = Object.keys(phoneBook);
let phones = Object.values(phoneBook);
console.log(names);  //връща масив с всички имена (ключове)
console.log(phones);  //връща масив с всички телефонни номера (стойности)

 // ---- Еквивалентен начин със for in
Object.keys(phoneBook).forEach(x => {
    console.log(`${x} - ${phoneBook[x]}`)  //Когато вземе ключа, по - много лесен начин може да вземе и стойността
});

let entris = Object.entries(phoneBook);
console.log(entris); //връща масив от масиви, в който ще имаме ключ и стойност

for (let [key, value] of entris) {
    console.log(key + ' - ' + value);
}


