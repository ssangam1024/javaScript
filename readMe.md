Java Script 

JavaScript Basics

What is JavaScript?
* JavaScript is a programming language used to make websites interactive.
* It gives instructions to a computer, and the computer follows those instructions.

Web Technologies Used to Build a Website

1. HTML – Creates the content of the website
2. CSS – Changes the appearance or style of the website
3. JavaScript – Makes the website interactive

Terminology / Naming

* The instructions we give to a computer are called “code”.
* When wer run the program, and the computer follows the instructions, it is called "running the code".

Programming Languages

Just like human languages, programming languages have their own syntax and rules. Examples include:
* JavaScript
* Python
* Java

JavaScript is case-sensitive. That means myName and MyName are treated as different things.

To change the content of a webpage using JavaScript: document.body.innerHTML = 'HELLO';

Make sure to use straight quotes, a semicolon at the end, and proper capitalization (document, not Document).

Syntax
* Syntax refers to the rules we must follow when using a programming language.
* In programming, we have to follow the syntax rules exactly—even a small mistake can cause an error


Numbers and Math in JavaScript


Order of Operations and Brackets:

Just like in regular math, JavaScript follows an order when solving math problems:
* The order is: () → * , / → + , -
* You can use brackets (also called parentheses) to change the order.

Operator precedence is the set of rules that tells JavaScript which operations to do first when there's more than one in a line of code.

Syntax Rules for Brackets
* You must always open and close brackets properly.

Weird Behavior in JavaScript Math

Calculating with decimal numbers (floats) can sometimes be inaccurate.
 
Why? JavaScript (like many programming languages) uses binary (0s and 1s) to represent numbers. Some decimal numbers can’t be represented exactly in binary, which causes small rounding errors.

Tip for Money Calculations:

* Do your math in cents, not dollars.
* Convert to dollars only at the end.
 
To Round a Number use “Math.round()” to round a number to the nearest whole number.

Strings in JavaScript


A string is a piece of text, like "Hello"

Syntax Rules for Strings

There are 3 ways to write strings in JavaScript:

1. Single quotes: 'hello'
    * Use these by default. They’re simple and clean.
    * Example: 'Hello World’2
2. Double quotes: "hello"
    * Use double quotes if your string includes a single quote.
    * Example: "I'm learning JavaScript"
3. Backticks (`): `hello`
    * These are called template literals or template strings.
    * They allow extra features like:
        * Interpolation: insert variables or expressions using “${}”
        * Multi-line strings: write strings that go over multiple linesExample:
Working with Strings and Numbers

* Concatenation = Joining strings together
* Type Coercion = JavaScript automatically converts types when needed
* Strings also follow order of operations, just like numbers.

Escape Characters
Sometimes you need to use special characters inside a string. Use a backslash (\) to escape them.
Examples:
* \' = single quote'I\'m learning JavaScript' → I'm learning JavaScript
* \" = double quote"He said, \"Hello!\"" → He said, "Hello!"
* \n = new line'Line one\nLine two' 
A character is any single letter, number, or symbol in a string.


