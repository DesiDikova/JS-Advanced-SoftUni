function smallestTwoNumbers(arr) {

    let minElement = arr.sort((a,b) => a - b);
    let count = 0;
    let array = [];

    while (count !== 2) {
        let lastElement = minElement.shift();
        array.push(lastElement);

        count++;
    }

    console.log(array.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);