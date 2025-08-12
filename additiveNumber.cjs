const prompt = require('prompt-sync')();

let seq = prompt('Enter numbers separated by commas (e.g. 1,2,3,5,8): ');
seq = seq.split(',').map(Number);

function additiveNumber() {
    for (let i = 0; i < seq.length - 2; i++) {
        if (seq[i] + seq[i + 1] !== seq[i + 2]) {
            return false;
        }
    }
    return true;
}

console.log(additiveNumber());
