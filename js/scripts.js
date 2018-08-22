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