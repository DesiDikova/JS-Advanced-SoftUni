function aggregateElements(arr) {
    
    let sum = 0;
    let inverseSum = 0;

    for (let element of arr) {
        sum += element;    
    } 

    for (let element of arr) {
        inverseSum += 1 / element;    
    } 

    let newArr = arr.map(x => String(x));

    console.log(sum);
    console.log(inverseSum);
    console.log(newArr.join(''));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);