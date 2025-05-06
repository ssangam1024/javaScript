Booleans and If-Statements 

Booleans are another type of values
There are only 2 booleans values they are: true, false

What’s the purpose of boolean values?
* A boolean value represents whether something is true or false. 
Syntax rules for boolean:

If statements:
* If statement let us write multiple groups of code
* Then decide which code to run
Syntax rules for if statements:

Scope : a scope limits where a variable exists 
Any variable we create inside {….} will only exits inside the {…..}
Scopes help us avoid naming conflicts

Exercises -Boolean and if statements

6a. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
• If hour is between 6 and 12, display 'Good morning!' in the console
• If hour is between 13 and 17, display 'Good afternoon!' in the console Otherwise, display 'Good night!' in the console
6b. Continuing from 6a, try changing the value in the 'hour' variable to make it display different messages.

javaScript/Day4/images/ab6.png

6c. Continuing from 6a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning ${name}!'

javaScript/Day4/images/c6.png

6d. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
• Create a variable 'age' and save a person's age inside.
Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
Note: try to use the I| operator in your solution.
Try changing the 'age' variable to display different messages.

javaScript/Day4/images/d6.png

6e. Continuing from exercise 6d, let's say the discount is only available
if it is not a holiday. Create a variable: const isHoliday = true;
• Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
Note: && has a higher priority than II so you may need to use brackets () to control which code gets done first.
• Try changing the value of isHoliday to display different messages.

javaScript/Day4/images/e6.png

6f. Generate a random number with Math.random (). Save it in a variable.
6g. Create an if-statement and check:
• If the number is less than 0.5, then display 'heads' in the console.
• Else display 'tails' in the console.

javaScript/Day4/images/fg6.png

6h. Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.
6i. Let's say we're trying to guess the result. Create a variable called
'guess' and save your guess ('heads' or 'tails').
• If your guess matches the result, display 'You win!' in the console
• If your guess does not match the result, display 'You lose!'

javaScript/Day4/images/hi6.png

6j. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition? A : B).

javaScript/Day4/images/j6.png

6k. Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10:
• If it will, display a popup saying 'The cart is full' and don't update the quantity.
Otherwise, update the quantity and console.log() it as usual.

javaScript/Day4/images/k6.png

6l. In exercises 5 - 5k, we created the 'Remove from cart', '-2', and '-3' buttons. Before updating the quantity, check if it will go below 0:
• If it will, create a popup saying 'Not enough items in the cart' and don't update the quantity.
Otherwise, update the quantity and console.log() it as usual.

javaScript/Day4/images/l6.png