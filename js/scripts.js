// prompt for an array of stuff to do this weekend
let taskOne = prompt("What is one task to do this weekend?", "Eat Cheese."); //second item is the default value if nothing is entered
let taskTwo = prompt("What is a second task to finish this weekend?", "Dismantle the patriarchy.");
let taskThree = prompt("What is a third and final task to complete this weekend?", "Wax my vegetables.");
let myTasks = [taskOne, taskTwo, taskThree];
console.log(myTasks);
console.log(myTasks.length)
let i = 0;

// for loop to change array items to include length in days
for (i = 0; i <= myTasks.length-1; i++) {
    //get the name of the task into a scoped placeholder, prompt for the length of the task
    let task = myTasks[i];
    let howLong = parseInt(prompt(`How may days will it take to complete: ${task}?`));
    console.log(task);
    console.log(howLong);
    //convert the 1-dimensional array to a 2-dimensional array that includes the length of the task
    myTasks[i] = [task, howLong];
    console.log(myTasks[i]);
}

//while loop to find longest item
let longestTaskIndex = 0;
i = 0;
while (i <= myTasks.length-1) {
    if (myTasks[i][1] > longestTaskIndex) {
        longestTaskIndex = myTasks[i][1];
    }
    i++;
    console.log(longestTaskIndex);
}

//do-while loop to add 'easy-peasy' to all tasks except the longest
i = 0;
do {
    if (myTasks[i][1] < longestTaskIndex) {
        myTasks[i][0] = myTasks[i][0] + " : easy-peasy";
    }
    console.log(myTasks[i][0]);
    console.log(myTasks[i][1]);
    i++
} while (i <= myTasks.length-1);

console.log(`longest task is ${longestTaskIndex}`);
//alert all tasks that have 'easy-peasy'
// for (i = 0; myTasks[i][1] < longestTaskIndex, i++;) {
//     console.log(`longest task index is ${longestTaskIndex}`);
//     console.log(i);
//     alert(`TODO: ${myTasks[i][0]} will take ${myTasks[i][1]} day(s) to complete.`);
// }

if (myTasks[0][1] < 2) {alert(`${myTasks[0][0]}`);}
if (myTasks[1][1] < 2) {alert(`${myTasks[1][0]}`);}
if (myTasks[2][1] < 2) {alert(`${myTasks[2][0]}`);}