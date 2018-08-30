let pTags = document.getElementsByTagName("p"); 
//Returns an array

let specialPTag = document.getElementsByClassName("my-spectial-p-tag"); 
//Returns an array

let thisPTag = document.getElementById("this_p_tag"); 
//Returns 1 DOM node

let h1Tags = document.querySelectorAll("h1");
//Returns all h1 tags

let queryPTags = document.querySelectorAll(".my-special-p-tag");
//this searches ALL tags/classes/IDs, and returns whatever matches the string, in this case the . makes it look for a class with the name

let idPTags = document.querySelectorAll("#this_p_tag");
//this is another example of the querySelectorAll that is set to use IDs because of the #

document.querySelector(".text-danger");

function queryMyDOM(elementType, tag) {
    let tagArray;
    switch(elementType) {
        case "getElementsByTagName": tagArray = document.getElementsByTagName(tag);
        break;
        case "getElementsByClassName": tagArray = document.getElementsByClassName(tag);
        break;
        case "getElementById": tagArray = document.getElementById(tag);
        break;
        default: result = "sorry, that's not valid.";
    }
    console.log(tagArray);
    return tagArray;
}

console.log(queryMyDOM("getElementsByTagName", "h1"));

let redDiv = document.querySelector(".red-background");

//this block changes the color of the red background div to blue while the mouse is over it
//examine for proper code flow, this is how it looks when professionals do it (except for the inline style tag...)
let count = 0;
redDiv.addEventListener(
    "mouseover", 
    e => {
        if(count < 10) { //fun little count that requires 10 mouseovers before changing the background color
            count++;
        } else {
            redDiv.style.backgroundColor = "blue";
            redDiv.addEventListener("mouseleave", e => {
                redDiv.style.backgroundColor = "red";
            })
        }
    }
);

let input = document.querySelector("#my_input");

input.addEventListener(
    "keydown", 
    e => {
        console.log(e.keyCode);
    }
);