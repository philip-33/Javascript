//FUNCTIONS

// Anonymous functions don't have a "name"
// function(name, age) {
//     return `My name is ${name} and I am ${age} years old.`;
// }; //this whole block is a "Function Definition" and it does nothing until the function is called

//Named Functions
function getTodos(question) {
    todos.push(prompt(question));
}; //function DEFINITION

// getTodos("What is thing 1?");
// //function call site

nameThatBand("Coldplay");

function nameThatBand(bandName) { //function declaration
    return alert(`${bandName} is overrated`);
};

let incrememntor = 0;
let sayHello = function() { //function expression
   if(incrememntor > 5){
       alert("Hello");
       incrememntor++;
       sayHello();
   } else {
       return;
   }

}
// sayHello();

// "FAT" Arrow FUNCTIONS
//() => ();  //POINTLESS but basic form

// () => { //arrow function that takes 0 args and performs data manip
//     incrememntor++;
//     if(incrememntor < 5) {
//         sayHello();
//     }
//     //return is optional here
// };
 
pasta => {  //parens optional with 1 arg
    alert(`My fav pasta is ${pasta}!`);
}

pasta => (pasta.toUpperCase());

//if only returning values, parens are fine.
//if doing work, curly braces are necessary
(car, house) => {  
    return `The returned info is ${data};`
};

//TRYITOUT - calculate a dogs age

//accept one argument (age of the dog in years)

function dogAgeInHumanYears() {
    var dogAge = NaN;
    while (isNaN(dogAge)) {
        dogAge = parseInt(prompt("Enter the age of the dog in numbers!"));
    }
    return (dogAge * 7);
};

alert(dogAgeInHumanYears());
//return the age of the dog (1:7)

//alert the answer

//check for edge cases (not a number?)

//TRYITOUT 2
parseInt();
console.log("phil".toUpperCase());