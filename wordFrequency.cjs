// Read from the file words.txt and output the word frequency list to stdout.
const fs = require('fs');

fs.readFile('words.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const words = data.split(/\s+/); // split by any whitespace
    const counts = words.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc; // must return accumulator
    }, {});

    console.log(counts);
});
