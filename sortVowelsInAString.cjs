/**
 * @param {string} s
 * @return {string}
 */

const prompt = require('prompt-sync')();

function sortVowelsInAString(s) {
    let arr = s.split("");         // make string editable
    let vowels = [];

    // Step 1: collect vowels
    for (let i = 0; i < arr.length; i++) {
        if ("aeiouAEIOU".includes(arr[i])) {
            vowels.push(arr[i]);
        }
    }

    // Step 2: sort vowels (ASCII order)
    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    // Step 3: replace vowels back using your original for-loop style
    let v = 0; // index into sorted vowels
    for (let i = 0; i < arr.length; i++) {
        if ("aeiouAEIOU".includes(arr[i])) {
            arr[i] = vowels[v];
            v++;
        }
    }

    return arr.join("");
}

// Example runs
console.log(sortVowelsInAString("lEetcOde")); // "lEOtcede"
console.log(sortVowelsInAString("lYmpH"));    // "lYmpH"
