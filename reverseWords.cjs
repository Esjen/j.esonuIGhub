const prompt = require('prompt-sync')();

const s = prompt('Enter a sentence: ');
const reversed = s.split('').reverse().join(' ');

console.log(`The reversed words output is: ${reversed}`);
