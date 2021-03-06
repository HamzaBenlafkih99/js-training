// ----------------------- code that optimize our javascript running -----------------------//

// 1 - inline caching

function findUser(nbr) {
  return nbr + 2;
}

const userData = {
  firstName: 'Hamza',
  lastName: 'Ben',
};

findUser(userData);
findUser(userData);
findUser(userData);

/* 

inline caching is a really good programatic way that allow us optimize or js code
if we use the same method repeatetly, the compiler optimize this using inline caching
for example in the example from the top we called findUser() function multiple time 
with the same input and it will give us always the same output
so with inline caching the compiler say heyy i see that findUser() 
function called a lot of time with the same input, so i'm going to run it the first time
and keep the value so that when it called again i just give the result without actually going through 
the same proccess over and over again :)

*/

// 2 - hidden classes:  is what compiler use inder the hood --> it's something that the compiler
//does for us to instanciate all object with the same hidden classes, so if we do delete some properties
//in a object we just change the hidden class and it's going to deoptimize our compiler

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
const string = 'same text'; // allocate memory for a string

const human = {
  // allocate memory for an object ... and it's values
  first: 'hamza',
  second: 'benlafkih',
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

/* javascript is garbage collected language 
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

setTimeout(() => console.log(6), 0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// example explain why setTimeOut is bad practice

function placeOrder(oNum) {
  console.log('Customer order', oNum);
  cookAndDeliverFood(function () {
    console.log('Deliverd food order:', oNum);
  });
}

//Simulate a 5s operation
function cookAndDeliverFood(callback) {
  setTimeout(callback, 5000);
}

//Simulate User requests;
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);

/*
output : 
Customer order 1 
Customer order 2 
Customer order 3 
Customer order 4 
Customer order 5 
Deliverd food order: 1 
Deliverd food order: 2 
Deliverd food order: 3 
Deliverd food order: 4 
Deliverd food order: 5
*/

// event listeners

var element = document.getElementById('button');
element.addEventListener('click', onClick);
/** this keep adding listener to the memory even if we don't need them in certain context  */

// setInterval
setInterval(() => {
  // referencing objects ...
  /**these object is never going to be collected by the garbage collection
     because unles we clear it and stop it ,it's going to keep runing and runing
     */
});

// WEB API

console.log('1');
setTimeout(() => {
  console.log(2);
}, 1000);
console.log('3');

// output : 1
//3;
//2;

/* to understand what actually happening check this link
http://latentflip.com/loupe :: or watch the end of video 18 part fondamentals
*/

// ---------------------------- Fondamentals 2 ---------------------------------------//

// Execution context

/* 
execution context means that when the javascript engine see () 
which is a function it's going to create an execution context 
unique to that function on the stack 
*/

// Lexical Environment

/* Lexical Environment simply mean where you write something
   Like each function has his own universe (see images to more details :) )
*/

// Hoisting

/* 
is the behavior of moving to the top of the respective environment during the creation phase
*/

/* 
 See the first image : 
 */

console.log('1--------------');
console.log(teddy);
console.log(sing());
var teddy = 'bear';
function sing() {
  console.log('ohh la la la');
}

/* output: 
1--------------
undefined
ohh la la la

 so what does actually happend is that when javascript engine see console.log(variable)
 which is not defined yet it's going to say yeah this is a variable 
 i'm going to allocate memory for it 
 like when js engine see teddy, it's going to say ohh teddy its a variable so i'm going to allocate memory for 
 it and declare "var teddy = undefined"
 when it see sing(), it's going to say yeah this is a function so i'm going to move the declaration on the top 
 and allocate momery for it, (great right :) )  
 now why teddy is undefined and sing() is not
 so the js engine parcialy hoisted variable which mean not in the right side and 
 functions is fully hoisted both in left and right side

*/
// the same thing apply for this
console.log('1--------------');
console.log(teddy);
console.log(sing());
function sing() {
  console.log('ohh la la la');
}

// what if we do
console.log('1--------------');
console.log(teddy);
console.log(sing());
(function sing() {
  console.log('ohh la la la');
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
  console.log('hii');
}

function a() {
  console.log('bye');
}

// Output: bye

// Exercice2 : hoisting

var favouriteFood = 'grapes';

var foodThoughts = function () {
  console.log('Original favourite food: ' + favouriteFood);

  var favouriteFood = 'sushi';

  console.log('New favourite food: ' + favouriteFood);
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

// function Declaration vs function expression

// function expression
var canada = () => {
  console.log('cold');
};
// function declaration
function india() {
  console.log('warm');
}
/* 
canada() function get run during execution time, but india() get executed during pasing time when 
the compiler goes through the intire file and start hoist var and functions
*/
//////:::::::::::::::::::::::::::

function marry(person1, person2) {
  console.log(arguments);
  console.log(`${person1} is now married to ${person2}`);
}

marry('Tim', 'Tina');

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

marry('Tim', 'Tina');

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

marry('Tim', 'Tina');

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
to the parent context which mean what variable invironment has acess to 
*/

const x = 'x';
function findName() {
  console.log(x);
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c';
  return 'Andrei Neagoie';
}

function sayMyName() {
  var x = 'haha';
  var a = 'a';
  return findName();
}

sayMyName(); // output : x

// other example

// Scope:
// this deferent from the last one (see image 4)
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    //console.log(c);
    return function printName() {
      var c = 'c';
      console.log(a);
      return 'Andrei Neagoie';
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

// Block scope vs Function Scope

//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final: ' + i);
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
  console.log('final: ' + i);
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

/*
the problem is that we have what we called variable collision image 1 global
(ovrride variable with another value), which possibly create a lot of bugges
we can ovaid this behavior, we have what we called IIFE: immediately invoked function expression like below

*/

// IIFE: immediately invoked function expression

(function () {
  var a = 1;
})();

a; // error we can't access this, because
/*
we can place all our variables and function or any sort of information inside this local scope
so that w don't worry to much about namespace collision
see index.html in global folder -> as you can see we are avoiding collision between the two function a()
see image 1 to clear the picture for you :), well that cool right :)

we can use Jquery here, so when add jquery script we pull out our global object (window)
to unsur it see image 2, cool :)
Now, we can do something like so -> image 3, as you can see we pass what jquery provide us into IIFE function
if you notice we diden't directly use $ signe, because if we do that, inside IIFE we look first into the local scope 
we didn't find $ variable after that we go up to see if global scope has it for me
soo when we pass it as a parameter we immediatly find it, how performant is that :), 
we are avoiding scope chain lookup
*/

// this keyword: se image "this"

//this : we have 2 benefits
// benefit 1 :gives methods access to their object
const obj = {
  name: 'Billy',
  sing() {
    return 'llala ' + this.name + '!';
  },
  singAgain() {
    return this.sing();
  },
};

function importantPerson() {
  console.log(this.name);
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson };
const obj2 = { name: 'Jacob', importantPerson: importantPerson };

obj2.importantPerson(); //output: Jacob
// benefit 2 :  execute the same code for multiple objects

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
  name: 'Billy',
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
and it's going to be  like below, so that we have lexical scope in our code
*/

const obj = {
  name: 'Billy',
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
  name: 'Billy',
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
  name: 'Merlin',
  health: 100,
  heal() {
    return (this.health = 100);
  },
};

const archer = {
  name: 'Robin Hood',
  health: 50,
};

console.log('1: ', archer); // output: {  name: "Robin Hood",  health: 50, }
wizard.heal.call(archer, 50, 60);
console.log('2: ', archer); // output: {  name: "Robin Hood",  health: 100, }
// 2 - call() + apply():  difference is that apply() we pass method parameteres in an array
const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function (num1, num2) {
    this.health += num1 + num2;
  },
};

const archer = {
  name: 'Robin Hood',
  health: 50,
};

wizard.heal.call(archer, 50, 60);
archer;
wizard.heal.apply(archer, [20, 30]);
archer;

// function borrowing
/* 
Function borrowing allows us to use the methods of one object on a different object 
without having to make a copy of that method and maintain it in two separate places. 
It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist 
to explicitly set this on the method we are borrowing.

the bind() function is different a little bit from call() and apply() 
it does not run the function it return the function which mean 
we can assign it into a variable and use it like so
*/

const healArcher = wizard.heal.bind(archer);
console.log(archer);
healArcher();
console.log(archer);
/*
review : call() and apply() are usefull for borrowing method of an object
bibnd() : is usefull for us to call functions later on with a certain context of certain this keyword
*/

// -- function currying:  mean parcialy give a function a parameter

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

// scope vs context
/*
scope, is a function base, means what are variables access of a function, 
context in other hand is more of object base, context say what the value of this keyword, which mean it's refers to
the visibility of variables.
which means it's most often determen by how a function is envoke with the value of this keyword

*/

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
this is called "wrapper object" -> wrapping primitive type with an object
why is that, we already say that true is a primitive type, so why we act like an aobject
when js engine see this kind of instruction inder the hood is going to read it like this
Boolean(true).toString() which is weird hahahaha
*/

// ---------------------- Pass By REFERENCE VS BY VALUE----------/
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
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me',
  },
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
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

// ------ Functions are objects
// Another way to call functions
const four = new Function('return 4');
four(); // output: 4

const four = new Function('num', 'return num');
four(4); // output: 4

/* this is called function constructor */

function woohooo() {
  console.log('woohooo');
}

woohooo.yell = 'ahhaaaa';

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

// ------------ Functions are first class citizens in js

/* This is mean that : 
1 - functions can be assign to variables and properties of an object
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
-- means that function take an argument a function
or
-- a function that return another function
*/

// now see the second image : and we gonna work with little gogo :) which is function without params
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return 'Access Granted to Adm';
}
function letHamzaLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return 'Access Granted to Hamza';
}
letAdamLogin();
letHamzaLogin();
// we repeat our self right and it's not very Efficient right :(

