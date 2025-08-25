const prompt = require("prompt-sync")();
const fs = require("fs");

const members = JSON.parse(fs.readFileSync("members.json", "utf-8"));

function login() {
    const name = prompt("Enter your name: ");
    const password = prompt("Enter your password: ");

    const member = members.find(
        m => m.name.toLowerCase() === name.toLowerCase() && m.password === password
    );

    if (!member) {
        console.log("❌ Invalid credentials. Access denied.");
        process.exit(1);
    }

    console.log(`✅ Welcome ${member.name}!`);
    return member;
}

function chatbot(member) {
    console.log("\n🤖 Backend Dev Chatbot at your service.");
    while (true) {
        const input = prompt("Ask for help (type 'exit' to quit): ");

        if (input.toLowerCase() === "exit") {
            console.log("👋 Goodbye!");
            break;
        }

        if (input.toLowerCase().includes("project")) {
            console.log("📂 Projects you can work on:");
            member.projects.forEach((p, i) => console.log(`${i + 1}. ${p}`));
        } else {
            console.log("🤔 I can only help you find a project. Try asking: 'What project can I work on?'");
        }
    }
}

const member = login();
chatbot(member);
