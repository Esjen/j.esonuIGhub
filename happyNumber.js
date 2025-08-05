const prompt = require('prompt-sync')();

const input = parseInt(prompt("Enter a positive integer: "), 10);

function isHappy(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
}

function sumOfSquares(num) {
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit * digit, 0);
}

// Call the function and display the result
if (isHappy(input)) {
    console.log(`${input} is a happy number!`);
} else {
    console.log(`${input} is NOT a happy number.`);
}
