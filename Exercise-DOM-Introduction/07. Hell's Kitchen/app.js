function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let textElement = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let workersElement = document.querySelector('#workers p');

      let averageSalary = 0;
      let sumSalary = 0;
      let currentSalary = 0;
      let maxSalary = 0;
      let bestReastaurant = '';
      let restaurantInfo = {};

      for (let text of textElement) {
         let info = text.split(' - ');
         let restaurant = info[0];
         let workersInfo = info[1].split(', ');

         for (let info of workersInfo) {
            let [worker, salary] = info.split(' ');

            if (!restaurantInfo.hasOwnProperty(restaurant)) {
               restaurantInfo[restaurant] = {};
            }

            if (restaurantInfo.hasOwnProperty(restaurant)) {
               restaurantInfo[restaurant][worker] = Number(salary);
            }
         }
      }

      let entries = Object.entries(restaurantInfo);

      for (let entry of entries) {
         let nameRestaurant = entry[0];
         let objEntries = Object.entries(entry[1]);

         for (let [worker, salary] of objEntries) {
            sumSalary += salary;
            if (salary > maxSalary) {
               maxSalary = salary;
            }
         }

         averageSalary = sumSalary / objEntries.length;

         if (averageSalary > currentSalary) {
            currentSalary = averageSalary;
            bestReastaurant = nameRestaurant;
            sumSalary = 0;
         }
      }

      bestRestaurantElement.textContent = `Name: ${bestReastaurant} Average Salary: ${currentSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;

      let sort = Object
         .entries(restaurantInfo[bestReastaurant])
         .sort((a, b) => b[1] - a[1]);

      for (let [worker, salary] of sort) {
         workersElement.textContent += `Name: ${worker} With Salary: ${salary} `;
      }
   }
}