


// Lesson 10 : Increment on click and display the count with innerText
/* 
1. Initialize the the count as 0
2. listen for clicks on the increment button
3. Increment the count variable when the increment button is clicked
4.  Also decrement the count variable when the decrement button is clicked
4. change the count-el in the HTML to reflect the new count
*/
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let countNumber = 0;

function increment() {
    countNumber += 1
    countEl.textContent = countNumber
}
function decrement() {
    countNumber -= 1
    countEl.textContent = countNumber
}
/* 
Lesson 11: Create a save button
Create a function, save(), which logs out the countNUmber when it's called.
*/

function save() {
    let saveStr = countNumber + " - "
    saveEl.textContent += saveStr
    countEl.textContent = 0
     countNumber = 0
    
}






/* 
Fact:
Inside project, that is where confusion is, error is and growth also there.
1. Decision making apps: When life confuse you and u don't know if u are to sleep, jim, or relax. Build app that will ask question and use if else to decide the answer. it teaches logic, condition and decision flow.
2. Daily Wahala traker: wetin annoyed u today and who caused it and how u react. store it and loop throuh it and print summary. u are learning array and list. Loops and data storage mindset
3. Fake ATM simulation: check balance, withdraw and deposite. No overdraft, wrong pin and deny access. backend thinking
*/