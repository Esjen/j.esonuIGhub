const prompt = require('prompt-sync')();

let coins = prompt('Enter a list of coins separated by a comma e.g: (1,2,3,4,5,6,7): ');
coins = coins.split(',').map(Number);

const amount = Number(prompt('Enter any amount of your choice:'));

function coinChange() {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(`Minimum coins needed: ${coinChange()}`);
