const prompt = require('prompt-sync')();

let integers = prompt('Enter a list of integers separated by a comma e.g(1,2,3,4,5,6) in any order: ');
integers = integers.split(',').map(Number);

const target = Number(prompt('Enter a target value: '));
let output = [];

// Sort the array once before two-pointer logic
integers.sort((a, b) => a - b);

function twoSumII() {
    let left = 0;
    let right = integers.length - 1;

    while (left < right) {
        const sum = integers[left] + integers[right];
        if (sum === target) {
            output.push(left, right); // or integers[left], integers[right]
            break; // assuming only one pair
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    if (output.length) {
        console.log(`Output: Indices [${output}]`);
        console.log(`Values: [${integers[output[0]]}, ${integers[output[1]]}]`);
    } else {
        console.log('No two numbers add up to the target.');
    }
}

twoSumII();
