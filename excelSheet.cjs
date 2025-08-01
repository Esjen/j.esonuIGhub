const prompt = require('prompt-sync')();

const num = Number(prompt('Enter a number to convert to Excel column title: '));

function convertToTitle(columnNumber) {
    let result = '';
    
    while (columnNumber > 0) {
        columnNumber--; // Adjust to 0-based indexing
        const charCode = (columnNumber % 26) + 65; // 65 is 'A'.charCodeAt(0)
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
}

console.log(convertToTitle(num));
