const prompt = require('prompt-sync')();

const n = Number(prompt('Enter a number of your choice: ')); 

let superUglyNumbersArray = [];
let output = [];

let primes = prompt("Enter a list of prime numbers separated by a comma: e.g (2,5,7...) in any order: ");
primes = primes.split(',').map(Number);

const primesArray = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

function checkElements() {
    for (let i = 0; i < primes.length; i++) {
        if (!primesArray.includes(primes[i])) {
            console.log("Wrong list of prime numbers entered, please enter a valid list of numbers.");
            return false;
        }
    }
    return true;
}

function checkCondition() {
    if (n < 1 || n > Math.pow(10,5)) {
        console.log("The value of n should range from 1 to 10 ^ 5.");
        return false;
    }
    if (primes.length < 1 || primes.length > 100) {
        console.log("The number of primes should range from 1 to 100.");
        return false;
    }
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] < 2 || primes[i] > 1000) {
            console.log("Each prime should be between 2 and 1000.");
            return false;
        }
    }
    if (n === 3) {
        console.log("The value of n cannot be equal to three.");
        return false;
    }
    return true;
}

function superUglyNumber() {
    superUglyNumbersArray.push(1);
    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            let superUgly = primes[i] * primes[j];
            if (!superUglyNumbersArray.includes(superUgly)) {
                superUglyNumbersArray.push(superUgly);
            }
        }
    }
}

function resultOfSuperUglyNumbers() {
    superUglyNumbersArray.sort((a, b) => a - b);
    if (n - 1 < superUglyNumbersArray.length) {
        return superUglyNumbersArray[n - 1];
    } else {
        console.log("Not enough super ugly numbers generated to reach index", n);
        return null;
    }
}
if (checkElements() && checkCondition()) {
    superUglyNumber();
    let result = resultOfSuperUglyNumbers();
    console.log("The nth super ugly number is:", result);
}
