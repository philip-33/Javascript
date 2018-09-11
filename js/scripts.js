// const string = new String(`This a bigol' string.`);

// console.log(Object.getPrototypeOf(string)); //this returns the actual structure of the object

// var myObj = {
//     first_name: "Test", 
//     last_name: "Object", 
//     full_name: "Test Object",
//     some_other_obj: {
//         something_else: "ThingElse"
//     }
// };

// console.log(myObj);
// console.log(myObj.hasOwnProperty('lastName')); //returns boolean for property check
// console.log(myObj.last_name, myObj['last_name'], myObj.some_other_obj.something_else); //different ways of picking out values, even sub-objects

// let newBool = new Boolean('False'),
//     newString = new String('Verdant');
//     newObj = new Object({first_job: 'Security', current_job: 'Helpdesk'});

// console.log(newBool, newString, newObj);

const user = {
    email: "noern@mailinator.com",
    user_name: "noern",
    zip_code: 91654,

};

function User(email, userName, zipCode) { //when creating with constructors, CAPITALIZE the first letter of the function 
    this.email = email; //this keyword is a locally scoped handle to be used to grab data, especially useful for objects           
    this.user_name = userName;
    this.zip_code = zipCode;
    this.getUsername = function() {
        console.log(this.user_name);
    };
    this.isValidUser = function() {
        if(this.email && this.user_name && this.zip_code) return true;
        else return false;
    }
}

let email = prompt('What is your email address?'), //this block reserves variable names
    userName = prompt('What is your username?'),
    zipCode = prompt('What is your zip code?');

let newUser = new User(email, userName, zipCode);

newUser.getUsername();

console.log(`This user is valid: ${newUser.isValidUser()}`);