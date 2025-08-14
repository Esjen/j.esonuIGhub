const prompt = require('prompt-sync')();

const n = Number(prompt('Enter an integer of your choice: '));

const k = Array.from({ length: 58 }, (_, i) => i + 1);

function checkConditions() {
    if (n >= 2 && n <= 58) {
        console.log(integerBreak());
    } else {
        console.log("The number must be between 2 and 58.");
    }
}

function integerBreak() {
    let factor = 1;
    let found = false;
    for (let i = 0; i < k.length; i++) {
        for (let j = i + 1; j < k.length; j++) {
            if (k[i] + k[j] === n) {
                found = true;
                factor *= k[i] * k[j];
            }
        }
    }
    return found ? factor : null;
}

checkConditions();
