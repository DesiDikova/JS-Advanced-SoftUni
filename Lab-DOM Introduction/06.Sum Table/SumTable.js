function sumTable() {
    let tableCostElements = document.querySelectorAll('tr td:nth-of-type(2n)');
    let result = Array.from(tableCostElements);
    let endElement = result.pop();
    let sum = 0;
    
    for (let element of result) {
        let number = Number(element.textContent);
        sum += number;
    }
    
    let totalSumElement = document.getElementById('sum');
    totalSumElement.textContent = sum;
}