// let's move into the next gogo from the second image

const giveAccessTo = (name) => 'Access Granted to ' + name;

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}
letUserLogin('Hamza');

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
letUserLogin('Yahya');
// not really efficient :(
// the Higher order function is came in :) ohhooo :)))

function authenticate(verifiy, person) {
  let array = [];
  for (let i = 0; i < verifiy; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}
// HOF
function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(500000, person);
  } else if (person.level === 'user') {
    return fn(500000, person);
  }
}

letPerson({ level: 'user', name: 'Hamza' }, authenticate);
letPerson({ level: 'admin', name: 'Akkab' }, authenticate);

// Generic powerful function :), this is really dynamic
// other example

const multiplyBy = (nbr) => (nbrTwo) => nbr * nbrTwo;

const multipleByTwo = multiplyBy(2);
console.log(multipleByTwo(5));

// First pillars: Closures

// see image 3
// example

function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}
a()()();
/* 
when we run a function it's get pop off the stack and when we finish from it we collect the garbage with all variables
but what actually happend here, is that function c() remenber what grandpa and father are, which is enaspected behavior
but in this cas the garbeg collection when he saw a closures it doesn't remove it from the memory 
heap which mean we let him know that there are some references to these variables which is realy powerfull
*/

//closures and higher order function
function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`${string} ${name2}, ${name}`);
    };
  };
}

