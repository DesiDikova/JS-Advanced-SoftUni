function lastKNumbersSequence(n, k) {

    let arr = [1];

    while (arr.length < n) {
        let lastElement = arr.slice(-k);
        let sum = 0;

        for (let currentElement of lastElement) {
            sum += currentElement;
        }  

        arr.push(sum);
    }

    return arr;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));