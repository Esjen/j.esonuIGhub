const prompt = require('prompt-sync')();

const frequencies = {};
let elemStore = [];

function kFrequentElements(output, nums, k) {
    nums = prompt("Enter a list of numbers separated by a comma (repetition is allowed): ");
    nums = nums.split(',').map(Number);

    k = Number(prompt("Enter the number of frequently occurring values that you want printed out to the console: "));

    
    nums.forEach(num => {
        frequencies[num] = (frequencies[num] || 0) + 1;
    });

    let elems = Object.keys(frequencies).map(Number);
    let counts = Object.values(frequencies);        

    
    for (let i = 0; i < elems.length; i++) {
        for (let j = i + 1; j < elems.length; j++) {
            if (frequencies[elems[j]] > frequencies[elems[i]]) {
                // swap
                let tempElem = elems[i];
                elems[i] = elems[j];
                elems[j] = tempElem;
            }
        }
    }

    
    output = elems.slice(0, k);
    return output;
}


let result = kFrequentElements([], [], 0);
console.log("Top frequent elements:", result);
