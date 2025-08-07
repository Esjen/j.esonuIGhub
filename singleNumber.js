const prompt = require('prompt-sync')();

const nums = prompt('Enter a list of numbers separated by a comma e.g(1,2,3,4,5,6) : ');

nums = nums.split(',').map(Number);

arr = [];

function singleNumber() {
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        nums.concat(arr);
        const randomIndex = Math.floor(Math.random() * nums.length);
        const removedIndex = nums.splice(randomIndex,1)[0];
        nums = nums.filter((num,index) => nums.indexOf(num) === nums.lastIndexOf(num))
    }
    return nums;

}

console.log(singleNumber());

