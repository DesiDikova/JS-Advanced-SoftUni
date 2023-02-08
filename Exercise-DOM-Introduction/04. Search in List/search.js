function search() {

   let typeElement = document.getElementById('searchText').value;
   let townsElements = Array.from(document.querySelectorAll('#towns li'));

   let count = 0;

   for (town of townsElements) {
      
      if (town.textContent.includes(typeElement)) {
         town.style.fontWeight = 'bold';  
         town.style.textDecoration = 'underline';
         count++;
      }
   }

   let resultElement = document.getElementById('result');
   resultElement.textContent = `${count} matches found`;

}
