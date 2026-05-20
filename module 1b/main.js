
/* 
Lesson 12: Strings VS. Numbers
*/
let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints
console.log(totalPoints)

/* 
Challenge:
console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")
*/

// Lesson 13: Esacape!

let wish = "I'd love to see the show \"The Lion King\" "
console.log(wish)


/* 
Lesson 14: Render a welcome message

Challenge:
1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
3. Render the welcome message using welcomeEl.innerText
*/

let welcomeEl = document.getElementById("welcome-el")

let myName = "Mallam Imran"
let greetings = "Welcome back"

welcomeEl.innerText = greetings + ", "+ myName

/* 
Lesson 15: Improve the message with string concatenation
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BEOLW HERE
HINT: count = count + 1
*/

welcomeEl.innerText = welcomeEl.innerText + "👋"


/* 
Challenge:
1. Grab a welcome-el element and store it in a variable called welcomeEl
2. Create two variables (userName & notification) that contains your name and the message we want to render on the page i.e "You got a new notification"
3. listen for clicks on the button when it clicked
4. Render the notification message using welcomeEl.innerText
*/

