function biggerHalf(array) {
    
    array.sort((a, b) => a - b);
    let half = Math.ceil(array.length / 2);
    let biggHalf = array.slice(-half);
                    
    return biggHalf;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));