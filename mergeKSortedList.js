const prompt = require('prompt-sync')();

let lists = [];

const rows = Number(prompt('Enter the row value that you want: '));
const cols = Number(prompt('Enter the column value that you want: '));

lists = Array.from({ length: rows }, () => Array(cols).fill(0));

let output = [];

function createList() {
    const count = Number(prompt('Enter the number of times that you want to be prompted to enter in elements: '));

    const k = lists.length;

    if (count === k) {
        for (let i = 0; i < k; i++) {
            const elements = prompt(`Enter the elements you want in list ${i + 1} (separated by a comma): `);

            if (elements.toLowerCase() === 'nothing') {
                lists[i] = []; 
            } else {
                const nums = elements.split(',').map(Number).filter(n => !isNaN(n));
                lists[i] = nums; 
                output.push(...nums); 
            }
        }

        // Sort the merged output
        for (let j = 0; j < output.length; j++) {
            for (let l = j + 1; l < output.length; l++) {
                if (output[l] < output[j]) {
                    let temp = output[j];
                    output[j] = output[l];
                    output[l] = temp;
                }
            }
        }

        console.log("Merged & Sorted Output:", output);
    } else {
        console.log("The number of prompts must match the number of lists (rows). Try again.");
        return;
    }
}

createList();