const boo = (string) => (name) => (name2) =>
  console.log(`${string} ${name2}, ${name}`);

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo('sing');
// waiting 5 years haha
booStringName = booString('John');
booStringNameName2 = booStringName('tanya');

//exercise: this is a closure because we returning another function even if inside setTimeout web api
function callMeMaybe() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi I'm now here!";
}

callMeMaybe();

// output:  "Hi I'm now here!"
/* 
whi is that 
what actually happening here, is that when js engine see setTimeout it's going to pass that intp web api world
but js doesn't stop it keep runing and it store callMe variable and it's not garbege collected because js engine 
already notice that we have closures here however we have setTimeOut which is not part of js but js engine doesn't care
it's going to store that value for us to use it as a reference :)
how cool is that :)))
*/

/* 
Closures are good in :
--> Memory efficient
--> Encapsulation
*/

// memory efficient

function heavyDuty(item) {
  const bigArray = new Array(7000).fill('????');
  console.log('created!');
  return bigArray[item];
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);
/* 
in this example every time we call the function we create a massive array and we remove it when we finished
but that sound not very efficient right :)
isn't cool if we create this array the first time and store it because we know that we're gonna be using it a lot
*/

// but i dont want to pollute the global namespace..
function heavyDuty2() {
  const bigArray = new Array(7000).fill('????');
  console.log('created Again!');
  return function (item) {
    return bigArray[item];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(699);
getHeavyDuty(699);
getHeavyDuty(699);
// now we are efficient right :)

// 2--> Encapsulation

// Exercise:
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '????';
  };

  setInterval(passTime, 1000);
  return { totalPeaceTime };
};

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();
/* 
call this a lot of time and see that every time we have a new value this allow us to encapsulate the 
timeWithoutDestruction and not use it directly 
for example if we want to hide using lauch() function from outside word which has access to the variable 
environmlent of the scope chaine, in this example we do exacty that, this principle called "least previlage"
a big security principle when it comes to programming
how cool is that :)
*/

