const prompt = require('prompt-sync')();

const n = prompt('Enter the number of versions separated by a comma e.g (1,2,3,4,5): ')
    .split(',')
    .map(Number);

const badIndex = Number(prompt("Enter the index from which you want the bad number to begin: "));

function isBadVersion() {
    if (badIndex < 0 || badIndex >= n.length) {
        console.log("Index not found");
        return [];
    }
    return n.slice(badIndex).length;
}

console.log("Bad versions:", isBadVersion());
