window.addEventListener("load", solve);

function solve() {

  let publishBtnElement = document.getElementById('publish');
  publishBtnElement.addEventListener('click', infoCar);

  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');

  function infoCar(e) {

    e.preventDefault();

    let make = makeElement.value;
    let model = modelElement.value;
    let year = Number(yearElement.value);
    let fuel = fuelElement.value;
    let originalCost = Number(originalCostElement.value);
    let sellingPrice = Number(sellingPriceElement.value);

    if (!make || !model || !year || !fuel || !originalCost || !sellingPrice || originalCost > sellingPrice) {
      return;
    }

    let tBodyElement = document.getElementById('table-body');

    let tr = document.createElement('tr');
    tr.className = 'row';
    let tdMake = document.createElement('td');
    tdMake.textContent = make;
    let tdModel = document.createElement('td');
    tdModel.textContent = model;
    let tdYear = document.createElement('td');
    tdYear.textContent = year;
    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;
    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = originalCost;
    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice;

    let tdButton = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    let sellBtn = document.createElement('button');
    sellBtn.className = 'action-btn sell';
    sellBtn.textContent = 'Sell';

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tdButton.appendChild(editBtn);
    tdButton.appendChild(sellBtn);
    tr.appendChild(tdButton);

    tBodyElement.appendChild(tr);

    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';

    editBtn.addEventListener('click', edit);

    function edit(e) {
      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;

      tBodyElement.remove();
    }

    sellBtn.addEventListener('click', sell);

    function sell(e) {
      let ulCarsListElement = document.getElementById('cars-list');
      let makeModel = [];

      let liElement = document.createElement('li');
      liElement.className = 'each-list';
      let makeModelSpan = document.createElement('span');
      makeModel.push(make, model);
      makeModelSpan.textContent = makeModel.join(' ');
      let yearSpan = document.createElement('span');
      yearSpan.textContent = year;
      let differencePriceSpan = document.createElement('span');
      differencePriceSpan.textContent = sellingPrice - originalCost;

      liElement.appendChild(makeModelSpan);
      liElement.appendChild(yearSpan);
      liElement.appendChild(differencePriceSpan);

      ulCarsListElement.appendChild(liElement);

      let profitElement = document.getElementById('profit');
      profitElement.textContent = (Number(profitElement.textContent) + (sellingPrice - originalCost)).toFixed(2);

      e.target.parentElement.parentElement.remove();
      
    }
  }
}
