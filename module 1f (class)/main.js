
// Reassigning and Incrementing

let name = 'Fauziyyah'
// console.log(name)
name = 'Zahrah'
// console.log(name)

// DOM Manipulation

// document.getElementById('counter').innerHTML = 10;




// Lesson8: Using function to write less code.
// Invoke or call

// setting up the race 🏎️🏎️🏎️🏎️🏎️
 function race() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
 }

// race()

// Go !
// Players are running the race
// Race is finished

// Get ready for a new race 🏎️🏎️🏎️🏎️🏎️
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// race()



// Get ready for a new race 🏎️🏎️🏎️🏎️🏎️
// race()


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



let lapsCompleted = 0
/* 
Task:
1. Write a function that increments the lapsCompleted variable with one
2. Run it three times
*/

function lapsIncrement() {
    console.log('someone clicked me')
}


// Pseudo code
/* 
1. Initialize the numberCount as 0
2. listen for clicks on the increment button
3. Increment the numberCount variable when the button is clicked
4. change the count-el in the HTML to reflect the new count
*/
let countEl = document.getElementById("counter")
let saveEl = document.getElementById("save-el")

let numberCount = 0;

function increment(){
   numberCount = numberCount + 1
   countEl.textContent = numberCount
}


// Pseudo code
/* 
1. Initialize the count as 100
2. listen for clicks on the increment button
3. decrement the count variable when the button is clicked by 4

4. change the count-el in the HTML to reflect the new count
*/


/* 
 Lesson 11: Create a save button
Create a function, save(), which logs out the countNUmber when it's called.
*/

function save(){
   // console.log(numberCount)
  let saveStr =  numberCount + " - "
//   saveEl.innerText += saveStr
  saveEl.textContent += saveStr
  
   countEl.textContent = 0
   numberCount = 0
}

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

