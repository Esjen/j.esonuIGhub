const prompt = require('prompt-sync')();

function pow() {
    let x = Number(prompt('Enter a base value: '));
    let n = Number(prompt('Enter a power value: '));

    // Check if x and n are in valid range
    if (
        x > -100 && x < 100 &&
        x !== 0 &&
        n >= Math.pow(-2, 31) &&
        n <= Math.pow(2, 31) - 1
    ) {
        const power = Math.pow(x, n);

        // Check if result is within specified bounds
        if (power >= -1e4 && power <= 1e4) {
            console.log(`The power of the number is: ${power}`);
        } else {
            console.log('The power does not meet the condition specified.');
        }
    } else {
        console.log('The value of x and n are not within range.');
    }
}

pow(); // No need to pass x and n; function prompts inside
