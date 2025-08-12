const prompt = require('prompt-sync')();

let words = prompt("Enter a list of words separated by a comma e.g cats,dogs,catsdogs,dogscats : ");

words = words.split(','); // keep them as strings

let output = [];

function concatenatedWords() {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) { // avoid same position pairing
                let combined = words[i] + words[j];
                if (words.includes(combined)) {
                    output.push(`${words[i]} + ${words[j]} = ${combined}`);
                }
            }
        }
    }
    if (output.length === 0) {
        return "No concatenated words available";
    }
    return output;
}

console.log(concatenatedWords());
