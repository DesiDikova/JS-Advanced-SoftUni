function negativePositiveNumbers(arr) {

    let array = [];

    for (let element of arr) {
        if (element < 0) {
           array.unshift(element); 
        } else {
            array.push(element);
        }
    }

    console.log(array.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);