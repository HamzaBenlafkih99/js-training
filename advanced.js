// ----------------------- code that eoptimize our javascript running -----------------------//

// 1 - inline caching

function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Hamza",
  lastName: "Ben",
};

findUser(userData);
findUser(userData);
findUser(userData);

/* 

inline caching is a really good programatic way that allow us optimize or js code
for example in the example from the top we called findUser() function multiple time 
with the same input and it will give us always the same output
so with inline caching the compiler say heyy i see that findUser() 
function called a lot of time with the same input, so i'm going to run it the first time
and keep the value so that when it called again i just give the result without actually going through 
the same proccess over and over again :)

*/

// 2 - hidden classes:  is what compiler use inder the hood

// --> this slow the compiler
function Animal(x, y) {
  this.x = x;
  this.y = y;
}
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

delete obj1.x;

// ------------------------------ call stack + memory heap --------------------------/

// memory heap
const number = 610; // allocate memory for number
const string = "same text"; // allocate memory for a string

const human = {
  // allocate memory for an object ... and it's values
  first: "hamza",
  second: "benlafkih",
};

// call stack

function substractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return substractTwo(sumTotal);
}

calculate(); // test it in console snippet

/* what does the call stack do is that we store calculate() function in memory 
and when we called it we pass that function the top of the stack, when it finished up 
we remove it from the stack
*/

// stack over flow

function inception() {
  inception();
}

/* stack over flow hahaha :) */

// Garbage collection

/* javascript is garbage collector language 
meaning if we store same data into our memory and we finished 
up using that data (no need of that data any more) we remove that data 
from our memory (collect our garbage) so that the memory doesn't store 
much data which assensely going to decrease the performance of the
programming language
so the momery management is already done for us :)
 */

// memory leak: fill up the momery

// The causes of memory leak:
// 1 - infinite loop
let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}
// infinite loop that fill up the memory :)

// 2 - global variables
var a = 1;
var b = 1;
var c = 1;

// event listeners

var element = document.getElementById("button");
element.addEventListener("click", onClick);
/** this keep adding listener to the memory even if we don't need them in certain context  */

// setInterval
setInterval(() => {
  // referencing objects ...
  /**these object is never going to be collected by the garbage collection
     because unles we clear it and stop it ,it's going to keep runing and runing
     */
});

// WEB API

console.log("1");
setTimeout(() => {
  console.log(2);
}, 1000);
console.log("3");

// output : 1
3;
2;

/* to understand what actually happening check this link
http://latentflip.com/loupe :: or watch the end of video 18 part fondamentals
*/

// ---------------------------- Fondamentals 2 ---------------------------------------//

// Execution context

/* 
execution context means that when the javascript engine see () 
which is a function it's going to create an execution context 
propre to that function on the stack 
*/

// Lexical Environment

/* Lexical Environment simply mean where you write something
   Like each function has his own universe (see images to more details :) )
*/

// Hoisting

/* 
 See the first image : 
 */

console.log("1--------------");
console.log(teddy);
console.log(sing());
var teddy = "bear";
function sing() {
  console.log("ohh la la la");
}

/* output: 
1--------------
undefined
ohh la la la

so does actually happend is that when javascript see console.log(variable)
 which is not defined yet it's going to say yeah this is a variable 
 i'm going to allocate memory for it 
 like when js engine see teddy, it's going to say ohh teddy its a variable so i'm going to allocate memory for 
 it and declare "var teddy = undefined"
 when it see sing(), it's going to say yeah this is a function so i'm going to move the declaration on the top 
 and allocate momery for it, (great right :) )  
 now why teddy is undefined and sing() is not
 so js engine consider that variable purchly hoisted which mean not in the right side 
 functions is fully hoisted both in left and right side

*/
// the same thing apply for this
console.log("1--------------");
console.log(teddy);
console.log(sing());
function sing() {
  console.log("ohh la la la");
}

// what if we do
console.log("1--------------");
console.log(teddy);
console.log(sing());
(function sing() {
  console.log("ohh la la la");
});

/* 
output: 
1--------------
undefined
error: Uncaught ReferenceError: sing is not defined
why is that: to hoist things js engine look if start with var of function 
but here in our example we didn't start with function word
so js engine hoist when we see only var and function (not ES6 sintaxe like let + const)
*/

// Exercice1 : hoisting
a();

function a() {
  console.log("hii");
}

function a() {
  console.log("bye");
}

// Output: bye

// Exercice2 : hoisting

var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

/*
Output: 
Original favourite food: undefined
New favourite food: sushi

why is that: we already mension that hoising is runing in every execution context
which is when we create new function, an execution context was created
and we look inside the function as unique universe that has his own variables
*/

// function Declaration

// function expression
var canada = () => {
  console.log("cold");
};
// function declaration
function india() {
  console.log("warm");
}
//////:::::::::::::::::::::::::::

function marry(person1, person2) {
  console.log(arguments);
  console.log(`${person1} is now married to ${person2}`);
}

marry("Tim", "Tina");

