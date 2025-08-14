const prompt = require('prompt-sync')();

const n = Number(prompt("Enter an integer: "));

let ans = [];
let store = [];

function checkCondition() {
    if (!Number.isInteger(n)) {
        console.log("Please enter a valid integer.");
        return;
    }

    if (n >= 0 && n <= 100000) {
        toBinary();
    } else {
        console.log("The value of n must range from 0 to 10^5");
    }
}

function toBinary() {
    for (let i = 0; i < n; i++) {
        let binOfI = i.toString(2); // convert to binary
        store.push(binOfI);
    }
    countingBits();
}

function countingBits() {
    store.forEach(bin => {
        const onesCount = bin.split('').filter(bit => bit === '1').length;
        ans.push(onesCount);
    });
    console.log(ans); // output result
}

checkCondition();
