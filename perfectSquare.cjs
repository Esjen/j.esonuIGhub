const prompt = require('prompt-sync')();

const num = Number(prompt("Enter any number of your choice: "));

function isPerfectSquare(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root);
}

console.log(isPerfectSquare(num) ? "Perfect square!" : "Not a perfect square.");
