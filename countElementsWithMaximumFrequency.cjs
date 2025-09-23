/**
 * @param {number[]} nums
 * @return {number}
 */
function countElementsWithMaximumFrequency(nums) {
    // Count frequency of each element
    let frequency = {};
    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Get all frequency values
    let frequencies = Object.values(frequency);

    // Find maximum frequency
    let maxFreq = Math.max(...frequencies);

    // Sum up all frequencies equal to maxFreq
    let total = frequencies.reduce((sum, f) => sum + (f === maxFreq ? f : 0), 0);

    return total;
}

// Example test cases
console.log(countElementsWithMaximumFrequency([1,2,2,3,1,4])); // Output: 4
console.log(countElementsWithMaximumFrequency([1,2,3,4,5]));   // Output: 5
