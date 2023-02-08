// arr = [1, 2, 3, 4, 12, 8]
// let k = arr[1];

// console.log(arr.length)

// for (let i = arr.length - 1; i >= k; i--) {
//     let element = arr[i];
//     console.log(element)
// }


//-----------------------
// for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//     for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
//         console.log(matrix[rowIndex][colIndex]);
//     }


//-------------------
// function diagonalSums(matrix) {

//     let mainSum = 0, secondarySum = 0;
//     for (let row = 0; row < matrix.length; row++) {
//         mainSum += matrix[row][row];
//         secondarySum += matrix[row][matrix.length - row - 1];
//     }
//     console.log(mainSum + ' ' + secondarySum);
// }


//diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
//diagonalSumsconst([[20, 40], [10, 60]]);


let matrix = [[3, 5, 17], [-1, 7, 14], [1, -8, 89]];

let mainDiagonal = 0;
let secondaryDiagonal = 0;
let rez = '';

for (let row = 0; row < matrix.length; row++) {
    mainDiagonal += matrix[row][row];
    secondaryDiagonal += matrix[row][matrix.length - row - 1];
    rez = mainDiagonal + ' ' + secondaryDiagonal;
}

console.log(rez);
