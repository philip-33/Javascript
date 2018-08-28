function squares() { //function to return square of a number
    let inputNum = NaN; //scoped variable
    while (isNaN(inputNum)) { // QC for scoped variable
        inputNum = parseInt(prompt(`How about a number, mate?`, '9')); //prompt
        if (isNaN(inputNum)) { alert(NaN); } //requirement to alert NaN
    }
    return inputNum * inputNum; // return square
};

//
alert(squares());

let inputSentence = prompt('Please enter a sentence.', 'jackdaws love my big sphinx of quartz');
function toSentence(inputSentence) { //function to turn input into sentence case
    inputSentence[0].toUppercase(); //uppercase the first letter
    if ((inputSentence[inputSentence.length-1]) != '.') {
        inputSentence.push('.');
    }
    console.log(inputSentence);
    return inputSentence;
}

alert(toSentence());