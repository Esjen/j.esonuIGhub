const prompt = require('prompt-sync')();

const n = Number(prompt('Enter any number from 1 to 8:'));

function generateBrackets(n) {
    const result = [];

    function backtrack(str, open, close) {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        if (open < n) {
            backtrack(str + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(str + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}


function checkCondition() {
    if (result >= 1 && result <=8) {
        generateBrackets(n);
    } else {
        console.log('The result must fall within the range of 1 to 8: ');
        return;
    }
}

        

// Example usage:
console.log(generateBrackets(n));
