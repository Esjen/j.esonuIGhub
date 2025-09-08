/**
 * @param {number} n
 * @return {number[]}
 */

const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a number of your choice: '));

function uniqueIntegers(n) {
    let output = new Set();

    // generate n-1 unique random integers
    while (output.size < n - 1) {
        let randomInt = Math.floor(Math.random() * 201) - 100; // range -100 to 100
        output.add(randomInt);
    }

    let arr = Array.from(output);

    // make the last number balance the sum to 0
    let sum = arr.reduce((a, b) => a + b, 0);
    let lastNum = -sum;

    // ensure lastNum is unique
    while (output.has(lastNum)) {
        output.delete(arr.pop()); // remove a random element
        let newInt = Math.floor(Math.random() * 201) - 100;
        output.add(newInt);
        arr = Array.from(output);
        sum = arr.reduce((a, b) => a + b, 0);
        lastNum = -sum;
    }

    arr.push(lastNum);
    return arr;
}

let result = uniqueIntegers(n);
console.log(`Output: ${result}`);
console.log(`Sum check: ${result.reduce((a, b) => a + b, 0)}`);
