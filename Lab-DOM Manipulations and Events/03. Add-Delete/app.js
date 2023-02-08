function addItem() {
   let newItemTextElement = document.getElementById('newItemText');
   let itemsElement = document.getElementById('items');

   let liNewElement = document.createElement('li');
   liNewElement.textContent = newItemTextElement.value;
   let deleteElement = document.createElement('a');
   //deleteElement.href = '#';
   deleteElement.textContent = '[Delete]';
   liNewElement.appendChild(deleteElement);
   itemsElement.appendChild(liNewElement);
   newItemTextElement.value = '';
   
   liNewElement.addEventListener('click', (e) => {
    e.target.parentNode.remove();
   })
}