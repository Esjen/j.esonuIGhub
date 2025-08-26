const prompt = require("prompt-sync")();

const word = prompt("Enter a word of your choice: ");
const ch = prompt("Enter a character within the word: ");

function reversePrefix(word, ch) {
    let lastIndex = word.indexOf(ch);

    if (lastIndex === -1) {
        return word;
    }

    let prefix = word.slice(0, lastIndex + 1); 
    let suffix = word.slice(lastIndex + 1);     

    let reversed = prefix.split("").reverse().join("");

    return reversed + suffix;
}

console.log(reversePrefix(word, ch));
