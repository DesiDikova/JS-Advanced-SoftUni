function solve() {

  let tableElement = document.querySelector('tbody');
  let btnElements = document.querySelectorAll('#exercise button');
  let textarea = document.querySelectorAll('textarea');


  btnElements[0].addEventListener('click', generate);
  btnElements[1].addEventListener('click', buy);

  function generate(e) {
    let inputElement = JSON.parse(textarea[0].value);
    inputElement.forEach(element => {
      let trFirst = document.createElement('tr');

      let tdFirst = document.createElement('td');
      let img = document.createElement('img');
      img.src = element.img;
      tdFirst.appendChild(img);
      trFirst.appendChild(tdFirst);

      let tdSecond = document.createElement('td');
      let pSecond = document.createElement('p');
      pSecond.textContent = element.name;
      tdSecond.appendChild(pSecond);
      trFirst.appendChild(tdSecond);

      let tdThird = document.createElement('td');
      let pThird = document.createElement('p');
      pThird.textContent = Number(element.price);
      tdThird.appendChild(pThird);
      trFirst.appendChild(tdThird);

      let tdFourth = document.createElement('td');
      let pFourth = document.createElement('p');
      pFourth.textContent = Number(element.decFactor);
      tdFourth.appendChild(pFourth);
      trFirst.appendChild(tdFourth);

      let tdFifth = document.createElement('td');
      let inputFifth = document.createElement('input');
      inputFifth.type = 'checkbox';
      tdFifth.appendChild(inputFifth);
      trFirst.appendChild(tdFifth);

      tableElement.appendChild(trFirst); 
    });
  }

  function buy(e) {
    let totalPrice = 0;
    let decFactor = 0;
    let avgDecFactor = 0;
    let count = 0;
    let furnitures = [];
    let checkboxes = Array.from(document.querySelectorAll('input')).filter(check => check.checked);

    checkboxes.forEach(check => {
      let parent = check.parentElement.parentElement;
      let infoFurnitures = Array.from(parent.querySelectorAll('tr p'));

      let name = infoFurnitures[0].textContent;
      let price = Number(infoFurnitures[1].textContent);
      let decoration = Number(infoFurnitures[2].textContent);

      totalPrice += price;
      decFactor += decoration;
      count++;

      furnitures.push(name);
    });

    avgDecFactor = decFactor / count;

    textarea[1].value += `Bought furniture: ${furnitures.join(', ')}\n`;
    textarea[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textarea[1].value += `Average decoration factor: ${avgDecFactor}`;
  }
}

