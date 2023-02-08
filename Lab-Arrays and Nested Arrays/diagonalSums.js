function diagonalSums(matrix) {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let res = '';

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix.length - row - 1];
        res = mainDiagonal + ' ' + secondaryDiagonal;
    }

    console.log(res);
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);