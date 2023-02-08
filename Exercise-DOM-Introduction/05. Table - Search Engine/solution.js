function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = document.querySelectorAll('tbody tr');
   
      for (let row of rowElements) {
         row.classList.remove('select');
         if (row.innerHTML.includes(searchElement.value) && searchElement.value !== '') {
            row.className = 'select';
         } 
      }
      searchElement.value = '';
   }
}