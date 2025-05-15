Day9

Arrays and loops

JavaScript Arrays
* Array = a type of value in JavaScript that stores a list of other values
* Syntax to create an array:

let fruits = ["apple", "banana", "cherry"];

* Use square brackets [] with an index to access a specific value:

console.log(fruits[0]); 

Array Key Concepts:
* Index = position in the array, starting from 0
* Arrays can hold any type of value: strings, numbers, booleans, other arrays, even objects or functions

Common Array Properties & Methods:
* .length → returns the total number of items in the array

syntax: fruits.length;

* .push(value) → adds a value to the end of the array

syntax: fruits.push("orange");

* .splice(start, deleteCount) → removes or replaces items from the array

syntax: fruits.splice(1, 1);

JavaScript Loops
Loops = let us run code repeatedly

Syntax for while loop:

let i = 0;   // loop variable
while (i < 5) {
  console.log(i);
  i++; // increment step (very important!)

* Each run is called an iteration
* Without the increment step, the loop runs forever
* Loops create a new scope

Syntax for for loop:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

When to use for vs while:
* Use for loop when:
    * You know how many times to loop (standard counting)
* Use while loop when:
    * You don’t know how many times to loop (e.g., wait for a condition to become true)

Looping Through an Array

Syntax:
let colors = ["red", "blue", "green"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

Accumulator Pattern = A pattern used to build up or accumulate a result by looping through a collection (like an array)

1. It Create a variable to store the result (e.g., a number, a string, or an array).
2. It Loop through the array
3. Update the result inside the loop

Example:

let numbers = [2, 4, 6, 8];
let total = 0; // accumulator

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);

<div> Element
* <div> = generic container element
* It has no default styling
* Commonly used to group content for styling or scripting

Day10

How do e group the name and due date together?

Destructuring: 

Shorthand property syntax:- name:name ,due date:due date;

Name ,duedate 

Creation:
* Using array literals: let fruits = ['apple', 'banana', 'cherry'];
* Using the Array constructor: let numbers = new Array(1, 2, 3);
Accessing Elements:
* Elements are accessed using zero-based indexing: console.log(fruits[0]); 

Common Methods:
* push() – Adds an element to the end of the array.
* pop() – Removes the last element from the array.
* shift() – Removes the first element from the array.
* unshift() – Adds an element to the beginning of the array.
* length – Returns the number of elements in the array.
Loops in JavaScript
Loops allow you to execute a block of code multiple times, which is especially useful when working with arrays.

* break loop - exit loop early 
* Continue loop - skip 1 iteration of the loop 

1. For Loop
Used when the number of iterations is known.
Syntax
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
2. While Loop
Executes as long as a specified condition is true.
Syntax
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
3. Do...While Loop
Executes the block of code once before checking the condition.
Syntax:
let i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);
4. For...Of Loop
Introduced in ES6, it simplifies iterating over iterable objects like arrays.
Syntax:
for (const fruit of fruits) {
  console.log(fruit);
}
5. For...In Loop
Iterates over enumerable properties of an object. Not recommended for arrays as it can iterate over inherited properties and the order is not guaranteed.
Syntax
for (const index in fruits) {
  console.log(fruits[index]);
}

Exercises - Arrays and Loops

1la. Create an array of numbers: const nums = [10, 20, 30]; Modify the last
value in this array and change it to 99.

javaScript/Day9_10/images/a11.png

11b. Create a function getLast Value (array) that takes an array and returns the last value in the array. Hint: array indexes start at 0 so the last index is the number of values in the array minus 1
(lastindex = array.length - 1).
• getLastValue ([1, 20, 22, 24, 5]) => 5
• getLastValue(['hi'; 'hello', 'good']) => 'good'

javaScript/Day9_10/images/b11.png

11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).
• arraySwap ([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 11] arravSwap("'hi', 'hello', 'good'l) => l'good', 'hello', 'hi'l

javaScript/Day9_10/images/c11.png

11d. Create a for loop that counts up from 0 to 10, but counts up by 2
(0, 2, 4, ..., 8, 10).

javaScript/Day9_10/images/d11.png

11e. Create a for loop that counts down from 5 to 0.

javaScript/Day9_10/images/e11.png

11f. Do exercises 11d and lle, but using while loops.

javaScript/Day9_10/images/f11.png

11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
• [1, 2, 3] => [2, 3, 4]

javaScript/Day9_10/images/g11.png

11h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
• addOne ([1, 2, 3]) => [2, 3, 4]
• addOne([-2, -1, 0, 991]) => [-1, 0, 1, 100]

javaScript/Day9_10/images/h11.png

11i. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'.
• addNum ([1, 2, 31, 2]) => [3, 4, 5]
• add Num ([1, 2, 3], 3)=> [4, 5, 6]
• addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]

javaScript/Day9_10/images/i11.png

11j. Create a function addArrays(arrayl, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
• addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]
• addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]

javaScript/Day9_10/images/j11.png

11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
• countPositive ([1, -3, 5]) => 2
• countPositive (I-2, 3, -5, 7, 101) => 3

javaScript/Day9_10/images/k11.png

11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).
• minMax([1, -3, 5]) => { min: -3, max: 5 }
• minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }

javaScript/Day9_10/images/l11.png

11m. Update exercise 111 to also handle these cases:
• minMax([ ]) => { min: null, max: null}
• minMax([3]) => { min: 3, max: 3 }

javaScript/Day9_10/images/m11.png

11n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.
• countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape: 1} (Hint: you can access a property using a variable: object[variable];
This uses the value inside the variable as the property name).

javaScript/Day9_10/images/n11.png

11o. Create an array of strings, loop over the array, and check if the string
'search' is inside the array. If it is, console.log() the index of 'search' in in the array. If not, console.log '-1.
• ['hello', 'world', 'search', 'good'] => console.log(2)
• ['not', 'found'] => console.log(-1)

javaScript/Day9_10/images/o11.png

11p. Modify llo so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break;
• ['hello', 'world', 'search', 'good', 'search'] => console.log(2)

javaScript/Day9_10/images/p11.png

11q. Create a function findindex(array, word) that searches an array for a string (in the 'word' parameter) and returns the index of the first appearance of the string. If it doesn't exist in the array, return -1.
• findindex (l'green', 'red', 'blue', 'red'l, 'red') => 1
• findindex(l'green', 'red', 'blue', 'red'], 'yellow') =>-1

javaScript/Day9_10/images/q11.png

11r. Create a function removeEgg (foods) that takes an array of strings and returns an array where the string 'egg' is removed. (Hint: loop through the array and check if each string is 'egg. If it is 'egg', use 'continue;' to skip it. If it's not 'egg', add it to the result).
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

javaScript/Day9_10/images/r11.png

1ls. Update exercise 11r to only remove the first 2 eggs from the array.
• removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

javaScript/Day9_10/images/s11.png

11t. Arrays have a method called .reverse), which reverses the order of the values in the array. Using .reverse(), update exercise 11s to only remove the last 2 eggs from the array. removeEgg(l'egg';, 'apple, 'egg; 'egg', 'ham']) => ['egg; 'apple, 'ham'?

javaScript/Day9_10/images/t11.png

11u. In exercise 11t, one problem with .reverse) is that it doesn't create a copy of the array it is reversing. It modifies the original array. Update the code so the function does not modify the original array. (Hint:
use the slice) method to create a copy of an array's values).
• const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
• console.log(removeEgg(foods)) => ['egg', 'apple', 'ham']
• console.log(foods) => ['egg' 'apple', 'egg', 'egg', 'ham'?

javaScript/Day9_10/images/u11.png
