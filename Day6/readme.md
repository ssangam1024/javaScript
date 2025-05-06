Objects in JavaScript
* An object groups multiple values together.
* Objects are written inside curly braces {}.
* Each piece of data is stored as a property-value pair.
* A property is the key, and the value is the associated data.

Property Access
* Dot notation (preferred):- ( eg: person.name; )
* Bracket notation (used when needed):- ( person["age"];  )

Use dot notation by defaultUse bracket notation when:
* The property name has spaces or special characters
* You want to use a variable as a key
* You need to do calculations to form the property name


Object Rules and Behavior
* Properties are defined using the colon ( : ) 
* You can add or modify properties
* Objects help keep code organized and allow grouping multiple values together.
* You can store any type of value inside an object (strings, numbers, arrays, functions, even other objects).

Nested Objects
* Used to keep data structured and organized:

Functions in Objects (Methods)
* A function inside an object is called a method.

Variables and Object Behavior
* Variables are temporary: They are lost when the page is refreshed or closed.
* Objects are references:
    * Comparing two objects directly (obj1 === obj2) checks if they refer to the same object, not if their values are equal.
Built-in Objects

JSON (JavaScript Object Notation)
* A lightweight format for storing and transferring data.
* Similar to JS objects but:
    * No single quotes allowed
    * No functions allowed
* More universal syntax used across many languages
Common Methods:
* Convert JavaScript object → JSON:- JSON.stringify(obj)

Convert JSON → JavaScript object:- JSON.parse(jsonString)

LocalStorage
* Stores data persistently in the browser (even after page refresh).
* Only supports strings.
Syntax:
localStorage.setItem("key", "value");
localStorage.getItem("key");
* If the key doesn’t exist, getItem() returns null.

Other Concepts
Auto-Boxing:
* JavaScript automatically wraps primitives (like strings or numbers) in their object wrappers when needed.
null vs undefined:
* null: A value intentionally set to be empty.
* undefined: A variable declared but not assigned a value.

Object Shortcuts

Destructuring:
Easier way to extract values from objects:- const { name, age } = person;

Shorthand Property:
When variable names match property names:
const name = "Tom";
const user = { name };

Shorthand Method:
Simplified way to define functions inside objects:

const user = {
  greet() {
    console.log("Hello");
  }
};


Lesson 8 Exercises - Objects
8a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.
8b. Continuing from 8a, let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.
8c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console.
8d. Create a function 'comparePrice (product, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.

javaScript/Day6/images/abcd8.png

8e. Create a function 'isSameProduct(product, product2)', which returns true if 2 products have the same values inside ('name' and 'price').
If not, return false. Create 2 products and try out the function.
(Hint: objects are references so you can't compare them directly).

javaScript/Day6/images/e8.png

8f. Using Google or an A.l. tool, search how to convert a string to all lowercase with JavaScript ('Good Morning' => 'good morning')

javaScript/Day6/images/f8.png

8g. Search how to repeat a string many times ('test' 2 times => 'testtest')

javaScript/Day6/images/g8.png

8h. We'll add localStorage to the calculator project. First, make a copy of the project from exercise 7j (see the solution for 7j if needed).
• Whenever we update the calculation, save it using .setitem()
When the page first loads, get the calculation using getItem ()
• Use a default value of " if a calculation doesn't exist in local storage


8i. We'll improve the coin flip game from exercise 6j to be like the rock paper scissors game.
• Copy the code from exercise 6j (see the solution for 6j if needed).
Create 2 buttons to play the game heads
tails
When clicking 'heads' play the game with guess = 'heads.
• When clicking 'tails' play the game with guess = 'tails'.
• Create a function 'playGame(guess)' to reuse the code.
8j. Create a score object { wins: 0, losses: 0 }, update the score each time after playing, and display the score in the console.
8k. Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string).

javaScript/Day6/images/ijk8.png