/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  // Day 1: one person knows the secret

    for (let day = 1; day <= n; day++) {
        for (let shareDay = day + delay; shareDay < Math.min(n + 1, day + forget); shareDay++) {
            dp[shareDay] = (dp[shareDay] + dp[day]) % MOD;
        }
    }

    // Count people who still remember the secret on day n
    let ans = 0;
    for (let day = n - forget + 1; day <= n; day++) {
        if (day > 0) ans = (ans + dp[day]) % MOD;
    }

    return ans;
};

// Example runs:
console.log(peopleAwareOfSecret(6, 2, 4)); // Output: 5
console.log(peopleAwareOfSecret(4, 1, 3)); // Output: 6
