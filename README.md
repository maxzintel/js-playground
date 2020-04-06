# You Don't Know JS
**via _Getting Started with JavaScript v2_ by Kyle Simpson (@getify)**
A FrontendMasters course with Kyle's free book as the companion.

## Course Overview:
* Programming Primer (mostly review),
* 3 Pillars of JS:
  * Types/Coercion
  * Scope/Closures
  * this/Prototypes
* Code for Humans: https://frontendmasters.com/teachers/kyle-simpson/code-is-for-humans/
  * Writing something that works, but you don't understand why, is just as bad as something not working and you don't know why.
  * "If you don't know why your code works, you have no hope of fixing it when it breaks."
  * "Code is for humans." Code is a suggestion to the computer. The computer does not really need your code. What is truly impressive is when code outlasts cycles of 'it would be faster if I just re-wrote it'.
  * Of all the time we spend coding, 70% of that time is spent simply reading code.
  * "Code must first be read before it can be written." Make your code more readable. That is the only way to survive the aforementioned cycles.
  * Spend 10% of your time thinking about how would you teach the code you wrote to a class.

## Programming Primer
#### Values
* Numbers, strings, booleans, null/undefined (emptiness), arrays, and objects.

#### Operations
```js
3+4 // 3 and 4 are the operands, and + is the operator.
43-1 // ops with left and right operands are 'binary' operators
"Max" + "Zintel"
!false // unary operation. =True.
3.0 == 3 // loose equality. == & ===. In this case, double and triple are the same.
3 < 4
true || false // logical operator, || === OR. 
```

#### Types
* Use `typeof x` to find the type of some var. `typeof` is another form of a unary operator.
```js
typeof 42 // number
typeof "max" // string
typeof true // bool
typeof undefined // undefined
typeof { age: 24 } // object
typeof null // object => This is actually kind of a bug with Javascript from decades ago.
typeof [1,2,3] // object, an array is technically a sub-type of the object type.
```

#### Vars
* A variable - a place in memory (RAM) to symbolically store values.
``` js
var name = "MAX"; // name points to somewhere in memory where we put the string "MAX".
// referring to 'name' later will point towards that place in the memory.
var age; // gives an empty 'undefined' value.
age = 24; // replaces the undefined value with 24.

var friends = ["Gell", "Mike", "Jake"];
console.log(friends.length); // console is a variable given by Node or the browser or wherever this code is running.
// Thus, it is a place in memory with a bunch of special ops associated with it.
// console.log is saying "find console, then find log inside that"
// Length is a property of an object.
```
* Single = is the 'assignment' operator. Double == and Triple === are for comparison.
* Paranthesis (in the case of .log()) is another operator saying to call the 'log' function with the following parameters.
* Semicolon ; simply denotes the completion of a statement/line.
```js
var age = 24;
age++; // Add 1 to the current value of age and re-assign age the new value to age. age = age + 1;
age += 2; // Same as above, but instead of adding 1 we add 2. age = age + 2;
age; // 27
```

#### Expressions vs Statements
* Example:
```js
var age = 24; // statement. 24 is an expression. age = 24; is an expression.

age = 1 + (age * 2); // statement. 2 is an expression. age is an expression. (age * 2) is an expression.
// 1 is an expression. 1 + (...) is an expression. And age = 1 + (...) is an expression.
```

#### If & Else
* Making decisions in code using conditional if and else.
* The If Statement:
``` js
var age = 24;

if (age >= 18) {
  goVote();
}
```
* If true, then execute the following statements.
``` js
if (isEnrolled()) {
  console.log("Take the class")
} else {
  console.log("You gotta enroll first, dog.")
}
```

#### Loops
* How we repeat things over and over and over again.
``` js
var students = ["Clang","Sward","Scrozz","Oofie",];
for (let i = 0; i < students.length; i++) { // center statement here is basically an if statement, if true, we keep looping.
  greetStudent(students[i]);
}

for (let student of students) { // slightly different. This loop goes over a list of values. Automatically gives all vals of array.
  greetStudent(student);
}
// Above is called an iterator
```
* The While Loop:
``` js
var students = ["Clang","Sward","Scrozz","Oofie",];
while (students.length > 0) { // No initial value or increment needs to be made.
  let student = students.pop(); // Removes students from the list.
  greetStudent(student);
}
// Gives one value from the array, greet them, then remove it. All until there's nothing left in the array.
```

#### Functions
* A collection of statements that are used multiple times in different places.
  * Code you want to reuse.
* Also known as a 'procedure'.
```js
function greetStudent(student) {
  console.log(
    `Hello, ${student.name}!` // implies student is an object with a property 'name'
  );
}
```
* Above doesn't actually give us anything back. 'Charitable' functions that give back are covered in the next example.
* Backticks create interpolated strings, which means we may inject other types of variables into the string itself.
```js
function timeLeft(timeElapsed, endTime) { // where timeEl and endTime are parameters (i.e. inputs to a function.)
  return endTime - timeElapsed;
}

var left = timeRemaining(42,240);
left; // 198.
```

## Interlude - Chapter 1 of 'You Don't Know JS Yet: Get Started'
#### Intro
* JS running in the browser or Node.js is an implementation of the ES2019 standard (i.e. ECMAScript 2019).
* "Java is to JavaScript as ham is to hamster." -- Jeremy Keith.
* JS is now on its 10th major iteration since its inception in 1995.
* There is only one version of JS that all browsers use. The only differences are in their implementation via turning certain JS features on or off at different times.
* JS on the web is the only implementation that really matters, at least to the committee that makes decisions for the future of JS.
* JS is _always_ backwards compatible. Meaning (even code written in 1995) all valid JS ever written is and will continue to be valid JS. "We don't break the web!"
  * It is not forwards compatible, however. If you are running an old JS engine somewhere, you should not expect features from ES2019 to run within it.
  * Contrastingly, HTML/CSS are not backwards compatible. They are forwards compatible in the sense that a 2019 feature running in a 2010 browser will not break the web page, the code will simply be skipped. Skipping bits of code is not really possible in JS. It could (would) completely screw things up. In HTML and CSS you will simply not see the markup and styling that is 'forwards compatible'.
  * The best practice to address the problem of backwards compatibility is **transpiling** via something like Babel. Babel converts the new JS syntax to equivalent, but older (compatible), syntax.
    * If the issue is not related to new syntax, but rather to a missing API method that was recently added, the most common solution is to provide a definition of that missing API method that stands in and acts as if the older env had already had it natively defined. This is called `polyfill` (aka **shim**).
      * ex:
```js
// getSomeRecords() returns us a promise for some
// data it will fetch
var pr = getSomeRecords();

// show the UI spinner while we get the data
startSpinner();

pr
.then(renderRecords)   // render if successful
.catch(showError)      // show an error if not
.finally(hideSpinner)  // always hide the spinner
```
The above uses an ES2019 feature `.finally(...)`. A polyfill for `.finally(...)` could look like this:
```js
if (!Promise.prototype.finally) {
    Promise.prototype.finally = function f(fn){
        return this.then(
            function t(v){
                return Promise.resolve( fn() )
                    .then(function t(){
                        return v;
                    });
            },
            function c(e){
                return Promise.resolve( fn() )
                    .then(function t(){
                        throw e;
                    });
            }
        );
    };
}
```
However, there are generally official polyfill options for these situations, and the above is not one of them. So do not use it in your actual code. **Babel will automatically find which polyfills your code needs and provide them to you**, usually.

## Types & Coercion

## Scope & Closures

## this Keyword & Prototypes