Variables : 

What is a Variable?
* A variable is like a container that stores a value.
* You can use or change that value later in your code.
Syntax Rules for Variables:
1. Use let to create a new variable
2. Variable name rules:
*  Can’t use reserved words like let, if, function
* Can’t start with a number
*  Can’t use special characters except $ and _ 

3. Use = to assign a value
4. End each instruction with a semicolon ;
5. You can’t create another variable with the same name using let or const in the same scope
6. You don’t need let again when you change (reassign) the variable

Shortcut Operators for Reassigning Values:
Shortcut	Meaning	Full Form
+= 2	Add 2	variable = variable + 2
-= 2	Subtract 2	variable = variable - 2
*= 2	Multiply by 2	variable = variable * 2
/= 2	Divide by 2	variable = variable / 2
++	Add 1	variable = variable + 1
--	Subtract 1	variable = variable - 1

3 Ways to Create Variables in JavaScript:

1. let – allows you to create a variable you can change later.
2. const – creates a variable that can’t be changed.
3. var – the old way to create variables (not recommended now).
Check Variable Type with typeof:
You can use typeof to check what kind of value is in a variable.


Exercises - Variables

5a. Create a <script> element. Inside the <script>, create a variable called 'name', and save your name in this variable (as a string).
5b. Continuing from 5a, display the message 'My name is: $(name]' in the console (insert the 'name' variable created in 5a into this message).

javaScript/Day3 /images/5ab.png

5c. At a restaurant, you order 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.
5d. Continuing from 5c, display 'Cost of food: $$ {cost}' in the console. 5e. Let's say the restaurant charges a "10% " tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.
5f. Continuing from 5e, display 'Tax (10%): $$(tax}' in the console.
5g. Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $$(totalCost}' in the console.

javaScript/Day3 /images/5cdefg.png

5h. In the Cart Quantity project, add 2 more buttons '+4 and '+5', which increase the quantity by 4 and 5 when you click them. Try using +=
5i. In the Cart Quantity project, add a button 'Remove from cart', which decreases the cart quantity by 1.
5j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.
5k. Use the shortcuts -- and -= in 5i and 5j.

javaScript/Day3 /images/5hijk.png

building a calculator 

1. Go to 'supersimple.dev/projects/calculator' in your browser.
2. Open the Console and click the calculator buttons to see how it works.
Setup: create a new file calculator.html for this project.
5l. Add the HTML structure (<!DOCTYPE html>, ‹html>, ‹head>, <body>).
Add a <title> with the text 'Calculator'
5m. Create these 5 buttons:
2
3
5n. Create a <script>, create a variable called 'calculation', and save an empty string inside: let calculation =";
(This variable will store the calculation like '1 + 2' or '71 + 2 + 2)
5o. When we click the '' button:
• Add the string '7' to the calculation variable: calculation += ';
• Display the calculation in the console: console.log(calculation);
5p. Do the same for the '2', '3', and '+' buttons (add ' + ' instead of '+).
5q. When we click the ' button, use the code: eval(calculation);
(eval(.) converts the calculation string into actual math)
• Save the result back in 'calculation': calculation = eval(calculation);
• Display the result in the console: console.log(calculation);
5r. Create the rest of the buttons in the calculator. To create multiple rows of buttons, put the buttons inside <p> elements


javaScript/Day3 /images/calculator5.png

javaScript/Day3 /calcualtor.html