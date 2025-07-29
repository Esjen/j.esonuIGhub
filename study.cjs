const prompt = require('prompt-sync')();

let input = prompt('Enter numbers separated by commas, e.g., 1,2,3: ');
let nums = input.split(',').map(Number);

let output = [];

function subsets(nums) {
    const result = [[]]; // start with the empty subset

    for (let num of nums) { //num represents the elements and nums represents the entire array itself.
        const newSubsets = result.map(subset => [...subset, num]);
        result.push(...newSubsets);
    }

    return result;
}

output = subsets(nums);
console.log('All subsets (power set):');
console.log(output);
