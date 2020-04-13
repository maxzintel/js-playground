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
* Strict Mode:
  * Technically optional, due to bw compatability. 
```js
// only whitespace and comments are allowed
// before the use-strict pragma
"use strict";
// the rest of the file runs in strict mode
```
  * Prevents things that don't show up in your editor as syntax errors, but show upon running the code with Node (or whatever). Ex: parameters with the same name.
  * Using strict mode is a best practice, and should not be ignored.

## Types & Coercion
Primitive Types, Converting Types, and Checking Equality.  
#### Primitive Types
* Let's list them!
  * undefined
  * string
  * number
  * bool
  * object
  * symbol (new)
  * null? (yes, this an object, albeit with some quirks)
  * function? (no, technically this is a subset of objects)
  * array? (no, technically this is a subset of objects)
* In JS, vars don't have types, values do. Ex:
```js
var v;
typeof v; // undefined
typeof someNonExistentVar; // also undefined!

v = "1";
typeof v; // string
//...
v = {};
typeof v; // object

v = Symbol();
typeof v; // symbol

v = null;
typeof v; // object => a bug...

v = function() {}; // a function expression.
typeof v; // function - say whaaaa? Still an object type but has its own return value here.

v = [1,2,3];
typeof v; // object
```

#### NaN (is a non-mathematical operation)
```js
var greeting = "STRINNNNNNG"
var somethingWrong = greeting / 2;
something; // returns NaN - cuz greeting is not a valid number
Number.isNaN(something); // returns true
```

#### new 
* Use new on...:
  * Object(), Array(), Function(), Date(), RegExp(), Error()
    * Constructors.
* **Don't** use new on...:
  * String(), Number(), Bool()
```js
var yesterday = new Date("April 5, 2020");
yesterday.toUTCString(); // returns "Sun, 05 Apr 2020 6:00:00 GMT"
var myGPA = String(transcript.gpa); // returns "3.14"
```

#### Coercion
The way to convert from one type to another.
```js Number to String
var one = "There are ";
var number = 23;
var two = " workers.";
console.log(one + number + two); // "There are 23 workers."
```
Alternatively...
```js Number to String v2
var number = 23;
console.log(`There are ${number+""} workers.`); // "There are 23 workers."
```
* Basically, what the above examples are implying is that the only time the `+` operator does math is when all values of an equation are numbers. If anything in `+` operation is a string, the `+` will be 'overloaded' and put the final value into a string.
```js String to number.
function addStudent(number) {
  return number + 1;
}

addStudent(
  Number(studentsInputElem.value) // Using Number() forces the value to number.
); // 24
```
* Grabbing `studentsInputElem.value` above would come through as a string by default.
* We can coerce booleans to become numbers too!

#### Booleans
* Falsy & Truthy
  * Which values, if we tried to convert them into a boolean, would become false, and which would become true?
  * Falsy: If converted to a boolean, these values will return `false`.
    * `""`
    * `0, -0`
    * `null`
    * `NaN`
    * `false`
    * `undefined`
  * Truthy:
    * `"some filled string"`
    * `23`
    * `{a:1}`
    * `[1, 3]`
    * `function() {...}`
    * And anything else that is not one of the Falsy vals.
  * These conversions and assessments are made implicitly when using things like `if true {}` and `while true {}` loops. To explicitly coerce falsy/truthy assessment, try...
```js
if (!!inputElem.value) { // the !! forces a boolean assessment of falsy/truthy for the string.
  ...
}
```
```js
  while (newStudents.length > 0) {
    ...
  }
```
* Generally, we want to avoid implicit coercion, but sometimes it can be good...
```js
var enrollment1 = 16
var enrollment2 = workshop2Elem.value; // Some string value cause we are pulling it from a DOM element.

if (Number(enrollment1) < Number(enrollment2)) { // forces them both to be numbers.
  // ... but that's kind of unnecessary, because < automatically converts them to nums if possible.
}

// So we really want...
if (enrollment1 < enrollment2) {
  // ...
}
```

#### Equality
* **== vs. ===**
  * `==` - allows coercion (if types different).
  * `===` - disallows coercion (types are the same). Thus, we use this when types are the same.
  * When the types are already the same, they do the same thing.
