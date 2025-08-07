const prompt = require('prompt-sync')();

let nums = prompt('Enter a list of numbers separated by commas (e.g. 1,2,3,4,5,6): ');

// Convert input to array of numbers
nums = nums.split(',').map(Number);

function singleNumber(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log("Single (non-duplicated) number(s):", singleNumber(nums));
