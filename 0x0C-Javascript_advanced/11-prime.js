/**
 * @description - Task 11
 * @function countPrimeNumbers - Count number of primes from 2 to 100
 * @returns {Number} - Primes count
 */


function countPrimeNumbers() {

    /**
     * @var {Boolean} isPrime - True if number is prime or False
     * @var {Number} countPrimes - counter for primes
     * @var {Number} i - iterator
     * @var {Number} end - End limiter
     * @var {Number} mod - mod
     */

    let isPrime;
    let countPrimes = 0;

    for (let i = 2; i <= 100; i++) {
        isPrime = true;
        let end = Math.round(Math.sqrt(i));

        for (let mod = 2; mod <= end; mod++) {

            if (i % mod == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            countPrimes = countPrimes + 1;
        }

    }

    console.log(countPrimes);
    return countPrimes;
}

/**
 * @var {Number} startCountPrimeNumbers - Define start
 * @var {Number} endCountPrimeNumbers - Define end
 * @var {Number} j - iterator
 */

let startCountPrimeNumbers = window.performance.now();

for (let j = 1; j < 101; j++) {
    countPrimeNumbers();
}

let endCountPrimeNumbers = window.performance.now();

/**
 * Changing stack order with setTimeout
 */

setTimeout(function() {
    console.log("Execution time of calculating prime numbers 100 times was " + (endCountPrimeNumbers - startCountPrimeNumbers) + " milliseconds.");
}, 0);