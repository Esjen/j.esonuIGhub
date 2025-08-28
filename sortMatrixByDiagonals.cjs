const prompt = require("prompt-sync")();

// Input
const rows = Number(prompt("Enter the number of rows (matrix must be square): "));
const cols = Number(prompt("Enter the number of columns: "));

let nums = prompt("Enter a list of numbers separated by commas e.g: 1,2,3,4,5: ");
nums = nums.split(",").map(Number);

// Initialize grid
let grid = Array.from({ length: rows }, () => Array(cols).fill(0));

// Fill the grid with input numbers row by row
let index = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    grid[i][j] = nums[index++];
  }
}

function check() {
  if (rows === cols && nums.length === rows * cols) {
    return sortMatrixByDiagonals();
  } else {
    console.log("Invalid input: must be a square matrix and fill completely.");
    return grid;
  }
}

function sortMatrixByDiagonals() {
  // Sort bottom-left diagonals (including main) in non-increasing order
  for (let col = 0; col < cols; col++) {
    let diagonal = [];
    let x = col, y = 0;
    while (x < cols && y < rows) {
      diagonal.push(grid[y][x]);
      x++;
      y++;
    }
    diagonal.sort((a, b) => b - a); // descending
    x = col; y = 0;
    let idx = 0;
    while (x < cols && y < rows) {
      grid[y][x] = diagonal[idx++];
      x++;
      y++;
    }
  }

  for (let row = 1; row < rows; row++) {
    let diagonal = [];
    let x = 0, y = row;
    while (x < cols && y < rows) {
      diagonal.push(grid[y][x]);
      x++;
      y++;
    }
    diagonal.sort((a, b) => b - a); // descending
    x = 0; y = row;
    let idx = 0;
    while (x < cols && y < rows) {
      grid[y][x] = diagonal[idx++];
      x++;
      y++;
    }
  }

  // Sort top-right diagonals in non-decreasing order
  for (let col = 1; col < cols; col++) {
    let diagonal = [];
    let x = col, y = 0;
    while (x < cols && y < rows) {
      diagonal.push(grid[y][x]);
      x++;
      y++;
    }
    diagonal.sort((a, b) => a - b); // ascending
    x = col; y = 0;
    let idx = 0;
    while (x < cols && y < rows) {
      grid[y][x] = diagonal[idx++];
      x++;
      y++;
    }
  }

  return grid;
}

console.log(check());
