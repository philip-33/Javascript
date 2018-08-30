function squares() { //function to return square of a number
    let inputNum = NaN; //scoped variable
    while (isNaN(inputNum)) { // QC for scoped variable
        inputNum = parseInt(prompt(`How about a number, mate?`, '9')); //prompt
        if (isNaN(inputNum)) { alert(NaN); } //requirement to alert NaN
    }
    return inputNum * inputNum; // return square
};

alert(squares());


// console.log(inputSentence.charAt(0));  //core logic tests. All good!
// console.log(inputSentence.charAt(0).toUpperCase());
// console.log(inputSentence.charAt(inputSentence.length-1));

function toSentence(inputString) { //function to turn input into sentence case
    let firstLetter = inputString.slice(0,1); //pull the first letter off the string
    firstLetter = firstLetter.toUpperCase(); //uppercase that first letter, regardless of actual case
    inputString = inputString.slice(1); //cut the first letter off the rest of the string
    inputString = firstLetter + inputString; //attach the uppercase letter to the modded string

    if ((inputString.charAt(inputString.length-1)) != '.') { //If statement to check for a '.'
        inputString = inputString + '.'; //add a '.' if it's not already there
    }
    return inputString; //throw the new string back
};
// get a string and pass it to the function
let inputString = prompt('Please enter a sentence.', 'jackdaws love my big sphinx of quartz');
alert(toSentence(inputString));