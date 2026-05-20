
/* 
Javascript Foundamentals:

CURRICULUM OVERVIEW
1. Setting up Javascript file
2. Write your first Javascript variable
3. Basic mathematical operations
4. Reassigning and incrementing
5. The onclick event listener
*/


/* 
Lesson2: Write your first Javascript variable

let count = 0
console.log(count)

Challenge: 
1. Create a variable, myAge, and set its value to your age
2. Log the myAge variable to the console
*/

/* 
Lesson 3: Basic mathematical operations

let firstBatch = 5;
let secondBatch = 6

let count = firstBatch + secondBatch
console.log(count)

Challenge:
1. Create two variables, myAge and humanDogRatio
2. Multiply the two together and store the result in myDogAge
3. Log myDogAge in the console.

let myAge = 35
let humaDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)
*/

/* 
Lesson 4: Writing your first string variable
*/

let username = "per"

// Create a variable, message, that stores the string: "You have three new notifications"
let message = "You have three new notifications"

// console.log(message + ", " + username + "!")

// Create a variable, messageToUser that contains the message we have logged
let messageToUser = message + ", " + username + "!"
console.log(messageToUser)

// String concatination
/* 
Task:
1. Create two variables name and greeting, The name variable should store your name, and the greeting should store e.g "Hi, my name is "
2. Create a third variable, myGreeting, that concatenates the two strings.
3. Log myGreeting to the console.
*/

let name = "Herald"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)



//Lesson5: Manipulating what is in the DOM by change its content from 0 to 5.

document.getElementById('count-el').innerHTML = 20

//Lesson6: Reassigning and Incrementing

// let count = 5;
// count = 100
// console.log(count)

// count = count + 1;
// console.log(count)

/* 
Challenge1:
1. Create a variable, bonusPoint. Initialize it as 50. Increase it by 50.
2. Decrese it down to 25, and then finally increase it to 70.
3. Console.log the value after each step.
*/

// Solution

let bonusPoint;
bonusPoint = 50;
console.log(bonusPoint)

bonusPoint += 50
console.log(bonusPoint);

bonusPoint -= 75
console.log(bonusPoint)

bonusPoint += 45;
console.log(bonusPoint)


/* 
Lesson: Render a welcome message

Challenge:
1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
3. Render the welcome message using welcomeEl.innerText
*/

/* 
challenge
1. Create a function that logs out the message "The button was clicked"
2. listen for clicks on the button
*/
function increment(){
    console.log('the button was clicked')
}

/* 
Lesson8: Using function to write less code.
*/

// setting up the race 🏎️🏎️🏎️🏎️🏎️

function countdown(){
   console.log(5)
   console.log(4)
   console.log(3)
   console.log(2)
   console.log(1)
}

// countdown()

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// Go !
// Players are running the race
// Race is finished

// Get ready for a new race 🏎️🏎️🏎️🏎️🏎️

// countdown()


// Lesson8: Write your first function
/* 
Task1: 
1. Create a function (You decide the name) that logs 
out the number 45 to the console.
2. Call/invoke the function.
*/

/* 
Task2:
1. Create a function that logs out the sum of all the laps item
*/
let lap1 = 34;
let lap2 = 34;
let lap3 = 33

function laps() {
    let totalLaps = lap1 + lap2 + lap3
    console.log(totalLaps)
}

laps()



// Lesson 9: function that increments

// let lapsCompleted = 0

/* 
Task:
1. Write a function that increments the lapsCompleted variable with one
2. Run it three times
*/

//  console.log(lapsCompleted)


let lapsCompleted = 0
/* 
Task:
1. Write a function that increments the lapsCompleted variable with one
2. Run it three times
*/
function incrementLaps() {
    lapsCompleted = lapsCompleted + 1
}

incrementLaps()
incrementLaps()
incrementLaps()

//  console.log(lapsCompleted)


// Lesson 10 : Increment on click and display the count with innerText
/* 
1. Initialize the the count as 0
2. listen for clicks on the increment button
3. Increment the count variable when the button is clicked
4. change the count-el in the HTML to reflect the new count
*/
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let countNumber = 0;

function increment() {
    countNumber += 1
    // console.log(countNumber)
    // countEl.innerHTML = countNumber
    countEl.textContent = countNumber
}
/* 
Lesson 11: Create a save button
Create a function, save(), which logs out the countNUmber when it's called.
*/

function save() {
    // console.log(countNumber)
    let saveStr = countNumber + " - "
    saveEl.innerText += saveStr
    // saveEl.textContent += countStr
    // countEl.textContent = 0
    //  countNumber = 0
    
}
// save()

/* 
Lesson 12: Create a paragraph with an id of save-el
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dash separator i.e "12-15-"  
3. Render the variable in the saveEL using innterText
NB: make sure to not delete the existing content of the paragraph
*/


/* 
Lesson 13: Debugging Online
Google: innertext alternative mdn
*/


/* 
Lesson 13: Set the count to 0
*/

/* 
Recap

1. script tag
2. variables
3. numbers
4. strings
5. console.log()
6. functions
7. The DOM
8. getElementById()
9. innerText
10. textContent
*/

/* 
Inside project confusion is, error is and growth also there.
1. Decision make apps: When life confuse you and u don't know if u are to sleep, jim, or relax. Build app that will ask question and use if else to decide the answer. it teaches logic, condition and decision flow.
2. Daily Wahala traker: wetin annoyed u today and who caused it and how u react. store it and loop throuh it and print summary. u are learning array and list. Loops and data storage mind set
3. Fake ATM simulation: check balance, withdraw and deposite. No overdaraft, wrong pin and deny access. backend thinking
*/