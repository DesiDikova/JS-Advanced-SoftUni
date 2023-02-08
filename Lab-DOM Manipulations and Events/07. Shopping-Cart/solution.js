function solve() {

   let buttnonAddElements = document.getElementsByClassName('add-product');
   let buttnonAdd = Array.from(buttnonAddElements);
   let textElement = document.querySelector('div textarea');
   let checkoutElement = document.getElementsByClassName('checkout')[0];

   let totalPrice = 0;
   let list = [];
   
   for (let button of buttnonAdd) {
      button.addEventListener('click', function (e) {
         let productInfo = e.target.parentElement.parentElement;
         let name = productInfo.querySelector('.product-title').textContent;
         let money = productInfo.querySelector('.product-line-price').textContent;

         textElement.textContent += `Added ${name} for ${money} to the cart.\n`;

         if (!list.includes(name)) {
            list.push(name);
         }

         totalPrice += Number(money);

      });
   }

   checkoutElement.addEventListener('click', () => {
      let listProduct = list.join(', ');
      textElement.textContent += `You bought ${listProduct} for ${totalPrice.toFixed(2)}.`;
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => { 
         button.disabled = true;         
      });
   })  
}