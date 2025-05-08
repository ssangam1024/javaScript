
Day 7

Document Object Model (DOM)
 What is the DOM?
* The DOM (Document Object Model) is a built-in JavaScript object that represents the structure of a webpage.
* It allows JavaScript to interact with and manipulate HTML and CSS.


Objects- which groups multiple values together. 

Built-in JavaScript Objects
Examples of other built-in objects:
* console.log()
* Math.random()
* JSON.stringify()
* localStorage.getItem()
The document object is another built-in object in the browser environment.

Accessing and Modifying HTML
Example: 
document.body.innerHTML = 'Hello';

Explanation:
* document: built-in object representing the entire webpage
* body: a property of document that refers to the <body> element
* innerHTML: returns or changes the HTML content inside an element
* =: assigns new HTML/text to the element

Syntax Rules and Properties of the DOM
* document.title → Gets or sets the title of the page
* document.body → Represents the <body> tag
* HTML elements are converted into JavaScript objects
* JavaScript can fully control, change, and react to HTML through the DOM

Methods
* document.querySelector()
    * Lets you select any element from the page (by tag, ID, or class)
    * Example: document.querySelector('.js-button');
* If the selector starts with a . → class selector
* If the selector starts with # → ID selector

Element Properties
* .innerHTML: gets or sets HTML content of an element
* .innerText: gets or sets only the visible text
* .value: used for form elements (like input fields) to get/set user-entered values
Example:
    const name = document.querySelector('#nameInput').value;

Void Elements
* Elements that do not have a closing tag (e.g., <input>, <img>, <br>)

Placeholders
* Used in form inputs to show hint text:
           <input type="text" placeholder="Enter your name">

Type Conversion
* DOM values are always returned as strings
* To convert to a number: Number(value)
* To convert number to string: String(number)

Don't do math directly on strings unless you're sure they represent numbers.

If a string only contains a number, doing -, *, or / will automatically convert it to a number.
However, avoid relying on this behavior. Be explicit with conversions.


Events and Event Listeners

 Common Events:
* onclick → when an element is clicked
* onkeydown → when a key is pressed
* onscroll → when scrolling occurs
* onmouseenter → when mouse hovers over
* onmouseleave → when mouse leaves

Example using inline event:
     <button onclick="alert('Clicked!')">Click me</button>

But it's better to use addEventListener:
        document.querySelector('button').addEventListener('click', function() {
  alert('Clicked!');
});


The Window Object
* Represents the browser window itself.
* window is the global object in the browser.
* Examples of window properties/methods:
    * window.alert()
    * window.location
    * window.setTimeout()
    * window.innerWidth
You don't need to type window. — JavaScript automatically assumes it


Exercises - Document Object Model (DOM)

9a. Create a <button>9a</button. Use document.querySelector'button') to get the button from the page, and then display it in the console.
9b. Continuing from 9a, create another button <button>9b‹/button> below. Using JavaScript, change the text in the second button to
'9b done!' (hint: add a class and use .querySelector).

javaScript/Day7/images/ab9.png

9c. Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>) underneath. When clicking the 'heads' button, display
'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.

javaScript/Day7/images/c9.png

9d. Create a text box («input>) and a submit button. When clicking
'Submit', display 'Your name is: $(text)' on the page (${text} = the text inside the text box) (hint: use value to get the text inside an <input>).

javaScript/Day7/images/d9.png

9e. Modify exercise 9d so that when you press 'Enter' in the <input>, it will also display the same message on the page (hint: use onkeydown and the event object).

javaScript/Day7/images/e9.png

9g. Create a file 9g.html and copy the code from 09-dom-projects.html into this file. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue.

javaScript/Day7/images/g9.png

9h. Let's create the project on the right:
* Whenever we type in the text box, update the text on the page.
*  To do this, we'll learn another event called <input onkeyup="...">.
* This runs code after we press a key and release it (key comes up).

javaScript/Day7/images/h9.png

9i.We'll improve the Cart Quantity project.
Make a copy of exercise 7l (see the solution for 7l if needed).
• Create a paragraph (<p></p>) to display the quantity.
• Whenever we update the quantity, display it on the page instead of in the console. Also, display the quantity when page first loads.

javaScript/Day7/images/i9.png

9j. We'll improve the calculator project.
• Make a copy of exercise 8h.
• Whenever we update the calculation, display it on the page instead of in the console.
• When the page first loads, if a calculation exists in localStorage, display it on the page

javaScript/Day7/images/j9.png


