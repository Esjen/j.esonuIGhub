const prompt = require('prompt-sync')();

const wordList = ['man', 'calf', 'horse', 'crip', 'tree'];
let scrambled = [];
let score = 0;
let getCorrectLetterAttempts = 5;

function scrambleWords() {
    scrambled = wordList.map(word => {
        const arr = word.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    });
}

function startApplication() {
    while (true) {
        const question = prompt('Enter an option to begin or exit the application: (S/E): ').toLowerCase();
        if (question === 's') {
            scrambleWords();
            scrambleApplication();
            break;
        } else if (question === 'e') {
            console.log("Exiting the application, Goodbye!");
            break;
        } else {
            console.log("Wrong character entered, please re-enter a valid character.");
        }
    }
}

function scrambleApplication() {
    const totalWords = wordList.length;

    for (let i = 0; i < totalWords; i++) {
        console.log(`\nScrambled word ${i + 1}: ${scrambled[i]}`);
        let currentWord = wordList[i];
        let guessedCorrectly = false;

        while (true) {
            let guess = prompt("Your guess: ").toLowerCase();

            if (guess === currentWord) {
                console.log("Correct! You spelt the word correctly.");
                score++;
                getCorrectLetterAttempts++; // regain one attempt
                guessedCorrectly = true;
                break;
            } else {
                console.log("Incorrect spelling.");
            }

            const option = prompt("Enter an option: (G = Get correct letter, H = Hint, N = Next word): ").toLowerCase();

            if (option === 'g') {
                if (getCorrectLetterAttempts > 0) {
                    const revealIndex = Math.floor(Math.random() * currentWord.length);
                    console.log(`Correct letter revealed: '${currentWord[revealIndex]}' at position ${revealIndex + 1}`);
                    getCorrectLetterAttempts--;
                    console.log(`Remaining GET CORRECT LETTER attempts: ${getCorrectLetterAttempts}`);
                } else {
                    console.log("You cannot get a correct letter because you are out of attempts.");
                }
            } else if (option === 'h') {
                const hint1 = currentWord.charAt(0);
                const hint2 = currentWord.charAt(currentWord.length - 1);
                console.log(`Hint: The first letter is '${hint1}' and the last letter is '${hint2}'`);
            } else if (option === 'n') {
                console.log(`Moving to next word. The correct word was: '${currentWord}'`);
                break;
            } else {
                console.log("Invalid option selected, please try again.");
            }
        }

        console.log(`Current Score: ${score}/${i + 1}`);
        console.log(`Remaining GET CORRECT LETTER attempts: ${getCorrectLetterAttempts}`);

        if (i === totalWords - 1) {
            console.log("\nThis is the last word.");
            console.log(`Final Score: ${score}/${totalWords}`);
        }
    }
}

startApplication();
