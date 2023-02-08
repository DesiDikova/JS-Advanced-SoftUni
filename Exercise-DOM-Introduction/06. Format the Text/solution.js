function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let text = inputElement.value.split('.').filter(t => t !== '');
  
 while (text.length !== 0) {
    let sentences = text.splice(0, 3).join('. ') + '.';
    let paragraph = document.createElement('p');
    paragraph.textContent = sentences;
    outputElement.appendChild(paragraph);
  } 
}