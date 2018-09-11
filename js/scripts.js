// const string = new String(`This a bigol' string.`);

// console.log(Object.getPrototypeOf(string)); //this returns the actual structure of the object

var myObj = {
    first_name: "Test", 
    last_name: "Object", 
    full_name: "Test Object",
    some_other_obj: {
        something_else: "ThingElse"
    }
};

console.log(myObj);
console.log(myObj.hasOwnProperty('lastName')); //returns boolean for property check
console.log(myObj.last_name, myObj['last_name'], myObj.some_other_obj.something_else); //different ways of picking out values, even sub-objects

let newBool = new Boolean('False'),
    newString = new String('Verdant');
    newObj = new Object({first_job: 'Security', current_job: 'Helpdesk'});

console.log(newBool, newString, newObj);