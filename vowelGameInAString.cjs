/**
 * @param {string} s
 * @return {boolean}
 */

function vowelsGameInAString(s) {
    let vowelsOdd = [];
    let vowelsEven = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsOdd.push(s[i]); 
        }
    }

    if (vowelsOdd.length > 0) {
        return true; // Alice wins
    }

    //Otherwise, no vowels exist, Alice cannot play
    return false;
}

// Examples
console.log(vowelsGameInAString("leetcoder")); // true
console.log(vowelsGameInAString("bbcd"));      // false
