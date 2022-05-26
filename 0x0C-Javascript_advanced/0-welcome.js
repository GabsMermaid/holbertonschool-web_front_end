 /**
  * @description - Task 0
  * @function welcome - Concatenates two parameters
  * @param  {String} firstName  First name
  * @param  {String} lastName   Last name
  */

 function welcome(firstName, lastName) {
     /**
      * @var {String} fullName - Containts concatenation of two arguments 
      */
     const fullName = firstName + ' ' + lastName;
     /**
      * @function displayFullName - Alert with the message
      */
     function displayFullName() {
         alert('Welcome ' + fullName + '!');
     }
     displayFullName();
 }