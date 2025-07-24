const prompt = require('prompt-sync')();

let input = prompt('Enter a 32-bit signed integer: ');
let num = parseInt(input);

function reversedNumber(n) {
    
    const sign = Math.sign(n);

    let reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));

    reversed *= sign;

    const MIN_INT = -Math.pow(2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;

    if (reversed >= MIN_INT && reversed <= MAX_INT) {
        console.log("Reversed Number:", reversed);
    } else {
        console.log("Reversed Number is out of bounds");
        console.log(0);
    }
}

reversedNumber(num);
