/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */

function destroySequentialTargets(nums, space) {
    let maxTargets = 0;
    let result = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if ((nums[j] - nums[i]) % space === 0) {
                count++;
            }
        }

        if (count > maxTargets) {
            maxTargets = count;
            result = nums[i];
        } else if (count === maxTargets) {
            result = Math.min(result, nums[i]);
        }
    }

    return result;
}

console.log(destroySequentialTargets([3,7,8,1,1,5], 2)); 
console.log(destroySequentialTargets([1,3,5,2,4,6], 2)); 
console.log(destroySequentialTargets([6,2,5], 100));     
