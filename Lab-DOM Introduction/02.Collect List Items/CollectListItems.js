function extractText() {
            //-------1.ВАРИАНТ
    // let textElement = document.getElementById('items');
    // let resultElement = document.getElementById('result');

    // resultElement.textContent = textElement.textContent;

            //-------2.ВАРИАНТ
    let itemsElements = document.querySelectorAll('ul li');
    let resultElement = document.getElementById('result');
    for (let item of itemsElements) {
        resultElement.textContent += item.textContent + '\n';
    }
}