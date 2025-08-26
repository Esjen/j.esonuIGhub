const prompt = require('prompt-sync')();

let number = prompt("Enter four random numbers separated by a comma e.g (1,2,3,4). The first two represent the length and width of the first rectangle, and the second two represent the length and width of the second rectangle: ");

number = number.split(',').map(Number);

function checkCondition() {
    if (number.length === 4) {
        return maximumAreaOfLongestDiagonal();
    } else {
        return "The number of digits you chose exceeds four.";
    }
}

function maximumAreaOfLongestDiagonal() {
    // Extract length & width
    const rect1 = [number[0], number[1]];
    const rect2 = [number[2], number[3]];

    // Compute diagonals
    const diagonal1 = Math.sqrt(rect1[0] ** 2 + rect1[1] ** 2);
    const diagonal2 = Math.sqrt(rect2[0] ** 2 + rect2[1] ** 2);

    // Compute areas
    const area1 = rect1[0] * rect1[1];
    const area2 = rect2[0] * rect2[1];

    // Compare diagonals, return area of rectangle with longer diagonal
    if (diagonal1 >= diagonal2) {
        return `Rectangle 1 has the longer diagonal (${diagonal1.toFixed(2)}). Area = ${area1}`;
    } else {
        return `Rectangle 2 has the longer diagonal (${diagonal2.toFixed(2)}). Area = ${area2}`;
    }
}

console.log(checkCondition());
