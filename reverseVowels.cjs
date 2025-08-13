const prompt = require('prompt-sync')();

const s = prompt('Enter a word of your choice');

let output = [];

function reverseVowels() {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' || s[i] === 'a' || s[i] === "E" || s[i] === 'e' || s[i] === 'I' || s[i] === 'i' || s[i] === 'O' || s[i] === 'o' || s[i] === 'U' || s[i] === 'u') {
            output.push(s[i]);
        } else {
            console.log("No vowels present");
            return;
        }
    }
    return output;
    return s;

    
}

console.log(reverseVowels());