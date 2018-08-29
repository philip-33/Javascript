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
    console.log(inputString);
    console.log(inputSentence.charAt(0).toUpperCase()); //uppercase the first letter
    // console.log(capFirstLetter);
    // console.log(inputString);
    // if ((inputString.charAt(inputString.length-1)) != '.') {
    //     inputString.push('.');
    // }
    // console.log(inputString);
    // return inputString;
};

let inputString = prompt('Please enter a sentence.', 'jackdaws love my big sphinx of quartz');
alert(toSentence(inputString));