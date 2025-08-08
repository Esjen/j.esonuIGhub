const prompt = require('prompt-sync')();

const num1 = prompt("Enter your first integer: ");

const num2 = prompt("Enter your second integer: ");

function sumNumbers() {

    return num1 | num2;

}

function checkConditions() {
    if (num1 >= -1000 && num1 <= 1000 && num2 >= -1000 && num2 <= 1000) {
        console.log(sumNumbers());
    } else {
        return;
    }

}

checkConditions();

