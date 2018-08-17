// Log to the console a string that says "Hello World!"
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
//this is a test note for day 2 testing