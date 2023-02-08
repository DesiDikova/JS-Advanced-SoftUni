const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        
        //ВРЪЩА undefined
        // const getFullname = function() {
        //     return this.firstName + ' ' + this.lastName;
        // }
        // console.log(`Hello, my name is ${getFullname()}`);
        //Hello, my name is undefined undefined - this сочи към контекста на function(), която се изпълнява глобално

        //ВРЪЩА правилното пълно име
        const getFullname = () => {
            return this.firstName + ' ' + this.lastName;
        }
        console.log(`Hello, my name is ${getFullname()}`);
        //Hello, my name is Pesho Georgiev - чрез arrow функцията (тя наследява контекста на горната функция), 
        //this сочи към контекста на introduce(), която се изпълнява чрез обекта person
    }
};
person.introduce();