```js
var student1 = "Max";
var student2 = `${student1}`; // string to string, no coercion.

var enrollment1 = 16;
var enrollment2 = enrollment1 + 0; // both are numbers here, so no coercion.

student1 == student2; // true
student1 === student2; // true

enrollment1 == enrollment2; // true
enrollment1 === enrollment2; // true
```
```js
var workshop1 = { topic: null};
var workshop2 = {};

if  (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined) &&
) {
  // ...
}
if  (
  workshop1.topic == null && workshop2.topic == null // exact same thing as above, so, == is better in some cases.
) {
  // ...
}
```
* `null == undefined`

#### Types Summary
* == is NOT about comparisons with unknown types. Types should be obvious. == is about comparisons with known types where we want to allow coercion.

## Scope & Closures
#### Scope
What does Scope mean? Basically, where to look for things.
```js
x = 42; // we need to know where in memory x is.
console.log(y); // we need to look up console, log, and y.
```
* Example:
```js
// Note: we are not in strict mode here.
var student = "max"; // Global scope
function otherClass() {
  teacher = "not max"; // No declaration w/in function, so this looks at the global scope.
  topic = "react"; // Since we are not in strict mode, this actually creates a global topic var.
  console.log("Welcome!");
}
otherClass();
teacher; // ???? => not max
topic; // ???? => react
```

#### Undefined vs. Undeclared
* NOT the same thing.
* Undefined = a var that has been declared but does not have a value.
* Undeclared = never declared anywhere.

#### Function Expressions
* What _specifically_ is a function expression?
  * A function that is assigned as a value somewhere.
  * A first class value. Something that can be passed around, used as parameters/in other functions, etc...
```js
var clickHandler = function() {
  // ...
};
var keyHandler = function keyHandler() {
  // ...
};
```
* Above two examples are not the same thing exactly, and thus, have different names:
  * 1) `clickHandler` = Anonymous function expression. More common.
  * 2) `keyHandler` = Named function expresssion. If possible, this should be **ALL** we use for function expressions.
    * Why? The Descriptive Name tells us exactly what is happening when those function expressions are being used.
```js
var ids = people.map(person => person.id); // Anonymous func expression.
var ids = people.map(function getId(person) { // Named. Tells us in the name (getId) what exactly it does.
  return person.id;
});
```

#### IIFEs
"Immediately Invoked Function Expression"
```js
var teacher = "Max";
( function anotherTeacher() {
  var teacher = "Kyle"; // does not override the teacher in the first line.
  console.log(teacher); // Kyle
} )(); // the () here is where it gets 'immediately' executed.

console.log(teacher); // Max
```
* Pretty common. 

#### Block scoping with let
* More common than IIFEs these days. A method of var organization.
```js
var teacher = "Max";
{
  let teacher = "Kyle";
  console.log(teacher); // Kyle
}

console.log(teacher); // Max
```
```js
function diff(x,y) {
  if (x > y) {
    let tmp = x; // only exists here and on the next two lines.
    x = y;
    y = tmp;
  }

  return y - x;
}
```
```js
function repeat(fn,n) {
  var result;
  for (let i = 0; i < n; i++) { // makes an i for the for loop, and we only want it avail in the for loop.
    result = fn( result, i );
  }
  return result;
}
```
```js
function formatStr(str) {
  { let prefix, rest;
    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO:/.test(str)) {
    return str;
  }
  return str.slice(4)
}
```
* Keep your vars as narrowly scoped as possible.

#### Closure
* Closure without scope, is not understanding closure.
* Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere.
  * vars outside of its scope
  * only observable if the function is passed somewhere, like a callback. I.E. whenever the function is treated as a value.
```js
function ask(question) {
  setTimeout(function waitASec() { // waitASec has closure over the question var.
    console.log(question); // question var is not inside 'waitASec'. Its created in the outer scope ask()
  },100);
}

ask("What is Closure?");
// What is Closure?
```
```js
function ask(question) {
  return function holdYourQuestion() { // returns back a question.
    console.log(question);
  };
}

var myQ = ask("What is closure?"); // assigns the function exp as a value.
myQ(); // What is closure?
```
* Definitely need to read a little more about this, its a bit weird to me at the moment.
* https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md

