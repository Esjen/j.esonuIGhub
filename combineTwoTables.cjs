const prompt = require('prompt-sync')();

const count = Number(prompt('Enter the number of rows you want in your table: '));

let lastName = prompt("Enter the number of last names separated by a comma e.g : (john,james,gwen...): ");
lastName = lastName.split(',');

let firstName = prompt("Enter a list of first names separated by a comma e.g(hyde,finn,matt). Note: if you want to leave a field null write null in the list: ");
firstName = firstName.split(',');

let city = prompt("Enter the number of cities that you want in your table: (london,tokyo,arizona). Note: if you want to leave a field null write null in the list: ");
city = city.split(',');

let state = prompt("Enter the states that you want to have in your table e.g (arizona,USA,Abia). Note: if you want to leave a field null write null in the list: ");
state = state.split(',');

function checkValidity () {
    if (
        firstName.length !== count || 
        lastName.length !== count || 
        city.length !== count || 
        state.length !== count
    ) {
        console.log('❌ The number of first names, last names, cities, and states must be equal to the number of rows you selected.');
        return;
    } else {
        combineTwoTables();
    }
}

function combineTwoTables() {
    const personTable = [];
    for (let i = 0; i < count; i++) {
        personTable.push({
            personId: i + 1,
            lastName: lastName[i] ? lastName[i].toUpperCase() : null,
            firstName: firstName[i] ? firstName[i].toUpperCase() : null
        });
    }

    const addressTable = [];
    for (let j = 0; j < count; j++) {
        addressTable.push({
            addressId: j + 1,
            personId: j + 1,
            city: city[j] ? city[j].toUpperCase() : null,
            state: state[j] ? state[j].toUpperCase() : null
        });
    }

    const outputTable = [...personTable, ...addressTable];

    const outputTables = outputTable.map(({ personId, addressId, ...rest }) => rest);
    console.table(outputTables);

}

checkValidity();
