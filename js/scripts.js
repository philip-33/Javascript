// msContentScript.appendChild(myBtn);

// let myImg = document.createElement("img");
// myImg.setAttribute("alt", "Add attribute from JS");
// myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg");
// msContentScript.appendChild(myImg);


//generate page using only javascript
const script = document.querySelector("script");
const body = document.querySelector("body");

// let newP = document.createElement("p");
// let newH1 = document.createElement("h1");
// let newFooter = document.createElement("footer");
// let newHeader = document.createElement("header");
// let newUl = document.createElement("ul");
// let newDiv = document.createElement("div");

// function createLi(classArray, linkText) {
//     let newLink = document.createElement("li");
//     let newA = document.createElement("a");
//     newA.setAttribute("href", "#");
//     newA.textContent = linkText;
//     newLink.appendChild(newA);
//     for (let i = 0; i < classArray.length; i++) {
//         newLink.classList.add(classArray[i]);
//     }
//     newUl.appendChild(newLink);
// }

// createLi(["pull-left"], "Home");
// createLi(["pull-right"], "Contact");
// createLi(["pull-right"], "About");

// newUl.classList.add("nav", "nav-pills");
// newHeader.appendChild(newUl);
// body.insertBefore(newHeader, script);

// function createTextElement(elementType, text) {
//     let newElement = document.createElement(elementType);
//     newElement.textContent = text;
//     return newElement;
    
//     console.log("createTextElement", this);
// }

// newDiv.classList.add("text-center");

// let h1 = createTextElement("h1", "Hello World");
// let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nulla ultrices, sollicitudin sapien at, viverra turpis. Suspendisse auctor elementum eros. Donec vel tempus neque. Maecenas porta molestie felis. In dictum, purus et venenatis accumsan, nibh odio egestas dolor, ut elementum nisi dui a sapien. Donec sed felis dolor. Pellentesque leo risus, pharetra in purus eu, condimentum tincidunt velit. Maecenas pretium, tellus at lacinia bibendum, augue nisi semper odio, quis viverra tortor leo et lacus. Fusce quis faucibus metus. Maecenas semper condimentum est in tincidunt. Fusce pharetra bibendum suscipit. Proin nibh nunc, feugiat sit amet augue dignissim, feugiat ornare orci.");

// newDiv.appendChild(h1);
// newDiv.appendChild(p);
// body.insertBefore(newDiv, script);

// let newFooterLink = document.createElement("a");
// newFooterLink.textContent = "Check me out.";
// newFooterLink.setAttribute("href", "https://www.google.com");
// newFooterLink.setAttribute("target", "_blank");
// newFooterLink.classList.add("text-center", "footer");
// newFooter.appendChild(newFooterLink);
// body.insertBefore(newFooter, script);

// function myFunc() {
//     let me = {
//         firstName: "First",
//         lastName: "Last",
//         id: 1234,
//         fullName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// }

// function functionName() {
//     console.log(this.myFunc);
// }
// console.log(functionName());
// // console.log(this.myFunc);
// myFunc();

//FizzBuzz function including generating on the page 
function fizzBuzz(count, val1, val2) {
    const val3 = val1 * val2;
    let list = document.createElement("ol"); //starts ordered list element
    //all the following cases generate additional <li> tags and populate it with the approrpriate tag
    for (var i = 1; i <= count; i++) {
        let res = document.createElement("li");
        if (i % val3 == 0) {
            res.textContent = "FizzBuzz";
            list.appendChild(res);
        } else if (i % val1 == 0) {
            res.textContent = "Fizz";
            list.appendChild(res);
        } else if (i % val2 == 0) {
            res.textContent = "Buzz";
            list.appendChild(res);
        } else {
            res.textContent = i;
            list.appendChild(res);
        }
    }
    body.insertBefore(list, script);
}

// fizzBuzz(1800, 24, 12);

// let messageForm = document.forms.messageForm; //both of these lines use the "name" of the element to get the data
// let message = messageForm["msg"]; // can also be:    let message = messageForm.msg
// console.log(messageForm);
// console.log(message);

messageForm.addEventListener("submit", e => {
    e.preventDefault(); //  This line stops the default action from happening. In this case, submitting data to a server
    let list = document.getElementById("list");     // dom variables at the top
    let newMessage = document.createElement("Li");
    let message = e.target["msg"].value;            // followed by event variables
    newMessage.textContent = message;
    list.insertBefore(newMessage, list.childNodes[0]);
    messageForm.reset();
})

function generateList() {
    let fullList = [
        'First',
        'Second',
        'Third',
        'Fourth'
    ];
    let list = document.getElementById("list");
    for (var i = 0; i < fullList.length; i++) {
        let msg = document.createElement("li");
        msg.textContent = fullList[i];
        msg.id = `item-${i + 1}`;
        list.appendChild(msg);
    }
}

generateList();

// DON'T USE ONCLICK WITH PLAIN JAVASCRIPT
// function submitForm() {
//     console.log(document.getElementById("message").value);
// }

// var name = "Phil";
// var age = 39;
// var currentClass = "JavaScript";
// console.log(this.currentClass);

// function aboutMe() {
//     let me = {
//         firstName: 'Phil',
//         lastName: 'M.',
//         age: 39,
//         currentClass: "JavaScript",
//         fullName: function() {     //this has to be a function to corral the scope, it turns the variables above into "parent" scope
//             return `${this.firstName} ${this.lastName}`
//         }
//     }
//     console.log(me.fullName());
// }
// aboutMe();

