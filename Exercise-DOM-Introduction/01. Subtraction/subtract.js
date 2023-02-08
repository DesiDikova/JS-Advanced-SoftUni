function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');

    let sum = firstNumberElement.value -  secondNumberElement.value;
    let resultElement = document.getElementById('result');
    resultElement.textContent = sum
    console.log(resultElement.textContent);
}