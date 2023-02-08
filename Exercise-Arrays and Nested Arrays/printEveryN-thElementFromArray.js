function printEveryNthElementFromArray(array, number) {
    
    let arr = [];

    for (let i = 0; i < array.length; i += number) {
        let element = array[i];

        arr.push(element);        
    }

    return arr;
}

console.log(printEveryNthElementFromArray(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElementFromArray(['dsa','asd', 'test', 'tset'], 2));
console.log(printEveryNthElementFromArray(['1', '2', '3', '4', '5'], 6));