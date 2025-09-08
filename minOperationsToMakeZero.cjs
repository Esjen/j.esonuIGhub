/**
 * @param {number[][]} queries
 * @return {number}
 */
function minOperations(queries) {
    function countReductions(x) {
        let steps = 0;
        while (x > 0) {
            x = Math.floor(x / 4);
            steps++;
        }
        return steps;
    }

    let total = 0;

    for (let [l, r] of queries) {
        let steps = 0;
        for (let num = l; num <= r; num++) {
            steps += countReductions(num);
        }
        total += Math.ceil(steps / 2);
    }

    return total;
}

// Test cases
console.log(minOperations([[1,2],[2,4]])); // 3
console.log(minOperations([[2,6]]));       // 4
