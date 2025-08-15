const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number of your choice: "));
const k = Number(prompt("How many integers to generate: "));

function matchingNumbers(n, k) {
    const infiniteIntegerSequence = [];

    for (let i = 1; i <= k; i++) {
        infiniteIntegerSequence.push(i);
    }

    if (infiniteIntegerSequence.includes(n)) {
        return `${n} exists in the sequence.`;
    } else {
        return `The value ${n} does not exist in the first ${k} integers.`;
    }
}

console.log(matchingNumbers(n, k));
