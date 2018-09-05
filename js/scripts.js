// Write a program that converts temperatures.
let data = ['f', 100];
// Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. 
// So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius

 function converter(scale, temp) {
    let data = [];
    data[0] = prompt(`Do you want the scale in Fahrenheit (f) or Celcius? (c)`, 'f');
    data[1] = prompt(`Ok, now what temperature do you want to convert in ${scale}?`, 100);
    // Employ a function that accepts those two values as arguments: 
    // temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
    if (data[0] == 'f') {
        data[1] = ((data[1] - 32) * (5 / 9));
        data[0] = 'c';
    } else {
        data[1] = ((data[1] * (9/5)) + 32);
        data[0] = 'f';
    }
    return data;
 }


let tempDiv = document.querySelector(".tempDisplay");

tempDiv.addEventListener(
    "click",
    e => {
        tempArr = [];
        tempArr = converter(data[0], data[1]);
        console.log(tempArr);
        tempDiv.textContent = `The temp is ${tempArr[1]} ${tempArr[0]}.`;
    }
)
// Display the temperature in an h3 with minimal styling.

// From that point on, when the user clicks on the h3, run the function to 
// convert the temperature back and forth between Celcius and Fahrenheit.

// Display the converted temperature in the h3 each time it is changed.