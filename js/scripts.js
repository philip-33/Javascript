// DAY 10 - Timers / localStorage / sessionStorage / strict / iife

var timer;

function delayAlert() {
    timer = setTimeout(triggerAlert, 3000);
}

function triggerAlert() {
    alert("Timer Complete");
}

function cancelAlert() {
    clearTimeout(timer);
    alert("Timer cancelled");
}

document.getElementById("timer-start").addEventListener("click", function () {  //listens for click on timer start  
    delayAlert(); //calls function to start alert
});

document.getElementById("cancel-timer").addEventListener("click", function () {
    cancelAlert(); //calls function to cancel the alert
});