const prompt = require('prompt-sync')();

let nums = prompt('Enter a list of numbers separated by a comma e.g(0,1,2,3,4,5,6) :');

nums = nums.split(',').map(Number);

function moveZerosToEnd() {
    let index = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    // Fill the rest with zeros
    while (index < nums.length) {
        nums[index++] = 0;
    }

    return nums;
}
console.log(moveZerosToEnd(nums));  
