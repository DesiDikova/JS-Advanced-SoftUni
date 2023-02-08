function rotateArray(array, number) {
    
    let count = 0;

    while (count !== number) {
        let end = array.pop();
        array.unshift(end);
        count++;
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);