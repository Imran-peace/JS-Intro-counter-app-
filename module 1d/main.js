
let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

/* 
Challenge:
1. Create four functions: add(), subtract(), divide(), multiply()
2. Call the correct funtion when the user clicks on one of the buttons 
3. Perform the given calculation using num1 and num2
4. Render the result of the calculation in the paragraph with id="sum-el"

E.g . If the user clicks on the "plus" button, you should render "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
*/
let sumEl = document.getElementById("sum-el")
function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}