// Exercice 1

// Make it so that the initialize function can only be called once!
let view;
function initialize() {
  view = '????';
  console.log('view has been set!');
}

initialize();
initialize();
initialize();

console.log(view);
// solution

let view;
function initialize() {
  let view = '????';
  let called = 0;
  return () => {
    if (called > 0) {
      return;
    } else {
      view = '????';
      called++;
      console.log('view has been set!');
    }
  };
}

const startOnce = initialize();
startOnce(); // view has been set!
startOnce(); // undefined
startOnce(); // undefined

/*
How cool is that, now we force calling the function just once :))
*/

// Exercice 2
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}

/* 
output after 3 second: 
I am at index 4
I am at index 4
I am at index 4
I am at index 4

we want to print all the indexs
*/

// solution
// first way

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}

/* 
var is part of the global scope --> is going to intialise once and change every time we loop out 
let create a bloc scope which mean we create every time a block scope that accesble inside {} even 
setTimeOut finished after looping over the entire array
*/

// Other way : closures :)

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log('I am at index ' + closureI);
    }, 3000);
  })(i);
}

// ---------------------- Pillars --> Prototypes inheretance

/*
Prototypes inheretence is like class inheretence in java or c#, but js not OOP language, so js use what we called 
prototyple inheretance which mean object has access to properties and methods from another object using __proto__ 
like soo
*/
const array = [];
array.__proto__; // run it :)
array.__proto__.__proto__; // run it :)

const fun = function () {};
array.__proto__; // run it :)
array.__proto__.__proto__; // run it :)

const obj = {};
array.__proto__; // run it :)
// you will notice that arrays and functions at the end of the day are just objects

// example 1

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};
const lizardFire = dragon.sing.bind(lizard);
console.log(lizardFire()); // does not work
/* we wanna access to sing() method from dragon object, the problem is lizard object does not have fire property :(
  and also we want to inheret everything inside dragon object
 */
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire); // it's work
console.log(lizard.sing()); // it's work
/* 
when js engine see lizard.sing() is going to check if we have a method in lizard object, 
and if he doesn't find anything, he start to looking up of the prototype chaine which is the dragon 
object because we're just override the default prototype object with dragon

*/

// example 2
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;
for (let prop in lizard) {
  console.log(prop);
}

/* output :
name
fight
fire
sing
*/

// --- Now let's see a little about functions

function a() {}
a.hasOwnProperty('name'); // output: true
a.name; // output: "a"
a.hasOwnProperty('call'); // output: false
a.hasOwnProperty('bind'); // output: false
a.hasOwnProperty('apply'); // output: false

/* why is that : 
see image 4 pillars
you see that call and apply and bind not exist in a() function object and it's all exist in the base 
Function object which mean we can access it using a.__proto__ because we won't every function 
we define has these property which is occupy another place in memory
we want to be efficient in memory space and inheret those properties from the object up of the chain
soo we occupy just one space in memory --> efficient right :)

see also image 5
as you can see here in prototype inheretance we have always the idea of __proto__ link 
into prototype and prototype has __proto__ property (it's like linkedList :) )
*/

//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.__proto__; //run
Function.prototype; // run --> value is the same as multiplyBy5.__proto__

// Create our own prototypes:
var human = { mortal: true };
var socrates = Object.create(human);
console.log(socrates); // {} because the propery exist in one place in memory which is human
console.log(socrates.mortal); // true
human.isPrototypeOf(socrates); // true

