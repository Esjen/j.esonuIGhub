const prompt = require('prompt-sync')();

let arrs = prompt('Enter a string of numbers separated by a comma e.g (1,2,3,4,5,6): ');

arrs = arrs.split(',').map(Number);

function uniqueBitwiseORs(arr) {
  const result = new Set();

  for (let i = 0; i < arr.length; i++) {
    let orValue = 0;

    for (let j = i; j < arr.length; j++) {
      orValue |= arr[j];
      result.add(orValue); 
    }
  }

  return result.size;
}

console.log("Number of distinct bitwise ORs of all non-empty subarrays:", uniqueBitwiseORs(arrs));
