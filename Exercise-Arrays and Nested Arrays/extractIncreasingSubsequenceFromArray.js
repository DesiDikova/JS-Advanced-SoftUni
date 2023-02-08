function extractIncreasingSubsequenceFromArray(array) {

    let bigNumber = array[0];
    let res = [bigNumber];

    for (let i = 0; i < array.length - 1; i++) {
       let current = array[i + 1]; 
        
        if (current >= bigNumber) { 
            res.push(current); 
            bigNumber = current;
        }
    }

    return(res);
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));