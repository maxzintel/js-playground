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

#### Expressions vs Statements

#### If & Else

#### Loops

#### Functions

## Types & Coercion

## Scope & Closures

## this Keyword & Prototypes