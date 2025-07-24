const prompt = require('prompt-sync')();

let input = prompt('Enter a list of words separated by commas (e.g. Hello,world,stain): ');
let strs = input.split(',').map(word => word.trim()); // Trim whitespace

function longestCommonPrefix() {
    if (strs.length === 0) {
        console.log("No input provided.");
        return;
    }

    let prefix = strs[0]; // Start with the first word as the prefix

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Reduce the prefix
            if (prefix === '') {
                console.log("There is no common prefix among the input strings.");
                return;
            }
        }
    }

    console.log("Longest common prefix:", prefix);
}

longestCommonPrefix();
