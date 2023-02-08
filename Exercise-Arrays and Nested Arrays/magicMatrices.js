function magicMatrices(matrix) {

    let sum = matrix[0].reduce((a, b) => a + b);

    for (let row = 0; row < matrix[0].length; row++) {
        let sumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumCol += matrix[col][row];
        }

        if (sumCol !== sum) {
            return false;
        } 
    } 
     
    return true;  
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])); 