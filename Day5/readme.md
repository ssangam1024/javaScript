Day5

Functions:

A function lets us reuse code. It groups a set of instructions together that we can call (run) whenever needed.

Syntax rules for functions:

Use the function keyword to create a new function.
Follow it with a name (usually a verb or action).
The code inside the function only runs when the function is called.
A function creates its own scope – variables declared inside {...} only exist within that block.

Rules for Naming Functions
* Cannot use reserved (special) words.
* Cannot start with a number.
* Cannot use special characters, except: $ and _.
* Best practice: use camelCase (e.g., sayHello, getUserName).

Why Use Functions?
* Makes your code reusable and easier to update.
* Helps keep code organized.
* Improves readability and debugging.


The return Statement
What it does:
* Gets a value out of a function.
* You can return a value, a variable, or a calculation.
* If you write just return with no value, it returns undefined.
* A return stops the function immediately.

Global Variable vs Return
Global Variable	                      
* Declared outside any function.	    
* Accessible anywhere in the code.	
* Can be modified by any function.	

Return
* Used to output a value.
* Value only exists if you return it.
* Keeps code more modular and safe.

Parameters and Arguments
Parameter
* A placeholder variable inside a function definition.
* It receives a value when the function is called.
Argument
* The actual value passed into the function when calling it.

Syntax Rules for Parameters
* Follows the same naming rules as variables:
    * No special words.
    * Cannot start with a number.
    * Allowed characters: $, _.
    * Best practice: use camelCase.
Default Parameters
* You can give parameters default values.



Exercises - Functions

7a. Create a function called 'greet' that displays the message 'Hello!' in the console. Call / run this function a few times using: greet();

javaScript/Day5/images/a7.png

7b. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!'
Call the function a few times with different names: greet('Simon');

javaScript/Day5/images/b7.png

 7c. Try calling greet() without a name (it will display 'Hello undefined!').Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.

 javaScript/Day5/images/c7.png

 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
• Formula: Fahrenheit = (Celsius * 9 / 5) + 32
• convertToFahrenheit(25) => 77
7e. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
• Formula: Celsius = (Fahrenheit - 32) * 5 / 9
• convertToCelsius(86) => 30
7f. Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
• convertTemperature(25, 'C') => '77F'
• convertTemperature (86, 'F') => '30C'
Note: return a string, and try to reuse the functions from 7d and 7e.

javaScript/Day5/images/def7.png
 
 7g. Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another
unit ('km' or 'miles'). Note: 1 mile = 1.6 km (approximately).
• convertLength(50, 'miles', 'km') => '80 km'
• convertLength (32, 'km', 'miles) => '20 miles'
• convertLength(50, 'km', 'km') => '50 km'

javaScript/Day5/images/g7.png

7h. Update convertLength to support converting between km, miles,
and also feet. Note: 1 mile = 5280 ft, 1 km = 3281 ft (approximately).
• convertLength(5, 'miles', 'km') => '8 km'
• convertLength(5, 'miles', 'ft') => '26400 ft'
• convertLength (5, 'km', 'ft') => '16405 ft'

javaScript/Day5/images/h7.png

Update convertLength so that if you give it an invalid unit, it will return 'Invalid unit: ${unit}
• convertLength(5, 'Ibs', 'Ibs') => 'Invalid unit: Ibs'

javaScript/Day5/images/i7.png

7j. Create a copy of the Calculator project from exercise 5r (if you didn't do 5r, copy the code for 5r from the solutions).
• Notice there's a lot of duplicated code in the buttons.
• Create a function 'updateCalculation' and reuse the code.

javaScript/Day5/images/j7.png

7k. Create a copy of the Cart Quantity project from exercise 6l.
• Create a function 'updateCartQuantity' and reuse the code.
7I. Modify 'updateCartQuantity' so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner because we can remove the 'else-if /'else.

javaScript/Day5/images/kl7.png