// this way is better then using __proto__

//-- hard lesson

/*
prototype properties exist only in fuctions, see image 6

*/
function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.__proto__.__proto__;
Object.prototype;
/*
as you can see Object has access to prototype, what the fuck is that hhahah
because if we run "typeof Object" we get "function", that's alot, what's happening there :(
well Object is type of function because he has prototype property 
*/
multiplyBy5.__proto__.__proto__.__proto__;
typeof Object; // "function"
typeof {}; // "object"
typeof Object.prototype; // Object
// try this a little bit yourself

//--Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear();

//'1899'

//#Bonus
// Mofify .map() to print '????' at the end of each item.
console.log([1, 2, 3].map());
//1????, 2????, 3????

// solution

//question1

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date('1900-10-10').lastYear();
/*  
the arrow function does not work because arrow functions are lexicly scoped (determine what "this" value based on
where it's define, not where it's called), this is why if we do

Date.prototype.lastYear =  () => {
  console.log(this);
  return this.getFullYear() - 1;
};
it's going to give us the same same function we are actually calling, here we want dynamic scope which determin 
based on where we called the function, inour case we have "new Date('1900-10-10').lastYear();"
"this" keyword says, who called me, well it's the Date object, this is how we get "this.getFullYear()" property
how cool is that :)

solution 1
---------
*/
Array.prototype.map = function () {
  // what happens with arrow function here?
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + '????');
  }
  return arr;
};
console.log([1, 2, 3].map());

/*

Last Exercice with a solution
----------------------------

How would you be able to create your own .bind() method using call or apply.

Hint:

Function.prototype.bind = function(){
}

See the attached solution when you are ready!
*/
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};

// --------------------------- Oriented Object Programming -------------------------------//

// --> see image 1 in oop and create a programme from image 2 in oop

// !!! --> you should know that we start with basic solution step  by step until acheive programming paradims in image 3
// factory function : act like factories, they create objects for us
function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    atack() {
      return 'atack with ' + weapon;
    },
  };
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.atack();

/* 
The problem with factory function, imagine that if we have a ton of elfs, we need an additional space in memory
that is, if we take the name and weapon : those is going to be different from each Elfs, but attck() method
do the same job for every elfs instance, isn't nice to create space merory for it just once, and use it over
all the instanciation, cool right :), more extensible code right :)
*/

// Let's make it good programme using what we've already learn in prototypal inheretance --> object.create()

const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

console.log(sam.attack());
console.log(peter.attack());

/* 
object.create() based on what we've learned in prototype inheretance, Object.create() method allows us to create 
a link between "newElf" and "elfFunctions" (not create an object with "elfFunctions"), because "elfFunctions" now
is going to live in the Prototype of "Object" function, to make sur we are right here, if we do

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  console.log(newElf) : --> {} because "elfFunctions" lives in newElf.__proto__ which is exactly Object.prototype
  console.log(newElf.__proto__) --> it's going to log "elfFunctions" function
}

so that elfFunctions lives in one location, we're going to extend it whenever we're creating a new object
How cool is that :))

*/

//before that let see what we have :)

// --> constructor function

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return 'attack with' + this.weapon;
};

const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');

console.log(same.name);
console.log(same.atack());

/* 
we've already seen in functions that when we call a function a new execution context is created 
in our case when we "Elf" function, which has variable environment and also "this", if we see "this" 
obviously get point to the window object, but using new keyword, we say hay create a new object and return it
for me and change "this" to point to whenever object we create from "Elf" function, in our case -> sam and peter
and it also create the object and return it for us, how awesom is that :)
now as we know that standart "Function, Object, Date, Number ...", all of them are called functions constructor,
in our case we've created a custom constructor function called "Elf", so that we can do something like  
we have in img 4 of pillars ( the box in the middle represent Elf function), we use that to access prototype 
property and create an extendble function that whenever we create a new object, is going to use that attak() from one
location, so that when peter called attack, peter says, I doesn't have
attack() method, instead "peter"  when he doesn't find this method, he's goes up the prototype chaine using __proto__
and look if we have it, so attack() lives in one location, very efficient :)
*/

