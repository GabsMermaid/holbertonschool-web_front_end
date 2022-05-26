/**
 * @description - Task 8
 * @function processPayment - Collecting payment process
 * @param {Number} amount - Value for the payment
 */

function processPayment(amount) {
    console.log("Collecting payment of " + amount);
}

/**
 * @function processOrder - Order for processing payment
 * @param {Number} amount - Payment value
 * @param {Number} orderId - Payment ID
 */

function processOrder(orderId, amount) {
    console.log(orderId + " is being processed");
    processPayment(amount);
    console.log(orderId + " has been fully processed");
}

console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");