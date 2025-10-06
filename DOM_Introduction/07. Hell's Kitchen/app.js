function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textAreaRef = document.querySelector("textarea");
   const bestRestaurantRef = document.querySelector("#bestRestaurant p");
   const bestWorkerRef = document.querySelector("#workers p");

   function onClick() {
      const data = textAreaRef.value;
      const restaurantData = JSON.parse(data);

      const result = {};

      for (let el of restaurantData) {
         const [restName, workersData] = el.split(" - ");
         if (!result.hasOwnProperty(restName)) {
            result[restName] = {
               bestSalary: 0,
               avgSalary: 0,
               workers: []
            }
         }
         const workers = workersData.split(", ");
         const newWorkersList = createWorkerList(workers);
         result[restName].workers = concatWorkersList(result[restName].workers, newWorkersList);
         const salaryData = calculateRestaurantData(result[restName].workers);
         result[restName].avgSalary = salaryData.avgSalary;
         result[restName].bestSalary = salaryData.bestSalary;
      }

      const bestRestaurant = findBestRestaurant(result);
      bestRestaurantRef.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

      let buff = "";

      bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary).forEach(worker => {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
         bestWorkerRef.textContent = buff.trim();
      });
   }
   function findBestRestaurant(restData) {
      return Object.entries(restData).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }

   function calculateRestaurantData(workerList) {
      const result = {
         avgSalary: 0,
         bestSalary: 0
      }

      let sum = 0;

      for (let worker of workerList) {
         let salary = worker.salary;
         sum += salary;

         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }
      result.avgSalary = sum / workerList.length;

      return result;
   }

   function concatWorkersList(oldList, newList) {
      return oldList.concat((newList));
   }

   function createWorkerList(data) {
      const result = [];

      for (el of data) {
         let [name, salary] = el.split(" ");
         salary = Number(salary);
         result.push({
            name,
            salary
         });
      }

      return result;
   }
}