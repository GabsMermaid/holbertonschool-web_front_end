 /**
  * @description - Task 4
  * @function divideBy - Create process divideBy
  * @param {Number} firstNumber - number 1
  * @param {Number} secondNumber - number 2
  * @returns {Number} - Return result of divideBy
  */

 function divideBy(firstNumber) {
     return function(secondNumber) {
         return secondNumber / firstNumber;
     }
 }

 /**
  * @function addBy - Create process addBy
  * @param {Number} firstNumber - number 1
  * @param {Number} secondNumber - number 2
  * @returns {Number} - Return result of addBy
  */

 function addBy(firstNumber) {
     return function(secondNumber) {
         return firstNumber + secondNumber;
     }
 }

 /**
  * @var {Number} addBy100
  * @var {Number} addBy100
  * @var {Number} divideBy10
  * @var {Number} divideBy100
  */

 let addBy100 = addBy(100);
 let addBy1000 = addBy(1000);
 let divideBy10 = divideBy(10);
 let divideBy100 = divideBy(100);