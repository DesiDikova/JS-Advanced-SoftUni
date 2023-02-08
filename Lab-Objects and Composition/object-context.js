let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honк: function() {  
        console.log(`${this.model} Beep beep!`);  //this сочи към контекста на функцията (Дай ми модела и след това Beep beep!)
    },
}

car.honк(); //функцията honk е извикана от car => КОНТЕКСТА НА ФУНКЦИЯТА Е CAR
car.model = 'Mercedes';
car.honк();


//Change execution context
    //car.honk сочи към референцията на функцията (ф-ята се записва в head), т.е. копира референцията. 
    //Тоест достъпваме референцита не чрез обекта, а чрез променлива
let singleHonk = car.honк; //car.honk - референцията към ф-цията; car.hon() - ф-цията се изпълнява
car.honк();
singleHonk(); //undefined Beep beep! (this не сочи към нищо, защото вече THIS НЕ Е В КОНТЕКСТА НА ОБЕКТА CAR)


let russianMashine = {
    model: 'Lada',
}
russianMashine.bibitka = car.honк; //копирам референцията на car.honk
russianMashine.bibitka(); //Lada Beep beep! THIS Е В КОНТЕКСТА НА RUSSIANMASHINE (там имаме модел => this сочи към модела в обекта russianMashine)