function processOddPositions(array) {

    let oddPositions = array.filter((x, i) => i % 2 != 0);
    let newArray = oddPositions
        .map(x => x += x)
        .reverse()
        .join(' ');
    return newArray;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));