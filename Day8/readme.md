
HTML,CSS AND JavaScript together 

HTML = Creates the content
* Example: headings, paragraphs, images, links, buttons, etc.
CSS = Changes the appearance
* Example: colors, font sizes, spacing, layout
* CSS Selector = specifies which elements to style (e.g., p, .class, #id)
* CSS uses properties and values inside curly braces {}
* Padding = space inside the element (between content and border)
* Margin = space outside the element (between the element and others)
JavaScript = Makes it interactive
* Used to add dynamic behavior like clicks, form validation, animations, etc.

HTML Elements
* <img> = void element (does not require a closing tag)
    * src = source of the image file
    * alt = alternative text for screen readers or if image doesn't load

File Separation (Best Practice)
How to separate CSS in its own file:
1. Create a file: styles.css
2. Link it in your HTML file inside <head>:
<link rel="stylesheet" href="styles.css">

How to separate JavaScript in its own file:
1. Create a file: script.js
2. Link it at the end of the HTML <body>:
<script src="script.js"></script>

JavaScript Class Manipulation
* classList = gives control of the element’s class attributeIt is an object with methods like:
    * .add("classname") → adds a class
    * .remove("classname") → removes a class
    * .toggle("classname") → adds or removes a class depending on its current state
Lesson 10 Exercises - HTML, CSS, and JavaScript Together

10a. Amazon button
10b. Uber buttons

javaScript/Day8/images/ab10.png


10c. classList has another method, classList.contains('class-name'), which checks if an element has a class.
• Create a button: <button class="js-button"›Test</button>
Use document.querySelector() and classList.contains(js-button')
to check if this button has the class 'js-button'
• console log() the result.

javaScript/Day8/images/c10.png

10d. Create the button on the right. When clicking this button, it should turn ON / OFF. Hints:
• When clicking the button, add or remove the class 'is-toggled', and use it to change the styling.
• Use if (classList.contains('is-toggled')) to decide whether to add or remove the 'is-toggled' class.

javaScript/Day8/images/d10.png

10e. Continuing from 10d, create 3 buttons that can be turned ON / OFF.

javaScript/Day8/images/e10.png

10f. Continuing from 10e, use a function to reuse the code, and separate each language into its own file (if you didn't do this already).

javaScript/Day8/f10.html 
javaScript/Day8/f10.js
javaScript/Day8/f10.css

10g. Modify 10f so that only 1 button can be ON at a time.

javaScript/Day8/images/g10.png

10h. Create a file 10h.html and copy the code from 10-dom-projects.html.
In the Amazon Shipping Calculator, if we type a number less than 0, display a red error message below the text box:

javaScript/Day8/images/h10.png

10i. We'll style the calculator project using CSS.
• Make a copy of exercise 9j.
In your browser, go to:
supersimple.dev/projects/calculator-final
This is the final design for the project.
• Using CSS, style the calculator project to look like the final design on the right.

10j. Continuing from exercise 10i, separate each language into its own file (if you didn't do this already).

javaScript/Day8/images/ij10.png