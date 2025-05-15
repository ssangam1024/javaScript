Day 11

Advanced Functions

What Are Functions?
Functions are blocks of code that we can reuse.But in JavaScript, functions are also values, which means:
* We can store a function in a variable.
* We can store a function as a value in an object.
* We can pass a function as an argument to another function.
* We can return a function from another function.
* In short: anything we can do with values, we can also do with functions.

Types of values 
Some common data types in JavaScript are 
 numbers, strings , booleans, and functions (functions themselves are values too)

Anonymous Functions
An anonymous function is a function without a name.

Example:
const greet = function() {
 console.log("Hello!");
}; 

Anonymous functions are often used as arguments to other functions like .forEach() or setTimeout(). 

Hoisting
Hoisting means that JavaScript moves variable and function declarations to the top of their scope before code execution.
* Function declarations are hoisted completely.
* Function expressions and arrow functions are not hoisted.

setTimeout()
* setTimeout() runs a function once after a delay (in milliseconds).

Syntax:
setTimeout(functionToRun, delayInMs);

* It's asynchronous: the rest of the code keeps running while it waits.

Asynchronous Code
Asynchronous code does not block execution.It allows other code to run while waiting for a task (like a timeout, API response, or file read) to finish.

setInterval()
setInterval() runs a function repeatedly every given number of milliseconds.

Syntax:
const intervalId = setInterval(functionToRun, delayInMs);

* To stop it, use clearInterval(intervalId);.

clearInterval()
* Stops an interval started with setInterval().
clearInterval(intervalId);

Looping with .forEach()
* .forEach() is a method to loop through arrays, often easier to read than for loops.
* .forEach() takes a function with up to 3 parameters: element, index, array.

Skipping Iterations
* In a regular for loop, use continue to skip an iteration:
* In .forEach(), there's no continue, but we can simulate it using return
* If you need to use break, use a regular for loop instead — .forEach() does not support break.



Day12

Advanced Functions

Arrow Functions
Arrow functions are a shorter way to write functions. They mostly work like regular functions but with a simpler syntax.

Syntax: 
const arrowFunction = () => {
  console.log('hello');
};

Differences Between Arrow Functions and Regular Functions:
* Arrow functions provide shorter syntax.
* They are easier to read, especially when passing functions into other functions (e.g., array methods, event listeners).
* Arrow functions do not have their own this – they inherit this from the parent scope. Regular functions have their own this.

Shorthand Method Syntax (for objects)
Another way to write functions in object literals:

const person = {
  greet() {
    console.log('Hello!');
  }
};

 * Shorthand method syntax is cleaner and often preferred in object literals.

.Event Listeners
.addEventListener()
* Attaches an event handler to a DOM element.
* Allows multiple event listeners for the same event.

button.addEventListener('click', () => {
  console.log('Button clicked!');
});

.removeEventListener()
* Removes an event listener that was added with .addEventListener().
Note: You must pass the same function reference to remove it.

function handleClick() {
  console.log('Clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

Array Methods
.forEach()
Loops through an array and runs a function for each element.

const fruits = ['apple', 'banana', 'mango'];

fruits.forEach(fruit => {
  console.log(fruit);
});
.filter()
Creates a new array with only elements that return true from the callback.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); 
// [2, 4]
.map()
Transforms each element of the array and returns a new array.

const nums = [1, 2, 3];
const squares = nums.map(num => num * num); 
// [1, 4, 9]

 Closures

A closure is when a function remembers the variables from its lexical scope, even if the function is used outside of that scope.

Example:

function outer() {
  const secret = 'I know JS';

  return function inner() {
    console.log(secret);
  };
}

const getSecret = outer(); 
getSecret(); // prints: "I know JS"
* The inner function still has access to secret, even after outer() has finished running.
* The variables are "enclosed" in the function—hence the name closure.



12 Exercises - Advanced Functions
12a. Create a variable called 'add' and save a function inside. This function will console.log(2 + 3); Run the function twice.

javaScript/Day11&12/images/a12.png

12b. Continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.
• runTwice (function() { console.log ('12b'); }); => console.log('12b') twice runTwice(add); => console.log(5) twice

javaScript/Day11&12/images/b12.png

12c. Create the button below. When clicking the button, after 1 second, the text inside the button changes to 'Finished!'" (Hint: use setTimeout() and the DOM)

javaScript/Day11&12/images/c12.png

12d. Continuing from exercise 12c, modify the button so that when we click it, the text immediately changes to 'Loading..., and then after 1 second, it changes to 'Finished!'.

javaScript/Day11&12/images/d12.png

12e. Create the 'Add to cart' button below. When clicking this button, display the message 'Added' below the button. Then, after 2 seconds, remove the message.

javaScript/Day11&12/images/e12.png

12f. Continuing from 12e, if we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon).
• Modify the code so when we click the button, it "refreshes" the 2 second wait time (waits for 2 seconds again and removes message).
• Hint: you can cancel the previous setTimeout using clearTimeout()

javaScript/Day11&12/images/f12.png

12g. Imagine we're creating a messaging app.(Use setinterval) and document.title to create the feature on the right (the title changes every 1 second.)

javaScript/Day11&12/images/g12.png

12h. Continuing from 12g, instead of displaying "(2) New messages" every
time, save the number of messages in a variable: let messages = 2;
• Use the number in the variable to determine what title to display.
• Create 2 buttons 'Add' / 'Remove' that increase / decrease the
'messages' variable by 1.

javaScript/Day11&12/images/h12.png

12i. Continuing from 12h:
• Don't let 'messages' go below O.
• If messages === 0 stop changing the title and display 'App' as the title.
• When messages > 0 start changing the title again.

javaScript/Day11&12/ghi12.html


12j. Create an arrow function called 'multiply' that takes 2 numbers, multiplies them together, and returns the result.
• multiply (2, 3) => 6
• multiply (7, 10) => 70

12k. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise).

javaScript/Day11_12/images/jk12.png

12l. Create a function countPositive (nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using .forEach() instead of a loop.
• countPositive ([1, -3, 5]) => 2
• countPositive ([-2, 3, -5, 7, 10]) => 3

javaScript/Day11_12/images/l12.png

12m. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'. Create this function using .map() instead of a loop.
• add Num ([1, 2, 3], 2) => [3, 4, 5]
• addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
Bonus: try to use the one-line shortcut in your solution.

javaScript/Day11_12/images/m12.png

12n. Create a function remove Egg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using (.filter) instead of a loop.
• removeEgg(['egg', 'apple', 'egg','egg', 'ham']) => ['apple', 'ham']

javaScript/Day11_12/images/n12.png

12o. Update exercise 12n to only remove the first 2 eggs from the array.
Again, use .filter() instead of a loop.
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

javaScript/Day11_12/images/o12.png

12p. Go back to the earlier exercises in lesson 12 (12c - 12i) and switch the code to use arrow functions. (When passing a function into another function, use arrow functions. Otherwise, you can use either syntax.)
12q. Go back to the earlier exercises in lesson 12 (12c - 12i) and instead of using onclick="...", switch the code to use .addEventListener('click', ...)

javaScript/Day11_12/p12.html

 