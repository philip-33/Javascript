/* // Log to the console a string that says "Hello World!"
//console.log("Hello World!");

//Day 2 - Variables and console.log
//var myName = "Philip";
//var myAge = 39;
//var is the ES5 way. Loosely typed, is mutable
const myName = "Philip";
let myAge = 39;
//this is the ES5 way
//console.log("Hello, " + myName + "! You are " + myAge + " years old.");
//console.log(myAge);

// Log to the console with the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`)

//Day 2 - Date
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; //months start the count at 0
//let year = today.getYear() + 1900; //years start the count at 1900
let year = today.getFullYear();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
//console.log(today);
//console.log("Date: ", day, month, year, " - ", hour, ":", minute, ":", second);
console.log(`${month}/${day}/${year} - ${hour}:${minute}:${second}`);

//day 2 - Math
// gets random number between 0 and 1
//const rand = Math.random();

//give us a random #, multiply by 10. Add 1 to avoid 0, then round down
const rand = Math.floor((Math.random() * 10) + 1);
//console.log(rand);

//simple popup
//alert(rand);

//user clicks cancel or ok
//confirm(rand);

//accepts a user's input
let name = prompt('Please enter your name:');
alert(name);
//this is a test note for day 2 testing */


//day 3
// === strict comp
// == lose comp
// ! not
// !== strict not comp
// != loose not comp
// > GT
// < LT
// >= GT or Eq
// <= LT or Eq
/* 
const userInput = prompt('Please enter a number:');
if (1 == userInput) {
    console.log("I am here");
    //console.log(!true);
} else {
    console.log("In the else")
} */

//day 3 - logical operators
//const userInput = prompt('Please enter a number:');
/* if (userInput/3 == 0 || userInput/5 == 0) {
    console.log('I am here');
} else {
    console.log('In the else');
} */
/* if (userInput > 5 && userInput < 10) {
    console.log('I am here')
} else {
    console.log('In the else');
} */ 
/* if (userInput === '' || userInput === null) {
    console.log('User input NOTHING');
} else if (userInput > 5) {
    console.log('number is > 5');
} else if (userInput < 5) {
    console.log('number is < 5');
} else if (userInput == 5) {
    console.log('number is = 5');
} else {
    console.log(`User didn't enter a number, they entered ${userInput}.`);
} */

//day3 - switch
// const today = new Date().getDay();
// // console.log(today);
// switch (today) {
//     case 0:
//         console.log('Dies Solis');
//         break;
//     case 1:
//         console.log('Monandæg');
//         break;
//     case 2:
//         console.log('Tyr\'s Day');
//         break;
//     case 3:
//         console.log('Wodansday');
//         break;
//     case 4:
//         console.log('Torsdag');
//         break;
//     case 5:
//         console.log('Frigedag');
//         break;
//     case 6:
//         console.log('Lørdag');
//         break;
// }

// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;

// let myNum = 1;
// myNum++; //This incremenr has to be done separately, it can't be done in the console log
// myNum--; //Dexcrement!
// console.log(myNum = myNum + 1); //but this is quite all right
// myNum += 3;
// myNum -= 10; //this mechanic is available for all standard arithmetic operators
// myNum *= 5;
// myNum /= 12;
// console.log(myNum);

// Day 4 - Arrays and Loops
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let red = myArray[0]; //dumb, but a functional example
// console.log(myArray[1]);
// console.log(myArray.length);
// let about = ['Phil', 39, 'Going to LA for labor day', true];
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums));
// adds new to end of array
// nums.push(10, 11, 12);
// adds new to the beginning of the array
// nums.unshift(0, 0.3, 0.5);
// removes last item of array
// nums.pop(); //don't pass anything here
// removes first item of array
// nums.shift();
// cuts out section of the array
// nums.splice(5, 1); // "starting at 5, remove the next 1"
// nums.splice(1, 4); // "starting at 1, remove the next 4"
// makes copy of array then cuts the array
// let slice = nums.slice(3); //take elements after 3, and place them in their own array (thanks to assignment)
// let slice = nums.slice(0, 5); //creates separate array of 1,2,3,4,5
// give index of an item in the array
// let color = myArray.indexOf('Green');
// // console.log(myArray[color]);
// myArray.splice(color, 1);
// let lastIndex = myArray.lastIndexOf('Red'); //returns -1 if it can't find what you are looking for
// reverse array
// console.log(lastIndex);
// console.log(myArray.reverse());
// sort the array
// console.log(myArray.sort().reverse());


// day 4 - LOOPS
// let num = 0;
// while (num < 10) {
//     //console.log(num);
//     num++;
//     console.log(num);
// }

// for (let i = 0; i < 10; i++) {
//     console.log('I have ran');
// }
// console.log(num);

// do {
//     num++;
//     console.log(num);
// } while (num < 10);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

let myFavoriteMovies = [];
let firstFavorite = ['An Affair to Remember', '1957'];
let secondFavorite = ['Rio Bravo', '1959'];
let thirdFavorite = ['The Matrix', '1999'];
myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// console.log(myFavoriteMovies[2][1]);
let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
for (let i = 0; i < myFavoriteMovies.length; i++) {
    movieYears.push(myFavoriteMovies[i][1]);
}
console.log(movieYears);