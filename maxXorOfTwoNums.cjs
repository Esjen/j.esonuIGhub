const prompt = require('prompt-sync')();

let nums = prompt("Enter a list of numbers separated by a comma e.g (1,2,3,4,5): ");
nums = nums.split(',').map(Number);

function xorOfTwoNumbers() {
    let maxXor = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let xorOfDigits = nums[i] ^ nums[j];
            if (xorOfDigits > maxXor) {
                maxXor = xorOfDigits;
            }
        }
    }

    return maxXor;
}

let maxXorValue = xorOfTwoNumbers();

if (maxXorValue > 0) {
    console.log(`The maximum XOR of two numbers in the input array is: ${maxXorValue}`);
} else {
    console.log("No valid XOR found.");
}
