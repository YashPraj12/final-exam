console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number


//yash prajapati
//student id - 200528708


// Step 2: Add the 3 people's names to the array

const myarray1 = ["Yash", "nash", "pash", "shah", "nassh", "oash", "wash"];
// Step 4: Remove the first array item from the array

myarray1.shift();
// Step 5 Remove the second array item from the array

myarray1.splice(1,1);
// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable

let result=myarray1.filter(function (item){
    return item[0]!="J"
});
// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const button = document.querySelector('button')

button.addEventListener("click",function(){
console.log("call was clicked");
alert("call to action was clicked")
});