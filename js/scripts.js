// Write a program that converts temperatures.

// Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. 
// So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
 let scale = prompt(`Do you want the scale in Fahrenheit (f) or Celcius? (c)`, 'f');
 let temp = prompt(`Ok, now what temperature do you want to convert in ${scale}?`, 100);

 function converter(scale, temp) {
    // Employ a function that accepts those two values as arguments: 
    // temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
    if (scale == 'f') {
        temp = ((temp - 32) * (5 / 9));
        scale = 'c';
    } else {
        temp = ((temp * (9/5)) + 32);
        scale = 'f';
    }
 }


// Display the temperature in an h3 with minimal styling.

// From that point on, when the user clicks on the h3, run the function to 
// convert the temperature back and forth between Celcius and Fahrenheit.

// Display the converted temperature in the h3 each time it is changed.