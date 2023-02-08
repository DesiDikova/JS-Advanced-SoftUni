function calc() {
    let firstNumberElement = document.getElementById('num1');
    let secontNumberElement = document.getElementById('num2');
    
    firstNumberElement = Number(firstNumberElement.value);
    secontNumberElement = Number(secontNumberElement.value);
    
    let sumElements = document.getElementById('sum');

    sumElements.value = firstNumberElement + secontNumberElement;  
}
