const prompt = require('prompt-sync')();

let nums = prompt('Enter a list of numbers separated by a comma e.g (1,2,3,4,5,6,7): Note: Repetition is allowed: ');

nums = nums.split(',').map(Number);

function findPeakElement() {
    if (nums.length === 0) {
        console.log("No elements provided.");
        return;
    }

    const peakNumber = Math.max(...nums);  // Use spread to find max in array
    const peakIndex = nums.indexOf(peakNumber);

    console.log(`The peak element is: ${peakNumber}`);
    console.log(`The index of the maximum number is: ${peakIndex}`);
}

findPeakElement();
