/**
 * @param {number} n
 * @return {number[]}
 */

function getNoZeroIntegers(n) {
    function isNoZero(x) {
        return !x.toString().includes("0");
    }

    for (let i = 1; i < n; i++) {
        let a = i;
        let b = n - i;
        if (isNoZero(a) && isNoZero(b)) {
            return [a, b];
        }
    }
    return [];
}

console.log(getNoZeroIntegers(2));  
console.log(getNoZeroIntegers(11));  
console.log(getNoZeroIntegers(101)); 
