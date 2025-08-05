// JavaScript code to create a CBT application
const prompt = require('prompt-sync')();

const passwords = ["john123", "doe456", "smith789"];
const usernames = ["john", "doe", "smith"];

const questions = [
  "What is the capital of France?",
  "What is the name of the largest ocean?",
  "What is the chemical symbol for water?"
];

const optionsList = [
  ["A. London", "B. Paris", "C. Berlin", "D. Rome"],
  ["A. Atlantic", "B. Indian", "C. Pacific", "D. Arctic"],
  ["A. CO2", "B. H2O", "C. O2", "D. NaCl"]
];

const answers = ["B", "C", "B"]; // correct answers by option letter

let userAnswers = new Array(questions.length).fill(null); // track answers
let skippedQuestions = [];

function startApplication() {
  const app = prompt("Do you want to enter or exit the CBT application? (enter/exit): ");
  if (app.toLowerCase() === 'enter') {
    console.log("\nWelcome to the CBT application!\n");
    cbtAuthentication();
  } else if (app.toLowerCase() === 'exit') {
    console.log("Exiting the CBT application. Goodbye!");
  } else {
    console.log("Wrong character entered, please enter a valid option (enter/exit).");
    startApplication(); // re-prompt
  }
}

function cbtAuthentication() {
  let username = prompt("Enter your username: ").toLowerCase();
  let password = prompt("Enter your password: ").toLowerCase();

  const index = usernames.indexOf(username);
  if (index !== -1 && passwords[index] === password) {
    console.log(`\nWelcome ${username}! You have successfully logged in.\n`);
    cbtApplication();
  } else {
    console.log("Wrong login details, please try again.\n");
    cbtAuthentication();
  }
}

function cbtApplication() {
  let current = 0;
  while (true) {
    console.log(`\nQuestion ${current + 1}: ${questions[current]}`);
    optionsList[current].forEach(option => console.log(option));

    if (userAnswers[current]) {
      console.log(`\nYour previous answer: ${userAnswers[current]}`);
    }

    const response = prompt("Enter your answer (A-D), 'skip', 'next', 'previous', or 'submit': ").toUpperCase();

    if (["A", "B", "C", "D"].includes(response)) {
      userAnswers[current] = response;
      console.log("Answer saved.");
    } else if (response === "SKIP") {
      if (!skippedQuestions.includes(current)) skippedQuestions.push(current);
      console.log("Question skipped.");
      current = moveNext(current);
    } else if (response === "NEXT") {
      if (current < questions.length - 1) {
        current++;
      } else {
        console.log("You are on the last question. Can't go forward.");
      }
    } else if (response === "PREVIOUS") {
      if (current > 0) {
        current--;
      } else {
        console.log("You are on the first question. Can't go back.");
      }
    } else if (response === "SUBMIT") {
      submitScript();
      break;
    } else {
      console.log("Invalid input. Please enter a valid choice.");
    }
  }
}

function moveNext(current) {
  return current < questions.length - 1 ? current + 1 : current;
}

function submitScript() {
  let score = 0;
  console.log("\n--- CBT Submission ---");
  for (let i = 0; i < questions.length; i++) {
    const correct = answers[i];
    const selected = userAnswers[i] || "No answer";
    const isCorrect = selected === correct;
    if (isCorrect) score++;

    console.log(`\nQ${i + 1}: ${questions[i]}`);
    optionsList[i].forEach(option => console.log(option));
    console.log(`Your Answer: ${selected}`);
    console.log(`Correct Answer: ${correct}`);
    console.log(`Result: ${isCorrect ? "Correct" : "Wrong"}`);
  }

  console.log(`\nYour score is: ${score} / ${questions.length}`);

  const view = prompt("\nDo you want to view your script again? (Y/N): ").toUpperCase();
  if (view === "Y") {
    submitScript(); // re-display script
  } else {
    console.log("\nThank you for taking the test.");
  }
}

// Start the application
startApplication();