#### Closure, via Textbook:
* How does JS know what variables are accessible by any given statement, and how does it handle two vars of the same name?
* Closure builds on the principal of least exposure (POLE).
  * For vars we need to use over time, instead of placing them in larger outer scopes, we can encapsulate them while still preserving their access from inside functions.
  * Functions remember these referenced scoped vars via closure.
* Basically, if you've ever written a callback that accesses vars outside its own scope, thats closure.
* Assessing closure in a practical way - how would programs work with and without the ability to use closure in JS. Note: if we aren't dealing with functions, closure does not exist.
  * For closure to be observed, its function must be invoked in a different branch of the scope chain than where it was originally defined.
  * Ex:
```js
// global scope RED(1)
function lookupStudent(id) {
  // function scope BLUE(2)
  var students = [
    {id: 23, name:"Clang"},
    {id: 69, name: "Max"},
    {id: 420, name: "Aoife"}
  ];

  return function greetStudent(greeting) {
    // function scope GREEN(3)
    var student = students.find(
      student =>
        // Function scope ORANGE(4) 
        student.id == id
    );
    return `${greeting}, ${student.name}!`;
  };
}

var chosenStudents = [
  lookupStudent(23), // uses the number parameter to identify the student object we are trying to access.
  lookupStudent(69) // instantiates the data from this studentID in memory for later use.
];

chosenStudents[0].name; // greetStudent
// accessing the functions name:
chosenStudents[0]("Hello");
chosenStudents[1]("Howdy");
```
Okay, I think I get this now. Basically, closure allows us to access values from an execution of a function with the parameters used at the time of execution. Otherwise, the values returned would be 'garbage canned' after the fact.

* Pointed Closure:
  * `student => student.id == id` arrow  function creates another scope bubble inside the function scope. Thus, the `id` reference is actually inside (4) rather than (3). The `student` parameter of the function is (4), shadowing the (3) `student`.
* Another example!
```js
function adder(num1) {
  return function addTo(num2) {
    return num1+num2
  };
}

var add10To = adder(10);
var add42To = adder(42);

add10To(15); // 25
add42To(9); // 51
```
* Closure is a 'Live Link', not a Snapshot.
  * We are not merely reading a value => the closed over var (num1 in the above example), can be updated and reassigned.
  * ex: let's make a counter function with closure
```js
function makeCounter() {
  var count = 0;
  return function getCurrent() {
    count = count + 1;
    return count;
  };
}

var hits = makeCounter();
hits(); // 1
hits(); // 2
hits(); // 3
```
Let's move on from closure for now. We will likely come back to this before course end.

## this Keyword & Prototypes
The third and final pillar!
* this, Prototypes, class {}.  
  
#### this
A functions **_this_** references the execution context for that call, determined entirely by **how** the function was called.
* A 'this-aware' function can have a different context each time it's called, making it more flexible and reusable. 'Dynamic Context'.
```js
var workshop = {
  teacher: "Max",
  ask(question) {
    console.log(this.teacher, question); // thus, this aware function.
  }
};

workshop.ask(" , what is Implicit Binding?"); // Determines the context and value of the this keyword used in this function.
// Max, what is Implicit Binding?
```
```js
function ask(question) {
    console.log(this.teacher, question); // No this context yet.
}

function otherClass() {
  var myContext = {
    teacher = "Georgio"
  };
  ask.call(myContext, ", why?"); // invoke function ask, and use the myContext object as the context. myContext = this.
}
otherClass();  // Georgio, why?
```

#### Prototypes
Ex:
```js
function Workshop(teacher) { // function becomes a 'constructor'
  this.teacher = teacher
};

Workshop.prototype.ask = function(question) { 
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Max"); // new invokes the workshop func and the object created is linked to workshop.prototype.
// since workshop.prototype has a ask method, we can do deepJS.ask. Without the prototype, we couldn't hit deepJS.ask.
var reactJS = new Workshop("Clang");

deepJS.ask(", is this prototype a class?");
reactJS.ask(", prototypes seem ugly");
```

#### class{}
* Layered on top of the prototype system. A lot more clean than base prototypes.
* Ex:
```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Max");
var reactJS = new Workshop("Clang");

deepJS.ask(", is this prototype a class?");
reactJS.ask(", prototypes seem ugly");
```
* Very common in React. Best for building containers of data and whatnot.