/* output : 
{
  0:"Tim",
  1:"Tina"
  }
  Tim is now married to Tina
*/

// now we will see that using arguments is bad for our js engine
// see image 1
function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
  console.log(`${person1} is now married to ${person2}`);
}

marry("Tim", "Tina");

/* 
output: 
{
0:"Tim",
1:"Tina"
}
(2) [
"Tim",
"Tina"
]
Tim is now married to Tina
*/

function marry2(...args) {
  console.log(args);
  console.log(Array.from(arguments));
  console.log(`${args[0]} is now married to ${args[1]}`);
}

marry("Tim", "Tina");

/*
 [
"Tim",
"Tina"
]
(2) [
"Tim",
"Tina"
]
Tim is now married to Tina
*/

// se image 2

//Variable Environement
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one(); // 2. New execution context is created on top of the stack.

// scope chaining
/* 
see image 3 in functions which mean that every function has access 
to the parent context which mean variable invironment has acess to 
*/

const x = "x";
function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Andrei Neagoie";
}

function sayMyName() {
  var x = "haha";
  var a = "a";
  return findName();
}

sayMyName(); // output : x

// other example

// Scope:
// this deferent from the last one (see image 4)
function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(c);
    return function printName() {
      var c = "c";
      console.log(a);
      return "Andrei Neagoie";
    };
  };
}

sayMyName()()(); // output : a

// javascript weird exercice

// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
// so we use 'use strict' to void such as weird behavior of js
function weird() {
  height = 50;
}

var heyhey = function doodle() {
  // code here
};

heyhey();
doodle(); // Error! because it is enclosed in its own scope.

// Block scope

//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final: " + i);
}

// output:
/* 
0
1
2
3
4
final: 5
*/

//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final: " + i);
}

/* output: 
0
1
2
3
4
error: Uncaught ReferenceError: i is not defined
comment: 
this happend because of block scope which mean wenever we see let or const it' inside {}
not necesecrely function like var we're gonna create new execution context (new world) that outside world does not
access to
*/
// global variable: see the example folder called global

// IIFE: immediately invoked function expression

(function () {
  var a = 1;
})();

a; // error we can't access this

// this keyword: se image "this"

//this
const obj = {
  name: "Billy",
  sing() {
    return "llala " + this.name + "!";
  },
  singAgain() {
    return this.sing();
  },
};

function importantPerson() {
  console.log(this.name);
}

const name = "Sunny";
const obj1 = { name: "Cassy", importantPerson: importantPerson };
const obj2 = { name: "Jacob", importantPerson: importantPerson };

obj2.importantPerson(); //output: Jacob
// this benefits us execute the same code for multiple objects

// -- Dynamic scope vs lexical scope

//Exercise:
const a = function () {
  console.log(this);
  const b = function () {
    console.log(this);
    const c = {
      hi: function () {
        console.log(this);
      },
    };
    c.hi();
  };
  b();
};

a(); // run it

//JS is weird:
const obj = {
  name: "Billy",
  sing: function () {
    console.log(this); // in this case, it's a method on an object.
    var anotherFunc = function () {
      console.log(this); // this points to windows! --> problem right :(  let's see how we can fixe it
    };
    anotherFunc();
  },
};

obj.sing();

/*
the solution is to replace anotherFunc normal function syntax with arrow function that allow us lexecly bind "this"
and it's going to be  like this
*/

const obj = {
  name: "Billy",
  sing: function () {
    console.log(this); // in this case, it's a method on an object.
    var anotherFunc = () => {
      console.log(this);
    };
    anotherFunc();
  },
};

obj.sing();

// but before we have ES6 module we do it like this

const obj = {
  name: "Billy",
  sing: function () {
    console.log(this); // in this case, it's a method on an object.
    var anotherFunc = function () {
      console.log(this);
    };
    return anotherFunc.bind(this);
  },
};

obj.sing();

// Call() apply() bind()

// 1 call()
const wizard = {
  name: "Merlin",
  health: 100,
  heal() {
    return (this.health = 100);
  },
};

const archer = {
  name: "Robin Hood",
  health: 50,
};

console.log("1: " + archer); // output: {  name: "Robin Hood",  health: 50, }
wizard.heal.call(archer, 50, 60);
console.log("2: " + archer); // output: {  name: "Robin Hood",  health: 10 0, }
// 2 - call() + apply():  difference is that apply() we pass method parameteres in an array
const wizard = {
  name: "Merlin",
  health: 100,
  heal: function (num1, num2) {
    this.health += num1 + num2;
  },
};

const archer = {
  name: "Robin Hood",
  health: 50,
};

wizard.heal.call(archer, 50, 60);
wizard.heal.apply(archer, [20, 30]);
archer;
wizard.heal.apply(archer, [20, 30]);

// function borrowing
/* the bind function is different a little bit from call() and apply() 
it does not run the function it return the function which mean 
we can assign it into a variable and use it like so
*/

const healArcher = wizard.heal.bind(archer);
console.log(archer);
healArcher();
console.log(archer);

// -- function currying

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
