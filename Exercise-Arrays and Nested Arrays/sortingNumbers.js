function sortingNumbers(array) {
    
    let res = [];
    let sortArray = array.sort((a, b) => a - b);
        
    while (sortArray.length !== 0) {
        for (let element of sortArray) {
            let minNumber = sortArray.shift();
            let maxNumber = sortArray.pop();
            res.push(minNumber);
            res.push(maxNumber);  
        }
    }

    return res;     
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
