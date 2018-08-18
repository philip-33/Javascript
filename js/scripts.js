let firstName = prompt("Hello! What is your first name?");
let lastName = prompt("Great! Now, what is your last name?");
console.log(`The first name entered is ${firstName}`);
alert(`The last name just entered is ${lastName}.`);
let month = prompt("What is your birth month? (In numbers, please):")
let day = prompt("On what day of that month were you born?:");
let year = prompt("And finally, the year?: ");

birthday = new Date(year, month-1, day);
confirm(`Is ${birthday} your actual birthday?`);
alert(`The best birthday ever is ${birthday}.`);