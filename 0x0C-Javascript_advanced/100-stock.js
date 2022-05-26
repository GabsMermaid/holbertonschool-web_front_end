/**
 * @description - Task 100
 * @var {Object} stock 
 * @function processPayment - Successful payment message
 * @param {String} itemName - Product name
 */

let stock = { macbook: 2, iphone: 4 };

function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log("Payment is being processed for item " + itemName);
}

/**
 * @function processError - Payment error message
 * @param {String} itemName - Product name
 */

function processError(itemName) {
    console.log("No more " + itemName + " in stock");
    console.log("Payment is not being processed");
}

/**
 * @function processOrder - Payment processed message
 * @param {String} itemName - Product name
 */

function processOrder(itemName, callbackPayment, callbackError) {
    console.log("Verifying the stock of " + itemName);

    if (stock[itemName] > 0) { callbackPayment(itemName); } else { callbackError(itemName); }
}

/**
 * @var {String} userMessage - User input
 */

while (1) {
    let userMessage = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    processOrder(userMessage, processPayment, processError);
}