function circleArea(input) {
    
    let typeInput = typeof input;
    let area = 0;
    if (typeInput === 'number') {
        area = Math.PI * input ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`);
    }
}

circleArea(5);
circleArea('name');