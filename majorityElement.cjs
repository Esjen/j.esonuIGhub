const prompt = require('prompt-sync')();

let nums = prompt("Enter a list of numbers separated by a comma e.g (1,2,3,4): ");
nums = nums.split(',').map(Number);

let n = nums.length;

function majorityElement() {
    const counts = {};

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;

        if (counts[num] > n / 2) {
            console.log(`Majority element: ${num}`);
            return;
        }
    }

    console.log("There is no majority element");
}

majorityElement();
