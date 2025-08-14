const prompt = require('prompt-sync')();

let s = prompt("Enter a random list of characters e.g (seddbj) repetition is allowed: ");

s = s.split(''); 

function checkForDuplicates() {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                s.splice(j, 1); 
                j--; 
            }
        }
    }
    return s.join('');
}

console.log(checkForDuplicates());
