const prompt = require('prompt-sync')();

let k = Number(prompt("Enter the size of the sliding window: "));

function slidingWindow() {
    let nums = prompt("Enter a list of numbers separated by a comma e.g (1,2,3,45): ");
    nums = nums.split(',').map(Number);

    let output = [];

    for (let i = 0; i <= nums.length - k; i++) {
        let window = nums.slice(i, i + k);
        output.push(Math.max(...window));
    }

    return output;
}

console.log(slidingWindow());
