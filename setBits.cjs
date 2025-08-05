const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a positive integer n: "));

function setBits() {
    binEquiv = n.toString(2);
    if (binEquiv.length > 0) {
        return binEquiv.split('').filter(bit => bit === "1").length;
    } else {
        return "No set bits available";
    }
}



console.log(setBits());

