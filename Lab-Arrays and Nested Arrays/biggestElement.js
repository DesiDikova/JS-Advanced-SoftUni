function biggestElement(arr) {

    let arrayMaxNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
            .sort((a, b) => b - a)
            .shift();

        arrayMaxNumber.push(element);
    }

    let arraySort = arrayMaxNumber.sort((a, b) => a - b);
    return arraySort.pop();
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));