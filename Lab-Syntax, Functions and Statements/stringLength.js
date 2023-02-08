function stringLength(...input) {
    let sumLength = 0;
    let avrerage = 0;

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        sumLength += element.length;
    }
    avrerage = Math.floor(sumLength / input.length);
    console.log(sumLength);
    console.log(avrerage);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');