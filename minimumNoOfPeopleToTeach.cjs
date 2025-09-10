function minimumTeach(n, languages, friendships) {
    const broken = [];
    for (let [u, v] of friendships) {
        const userU = languages[u - 1];
        const userV = languages[v - 1];
        const canCommunicate = userU.some(lang => userV.includes(lang));
        if (!canCommunicate) {
            broken.push([u, v]);
        }
    }

    const teachCount = Array(n + 1).fill(0); 
    for (let lang = 1; lang <= n; lang++) {
        const usersToTeach = new Set();
        for (let [u, v] of broken) {
            if (!languages[u - 1].includes(lang)) usersToTeach.add(u);
            if (!languages[v - 1].includes(lang)) usersToTeach.add(v);
        }
        teachCount[lang] = usersToTeach.size;
    }
    return Math.min(...teachCount.slice(1));
}

// Example 1:
let n1 = 2;
let languages1 = [[1],[2],[1,2]];
let friendships1 = [[1,2],[1,3],[2,3]];
console.log(minimumTeach(n1, languages1, friendships1)); // Output: 1

// Example 2
let n2 = 3;
let languages2 = [[2],[1,3],[1,2],[3]];
let friendships2 = [[1,4],[1,2],[3,4],[2,3]];
console.log(minimumTeach(n2, languages2, friendships2)); // Output: 2
