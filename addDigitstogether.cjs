const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number of your choice: "));

function addDigits(n) {
    while (n >= 10) {
        n = n
            .toString()     
            .split('')      
            .map(Number)   
            .reduce((a, b) => a + b, 0); 
    }
    return n;
}

console.log(addDigits(num));
