function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');
    let newTextElement = document.createElement('li');
    newTextElement.textContent = inputTextElement.value;
    inputTextElement.value = '';

    itemsElement.appendChild(newTextElement);

}