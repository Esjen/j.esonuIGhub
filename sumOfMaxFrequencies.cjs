/**
 * @param {string} s
 * @return {number}
 */
function sumOfMaximumFrequency(s) {
    let vowelSet = 'aeiou';
    let vowels = [];
    let consonants = [];

    for (let i = 0; i < s.length; i++) {
        if (vowelSet.includes(s[i])) {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }

    let vowelFreq = {};
    vowels.forEach(char => {
        vowelFreq[char] = (vowelFreq[char] || 0) + 1;
    });

    let vowelFrequencies = Object.values(vowelFreq);
    let maxVowel = vowelFrequencies.length ? Math.max(...vowelFrequencies) : 0;

    let consonantFreq = {};
    consonants.forEach(char => {
        consonantFreq[char] = (consonantFreq[char] || 0) + 1;
    });

    let consonantFrequencies = Object.values(consonantFreq);
    let maxConsonant = consonantFrequencies.length ? Math.max(...consonantFrequencies) : 0;

    return maxVowel + maxConsonant;
}

console.log(sumOfMaximumFrequency("successes")); 
console.log(sumOfMaximumFrequency("aeiaeia"));  