// Now the class keyword :))

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return 'attack with' + this.weapon;
  }
}

const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');

console.log(same.name);
console.log(same.atack());

console.log(sam instanceof Elf); // true

/*
does javascript has class ?
yes it has but just in a syntatic seggure which mean class keyword at the end of the day is just 
prototyple inheretance, and some peaple called it --> sudo classical inheretance
*/

// --- this keyword
// --> new binding

// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person('Xavier', 55);

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name);
  },
};

person.hi();

//explicit binding : when we detect what exactly "this" should refer to
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    console.log('hi' + this.setTimeout);
  }.bind(window),
};

person3.hi();

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name);
    };
    return inner();
  },
};

person4.hi();

// Class inheritance

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon);
    console.log('what am i?', this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    // this is like extending our prototype.
    return 'strongest fort in the world made';
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house');
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort();

// ------------------------------ Functional programming ---------------------------------------//

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// --------------- We're gonna give you the solution of this example at the end of the section

/* 
pure functions : there are two main things
--> a function has always return the same output given the same input
--> a function can't modify anything outside of itself (no side effect)
*/

//Side effects:
const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
}
function mutateArray2(arr) {
  arr.forEach((item) => arr.push(1));
}
//The order of the function calls will matter.
mutateArray(array);
mutateArray2(array);
array; // --> side effect

// pure functions

const array = [1, 2, 3];
function removeLastItem(arr) {
  const newArray = [].concat(array);
  newArray.pop();
  return newArray;
}

console.log(removeLastItem(array)); // [1, 2]
console.log(array); // [1, 2, 3] --> no side effect :)

function mutateArrayBy2(arr) {
  return arr.map((item) => item * 2);
}

console.log(mutateArrayBy2(array)); // [2, 4, 6]
console.log(array); // [1, 2, 3] --> no side effect cz map return new array

// example side effect

function a() {
  console.log('hi');
}

a(); // hi --> side effect because console.log is a window specific we're using the browser to log something to the console

// ---- now the second concept which is same input --> same output

function a(num1, num2) {
  return num1 + num2;
}

a(3, 4);
/*
no matter how many time we called it it's going to give us always the same output
and this is called referential transparency which mean
if i completely change this function to number 7 we will have noo effect in the program

*/

// -------------------------------- Idempotence: -----------------------------

// Idempotence
function notGood(num) {
  return Math.random(num);
}
notGood(5); // not always the same output

/*
The idea behind Idempotence is that, no mather the input is, we have or know exactly what the output going to be
Math.random() here, when running the function we know that's going to gives us a random numbe between 0 and 1
another example
--------------
if we have a function that delete a user from the database, no matter how many time we're calling it
we know that it's going to gives us the result we're expecting (like error Message = "User deleted successfuly")
even if the function deleteUser() communicat with the outside word, how cool is that :)
*/

function good() {
  return 5;
}

Math.abs(Math.abs(10));
// this mean no metter how i call the function inside of itself, it's going to return always the same thing

// Imperative vs Declarative

/*
Imperative code --> tell the machine what to do and how to do it
Declarative code --> tell the machine what to do and what should happend, it doesn't tell the computer how
to do things
*/

//imperative

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// this is an imperative code which mean we declare i we tell it to increment in each iteration

[1, 2, 3].forEach((num) => console.log(num));

// this time arround we have Declarative code which mean we don't tell it how to do things we're just
// tell it to console.log() the iterble item of the array

// ------- Imutibility --------

/*
Immutibility mean not changing the data, not changing the state
but instead copying the state and returning new state every time
*/

const obj = { name: 'Andrei' };
function clone(obj) {
  return { ...obj }; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana';
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);
// we don't change the global state which is "obj"

//HOF
const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});
//Closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = closure();
incrementFn();
incrementFn();
incrementFn();

// --- Currying

const multiply = (a, b) => a * b;

const multiplyCurrying = (a) => (b) => a * b;

const multipleByTwo = multiplyCurrying(2);
console.log(multipleByTwo(4)); // output: 8

//-- partial application

//Partial Application
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(10, 20);

// --- Dynamic programming

