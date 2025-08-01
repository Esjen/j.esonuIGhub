const prompt = require('prompt-sync')();

let id = prompt("Enter id numbers in ascending order separated by a comma e.g 1,2,3,4: ");
id = id.split(',').map(Number);

let email = prompt("Enter consecutive emails separated by a comma e.g: a@b.com,c@d.com: ");
email = email.split(',');

const numberOfObjects = Math.min(id.length, email.length);

function duplicateEmails() {
    const emailCollection = Array.from({ length: numberOfObjects }, () => ({
        id: 0,
        email: " "
    }));

    if (id.length === email.length && email.length === emailCollection.length) {
        for (let i = 0; i < numberOfObjects; i++) {
            emailCollection[i].id = id[i];
            emailCollection[i].email = email[i];
        }
    } else {
        console.log("Mismatch in lengths of id, email, and collection.");
        return;
    }

    function findDuplicateEmails(collection) {
        const seen = new Set();
        const duplicates = new Set();

        for (const item of collection) {
            if (seen.has(item.email)) {
                duplicates.add(item.email);
            } else {
                seen.add(item.email);
            }
        }

        // Convert to array of objects for console.table
        return [...duplicates].map(email => ({ email }));
    }

    console.log("\n📋 Full Email Collection:");
    console.table(emailCollection);

    const duplicates = findDuplicateEmails(emailCollection);

    console.log("\n⚠️ Duplicate Emails:");
    if (duplicates.length > 0) {
        console.table(duplicates);
    } else {
        console.log("No duplicates found.");
    }
}

duplicateEmails();
