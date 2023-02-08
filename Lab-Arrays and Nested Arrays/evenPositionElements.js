function evenPositionElements(array) {
    
    let arr = [];
    for (let i = 0; i < array.length; i += 2) {
        let element = array[i];
        arr.push(element);
    }

    console.log(arr.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);