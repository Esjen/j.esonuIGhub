const prompt = require('prompt-sync')();

const input = prompt("Enter a list of numbers separated by commas (e.g., 1,2,3,4,5): ");
let nums = input.split(',').map(Number); // Convert string to array of numbers

const k = Number(prompt("Enter the number of chunks: "));

function splitArrayLargestSum() {
    const output = [];
    const splits = Math.ceil(nums.length / k);

    for (let i = 0; i < nums.length; i += splits) {
        output.push(nums.slice(i, i + splits));
    }

    output.forEach(subArray => {
        let maxSum = -Infinity;
        for (let j = 0; j < subArray.length; j++) {
            for (let m = j + 1; m < subArray.length; m++) {
                const result = subArray[j] + subArray[m];
                if (result > maxSum) {
                    maxSum = result;
                }
            }
        }
        console.log(`Max sum in ${JSON.stringify(subArray)}: ${maxSum}`);
    });
}

splitArrayLargestSum();
