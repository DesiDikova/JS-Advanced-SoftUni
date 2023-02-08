function sumOfNumbersNM(n, m) {
    let numOne = Number(n);
    let numTwo = Number(m);
    let sum = 0;

    for (let index = numOne; index <= numTwo; index++) {
        sum += index;

    }  

    return(sum);
}

console.log(sumOfNumbersNM('1', '5'));
console.log(sumOfNumbersNM('-8', '20')); 