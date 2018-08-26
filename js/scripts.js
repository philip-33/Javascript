<<<<<<< HEAD
//prompt for name
let userName = prompt("Hello! What is your name?");

//start a structure that will repeat until the user enters an allowed color
let finished = 0;
while (finished != 1) {
    //ask for favorite color
    let favColor = prompt("Alrighty, from Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, and Grey, which is your favorite?");
    //display text for each acceptable color
    switch (favColor) {
        case 'Red':
            alert(`Aha! An excellent choice, ${userName}, the colors of fire and blood.`);
            finished = 1;
            break;
        case 'Orange':
            alert(`Interesting choice, ${userName}. This color is seen in fruits whose names do not rhyme with anything else.`);
            finished = 1;
            break;
        case 'Yellow':
            alert(`A wonderful color. This color represents sunshine and warmth worldwide. Is it the same for you, ${userName}?`);
            finished = 1;
            break;
        case 'Green':
            alert(`Is this really your favorite? This is the color of nature. Is that why you like it, ${userName}?`);
            finished = 1;
            break;
        case 'Blue':
            alert(`This is my favorite color too! We're a lot alike, except I'm a program and youre ${userName}.`);
            finished = 1;
            break;
        case 'Pink':
            alert(`Like it or not, ${userName}, this is a girly color these days. It used to be considered very masculine, though.`);
            finished = 1;
            break;
        case 'Purple':
            alert(`Feeling fancy, ${userName}? This, without a doubt, is the color of royalty and Jedi Master Mace Windu's lightsaber.`);
            finished = 1;
            break;
        case 'Black':
            alert(`Darkness and the unknown are characterized by this color. You sure are edgy, ${userName}.`);
            finished = 1;
            break;
        case 'White':
            alert(`Purity, and yet also the mixture of all colors together if we're talking about light. Are you as confused as I am, ${userName}?`);
            finished = 1;
            break;
        case 'Gray':
            alert(`A cloudy day, and when things aren't black or white anymore. Do either of those things sound good to you ${userName}?`);
            finished = 1;
            break;                                    
        default:
            alert(`Not that I don't believe you, but this is a small program, ${userName}. Work with me and pick one of the colors I provided.`);
    }

}
=======
// prompt for an array of stuff to do this weekend
let taskOne = prompt("What is one task to do this weekend?");
let taskTwo = prompt("What is a second task to finish this weekend?");
let taskThree = prompt("What is a third and final task to complete this weekend?");
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
>>>>>>> takehome-day4
