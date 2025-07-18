const prompt = require('prompt-sync')();

// Collect fruits first
const fruit1 = prompt('Enter the first fruit you want in the array: ');
const fruit2 = prompt('Enter the second fruit you want in the array: ');
const fruit3 = prompt('Enter the third fruit you want in the array: ');

let fruits = [];
fruits.push(fruit1, fruit2, fruit3);

// Now collect numbers
const num1 = Number(prompt('Enter the first number you want in the array: '));
const num2 = Number(prompt('Enter the second number you want in the array: '));
const num3 = Number(prompt('Enter the third number you want in the array: '));

let numbers = [];
numbers.push(num1, num2, num3);

// Delay a message
setTimeout(function () {
  console.log('This message will appear after 2 seconds have elapsed');
}, 2000);

// Main processing function
function processItems(makeUppercase, doubleNumbers, tripleNumbers) {
  const choice = prompt(
    'Do you want to convert a list of fruits to uppercase or double/triple a list of numbers? (1=uppercase, 2=double, 3=triple): '
  );

  if (choice === '1') {
    makeUppercase();
  } else if (choice === '2') {
    doubleNumbers();
  } else if (choice === '3') {
    tripleNumbers();
  } else {
    console.log('Invalid choice made/selected');
  }
}

// Convert fruit names to uppercase
function makeUppercase() {
  const action = prompt('Do you want to make these uppercase? (Y/N): ');
  if (action === 'Y') {
    for (let i = 0; i < fruits.length; i++) {
      fruits[i] = fruits[i].toUpperCase();
      console.log(`Uppercase Fruit: ${fruits[i]}`);
    }
  } else if (action === 'N') {
    console.log('Okay, the fruits will appear as you input them:');
    for (let i = 0; i < fruits.length; i++) {
      console.log(`Fruit: ${fruits[i]}`);
    }
  } else {
    console.log('Invalid action. Please enter either "Y" or "N".');
  }
}

// Double numbers
function doubleNumbers() {
  const action = prompt('Do you want to double these numbers? (Y/N): ');
  if (action === 'Y') {
    for (let i = 0; i < numbers.length; i++) {
      console.log(`Doubled Number: ${numbers[i] * 2}`);
    }
  } else if (action === 'N') {
    console.log('Okay, the numbers will remain as you input them:');
    for (let i = 0; i < numbers.length; i++) {
      console.log(`Number: ${numbers[i]}`);
    }
  } else {
    console.log('Invalid action.');
  }
}

// Triple numbers
function tripleNumbers() {
  const action = prompt('Do you want to triple these numbers? (Y/N): ');
  if (action === 'Y') {
    for (let i = 0; i < numbers.length; i++) {
      console.log(`Tripled Number: ${numbers[i] * 3}`);
    }
  } else if (action === 'N') {
    console.log('Okay, the numbers will remain as you input them:');
    for (let i = 0; i < numbers.length; i++) {
      console.log(`Number: ${numbers[i]}`);
    }
  } else {
    console.log('Invalid action.');
  }
}

// Call the processing function after delay
setTimeout(() => {
  processItems(makeUppercase, doubleNumbers, tripleNumbers);
}, 1000);
