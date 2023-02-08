function create(words) {

   let contentElement = document.getElementById('content');

   //-----ПЪРВИ ВАРИАНТ - с forEach и изнесена функция
   words.forEach(word => { 
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', clickEven);

      contentElement.appendChild(divElement);

      function clickEven(e) {
         e.currentTarget.children[0].style.display = 'block';
      }    
   });


   //-------ВТОРИ ВАРИАНТ
//   for (const word of words) {
//    let divElement = document.createElement('div');
//    let pElement = document.createElement('p');
//    pElement.textContent = word;
//    pElement.style.display = 'none';

//    divElement.appendChild(pElement);

//    divElement.addEventListener('click', (e) => {
//       e.currentTarget.children[0].style.display = 'block';
//    });
   
//    contentElement.appendChild(divElement);

//   }
}