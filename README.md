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

#### Loops

#### Functions

## Types & Coercion

## Scope & Closures

## this Keyword & Prototypes