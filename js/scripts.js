// // DAY 10 - Timers / localStorage / sessionStorage / strict / iife

// // var timer,
// //     interval;

// // function delayAlert(duration) {
// //     duration *= 1000;
// //     timer = setTimeout(triggerAlert, duration);
// // }

// // function triggerAlert() {
// //     alert("Timer Complete");
// // }

// // function cancelAlert() {
// //     clearTimeout(timer);
// //     alert("Timer cancelled");
// // }

// // function intervalAlert(duration) {
// //     duration *= 1000;
// //     interval = setInterval(triggerAlert, duration);
// // }

// // function cancelInterval() {
// //     clearInterval(interval);
// //     alert("Interval cancelled");
// // }

// // document.getElementById("timer-start").addEventListener("click", function () {  //listens for click on timer start  
// //     var time = prompt("How long to wait?");         //asks user for time to wait! so great!
// //     delayAlert(time); //calls function to start alert
// // });

// // document.getElementById("cancel-timer").addEventListener("click", function () {
// //     cancelAlert(); //calls function to cancel the alert
// // });

// // document.getElementById("interval-start").addEventListener("click", function () {
// //     var time = prompt("How long to wait?");
// //     intervalAlert(time);
// // });

// // document.getElementById("cancel-interval").addEventListener("click", function() {
// //     cancelInterval();
// // })

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};
//     return i;
// }

// function halfDay(i) {
//     if (i > 12) {i -= 12};
//     return i;
// }

// const clock = document.getElementById("clock");

// function displayClock() {
//     setInterval(function () {           //inline(?) function to set the current time each time the clock is redrawn
//         var today = new Date();
//         var hour = today.getHours();
//         var min = today.getMinutes();
//         var sec = today.getSeconds();
//         min = checkTime(min);
//         sec = checkTime(sec);
//         hour = halfDay(hour);   //converts 24-hour format to 12-hour
//         hour = checkTime(hour);
//         clock.textContent = `${hour}:${min}:${sec}`
//     }, 1000);
// }

// displayClock(); //this function is only called one time, but thanks to the "setInterval" function used to start the clock, it updates every second!

// function storeUser(username, password) {
//     window.localStorage.setItem('user', username);
// }

// function getUser() {
//     return window.localStorage.getItem('user');
// }

// document.getElementById("get-username").addEventListener("click", function () {
//     var usr = prompt("What is your username?");
//     storeUser(usr);
// });

// document.getElementById("displayUsername").addEventListener("click", function () {
//     let user = document.getElementById("currentUser");
//     user.textContent = getUser();
// });

// // iife - Immediately Invoked Function Expression
// // allows creating anonymous function that are called immediately

// var number = 1;
// var getNumber = (function(x) {
//     return function () {
//         alert(x);
//     };
// }(number));
// number = 2; //even with this and calling the function after, it still returns 1.
// //SCOOOPING oooOOOOOOOOOOOOOOoooooooooooooooooooooo.......
// getNumber();

// Day 11 - Fetch / objects (Advanced) / JS classes /