
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
You don't need to type window. — JavaScript automatically assumes it:
