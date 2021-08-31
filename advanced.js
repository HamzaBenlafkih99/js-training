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
console.log("2: " + archer); // output: {  name: "Robin Hood",  health: 100, }
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

// -- function currying:  mean parcialy give a function a parameter

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

// ---------------------- Types in JS --------------------------------//

/*
// Primitive
Number
Boolean
String
Undefined
null
Symbol("it's me :)")
// Non-Primitive
{}
[]
function(){}

// se image 1 in types folder
 */

true.toString(); // output: "true"
/* 
why is that, we already say that true is a primitive type, so why we act like an aobject
when js engine see this kind of instruction inder the hood is going to read it like this
Boolean(true).toString() which is weird hahahaha
*/

// ---------------------- Pass By REFERENCE VS BY VaALUE----------/
// see image 2
/*
Primitive types are emuteble which mean we can not change them 
for example if had { var a = 5} and after a while we change it to a = 10 
js engine not change it, he remove the previous value and create new one for us 
not like object we can change it in the same place in memory 
*/

// example

var c = [1, 2, 3];
var d = c;
d.push(4);

console.log(c); // [1,2,3,4]
console.log(d); // [1,2,3,4]

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj);
/*
output: 
{
a:"a",
b:"b",
c: {
deep:"hahaha"
}
}
*/
console.log(clone);
/*
output: 
{
a:"a",
b:"b",
c: {
deep:"hahaha"
}
}
*/
console.log(clone2);
/*
output: 
{
a:"a",
b:"b",
c: {
deep:"hahaha"
}
}
*/
/* 
this what we called shalow clone which mean we copy just the first level of the object 
not the second object which mean clone and clone2 and object still have the same reference to the object
we can super clone to solve the problem using Json :)
*/
console.log(superClone);

/*
output: 
{
a:"a",
b:"b",
c: {
deep:"try and copy me"
}
}
*/

// -------------------- Type coercion ------------//

// ------ Functions are objects
// Another way to call functions
const four = new Function("return 4");
four(); // output: 4

const four = new Function("num", "return num");
four(4); // output: 4

/* this is called function constructor */

function woohooo() {
  console.log("woohooo");
}

woohooo.yell = "ahhaaaa";

/*
what is happend inder the hood
const specialObj = {
  yell: 'ahhhhhh',
  name: woohooo,
  ()=> console.log(woohooo)
}
*/

// see image 1 in pillars folder
/* it show how function object looks like behind the scense :) */

// ---- Functions are first class citizens in js

/* This is mean that : 
1 - functions can be assign to variables and properties of object
for example
------------
var stuff = function(){}
2 - functions can be arguments to another function 
for example: 
-------------
function a(fn){
  fn()
}
a(function(){ console.log('hi there') })

3 - return function as value from another function
for example:
------------
function b(){
  return c(){
    console.log('Bye')
  }
}
var d = b();
d();
*/

// Higher order function
/* 
--means that function take an argument a function
or
-- a function that return another function
*/

// now see the second image : and we gonna work with little gogo :) which is function without params
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return "Access Granted to Adm";
}
function letHamzaLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return "Access Granted to Hamza";
}
letAdamLogin();
letHamzaLogin();
// we repeat our self right and it's not very Efficient right :(

// let's move into the next gogo from the second image

const giveAccessTo = (name) => "Access Granted to " + name;

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}
letUserLogin("Hamza");

// this is amazing right :), we just tell to our function what data to use

// so what problem  if we use function this way
/*
example: if we have not just one type of user login, if we have for example admin user as well 
using functions this way is going to be like this
*/

function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 50000000; i++) {
    array.push(i);
  }
  return giveAccessTo(admin);
}
letUserLogin("Yahya");
// not really efficient :(
// the Higher order function is cam in :) ohhooo :)))

function authenticate(verifiy, person) {
  let array = [];
  for (let i = 0; i < verifiy; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}
// HOF
function letPerson(person, fn) {
  if (person.level === "admin") {
    return fn(500000, person);
  } else if (person.level === "user") {
    return fn(500000, person);
  }
}

letPerson({ level: "user", name: "Hamza" }, authenticate);
letPerson({ level: "admin", name: "Akkab" }, authenticate);

// Generic powerful function :), this is really dynamic
// other example

const multiplyBy = (nbr) => (nbrTwo) => nbr * nbrTwo;

const multipleByTwo = multiplyBy(2);
console.log(multipleByTwo(5));
