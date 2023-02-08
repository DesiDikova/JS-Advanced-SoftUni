function mathOperations(numFirst, numSecond, operator) {
    
    let sum = 0;
    if (operator === '+') {
        sum = numFirst + numSecond;
    } else if (operator === '-') {
        sum = numFirst - numSecond;
    } else if (operator === '*') {
        sum = numFirst * numSecond;
    } else if (operator === '/') {
        sum = numFirst / numSecond;
    } else if (operator === '%') {
        sum = numFirst % numSecond;
    } else if (operator === '**') {
        sum = numFirst ** numSecond;
    }
    
    console.log(sum);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');