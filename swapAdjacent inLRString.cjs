/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
function swapAdjacentInLRString(start, result) {
    let arrStart = start.split(""); // Convert string to array for manipulation

    // We don't need a random loop; we just check positions of L and R
    let i = 0, j = 0;

    while (i < arrStart.length && j < result.length) {
        // Skip X in start
        while (i < arrStart.length && arrStart[i] === "X") i++;
        // Skip X in result
        while (j < result.length && result[j] === "X") j++;

        // If both pointers reached the end, done
        if (i === arrStart.length && j === result.length) break;
        if (i === arrStart.length || j === result.length) return false;

        // Check if characters are the same
        if (arrStart[i] !== result[j]) return false;

        // Check 'L' and 'R' movement rules
        if (arrStart[i] === "L" && i < j) return false; // L can't move right
        if (arrStart[i] === "R" && i > j) return false; // R can't move left

        i++;
        j++;
    }

    return true;
}

// Example usage
let start = "RXXLRXRXL";
let result = "XRLXXRRLX";

console.log(swapAdjacentInLRString(start, result)); // true
