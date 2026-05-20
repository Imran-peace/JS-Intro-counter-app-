
// 1.Lesson 1: Variable practice
/*
Challenge 1
1. Create two variables, firstName and lastName
2. Concatenate the two variables into a third variable called fullName
3. log fullName to the console
*/

// let firstName = "Per"
// let lastName = "Burgen"

// let fullName = firstName + " " + lastName
// console.log(fullName)


//2. Lesson 2: Concatenate two strings in a function

let name = "linda";
let greetings = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

// function greetLinda(){
//     console.log(greetings + ", " + name + "!")
// }

// greetLinda()

// 3. Lesson 3: Incrementing and Decrementing

/* 
Challenge
1. Create two functions add3Points() and remove1Point(), and have them
2. add/remove points to/from the myPoints variable
3. Call the function to that the line below logs out 10  
*/
let myPoints = 3

// function add3Points(){
//    myPoints += 3
// //    console.log(myPoints)
// }


// function remove1Point(){
//     myPoints -= 1
//     // console.log(myPoints)
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)


// Lesson 4: Strings and Numbers
// Try to predict what each of the lines will log out
// console.log("2" + 2) //22
// console.log(11 + 7)  //18
// console.log(6 + "5") //65
// console.log("My points: " + 5 + 9)  //My points: 59
// console.log(2 + 2)  //4
// console.log("11" + "14")  //1114


//Lesson 5: Render an error message
/* 
Challenge:
1. When the user clicks the purchase button, render out "Something went wrong, please try again" in the paragraph that has the id="error".
*/

let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

let message = "Something went wrong, please try again"
function purchase(){
    // console.log("button clicked")
     errorParagraph.textContent = message
}