function addTo80(nbr) {
  console.log('takes a long time ...');
  return nbr + 80;
}
addTo80(5);
addTo80(5);
addTo80(5);

/*
imagine that the operation is a little bit complexe and take time
how we can optimize this in order to not repeat the same operation over and over
this is when we can use caching or what we called memoization
*/

let cache = {};

function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time ...');
    cache[n] = n + 80;
    return cache[n];
  }
}
memoizeAddTo80(5); // output
//--> long time ...
//--> 85
memoizeAddTo80(5); // output: 85 --> amazing right

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));

/* this is the power behine caching, we don't repeat ourselfs, so if the function take time to run
we're running for a long time when the first time we called the function, in the second calls, function realize that
we've already done the same work before, so i'm going to return just the same result that i've already memoize
how cool is that :)
*/

// Compose

const compose = (f, g) => (data) => f(g(data));
const multipleByThree = (nbr) => nbr * 3;
const makePositive = (nbr) => Math.abs(nbr);
const multipleByT3AndAbsolute = compose(multipleByThree, makePositive);

/*  
composobility is a system design principle that deals with the relationship between components 
which mean, composing differents components of a factory that's work on a given data, and a highly composeble
system provide components that can be selected in various combinations
*/

// Pipe
/* 
essencialy the same thing exept instead of right to left it goes left to right
*/

const Pipe = (f, g) => (data) => g(f(data)); // the opposite of compose :)

// Arity --> number of arguments a function takes for example "multipleByThree" has an arity of 1
// "compose" has an arity of 2

/* there is a javascript library that help writing complexe js
https://ramdajs.com/docs
we can use it for compose and pipe if we want :)
*/

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: 'laptop', price: 200 });

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      item: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

function refundItem() {}

// --------------- Asyncronous programming ---------------//

// see image 1 async programming

/* 
promise.all() take an array of promises and return the resolved values as an array as you 
can see in the image with the console
see image 2 and 3 to understand more :) 
*/

// -------- Async await

// see image 4 and 5

//-------- object and array spread operator  see --> img 6 7 8

// ---------- Finally Promise block --> see image 9 10

// ------- for await of --> image 11

// Paralell, Sequance and Race
/* imagine we have 3 promises, we can call it like -->
--> in parallel : which mean do all the promises in parallel
--> in Sequance : when the first one is finished, start the second one and so on
--> in Race:  i want you to do all promises, and the first one finished, just grab the value and ignore others
*/

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

parallel().then(console.log); // output: parallel is done:  a b c

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

race().then(console.log); // race is done: a

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

/* race finished first --> then parallel -> then sequence  */

//------- allSettled

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));

/* 
output:Uncaught (in promise)
because promise.all get resloved when all promises are resolved
*/

Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));

/*
output : 
[{ status:"fulfilled", value:undefined }, { status:"rejected", reason:undefined }]

allSettled does not care if the promise resolved of rejected
*/

// ---------------------------- modules ---------------------------------//

var harry = 'potter';
var voldemort = 'He who must not be named';
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

fight(harry, voldemort);

/* 
The problem with this script is that we define harry and voldermort and also fight function in the global scope 
what if some developers come in and just create another script and declare var fight = "haha" 
it's going to ovveride the fight function with haha variable, not good at all :(

--> we can solve this problem using IIFE
*/

(function () {
  var harry = 'potter';
  var voldemort = 'He who must not be named';
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  fight(harry, voldemort);
})();

/* now if we declare var fight = haha; --> now we can't change fight function because it's in his own 
scope which is inside the function, how cool is that :)
now what if we wanna share fight function in others script

--> we can do this
*/

var fightModule = (function () {
  var harry = 'potter';
  var voldemort = 'He who must not be named';
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  return {
    fight,
  };
})();

/* now other script can access to fight function as we want :) 
this is great, but still have an issue here, fightModule is still polute the global space
which mean anyone can overwritten it :(
*/

// --> solution : commonJs and AMD

// comonJs --> require - module.exports

// ---- ES6 modules --> like what we have in react
/* in order for us to use ES6 module in natuve js, we need to specifie type of script as a module script
--> see image 1 module folder to understand
*/

//after finishing the cours read this : https://www.toptal.com/javascript/10-most-common-javascript-mistakes
