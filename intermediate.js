//-------------- Scope -------------------//
// Root scope (window)

var fun = 5;

function funFunction() {
  //Child scope
  var fun = "hellooo";
  console.log(1, fun);
}

function funerFunction() {
  //Child scope
  var fun = "Byeee";
  console.log(2, fun);
}

function funestFunction() {
  //Child scope
  fun = "HAAAAAAA";
  console.log(3, fun);
}

console.log(4, fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);

// Part 2
var fun = 5;

function funFunction() {
  //Child scope

  console.log(fun);
  // what actually happend is that when we console.log fun the compiler search to find
  // variable fun in the function scope if he diden't find it he start looking for the parent scope
}

// ----------------------------------------- ES6 --------------------------------------------

const player = "bobyy";
let experience = 100;
let wizerdLevel = false;

if (experience > 90) {
  let wizerdLevel = true;
  // what let allow us to do is to create a scope when inside {  } so it doesn't need to be a function like we see in var
  // when we use var we create new scope only inside functions
}

// Object destructering

const obj = {
  player: "hamza",
  experience: 100,
  wizerdLevel: flase,
};

const { player, experience, wizerdLevel } = obj;

//------------------------------------------------//

const name = "Hiii ";
const obj = {
  [name]: "Hello",
  ["hamza " + "Benlafkih"]: "Developer",
  [1 + 2]: 3,
};

// output : {3: 3, "Hiii ": "Hello", hamza Benlafkih: "Developer"}

//-- exercice

// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;
a = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

//-- solution

// change everything below to the newer Javascript!

// let + const
let a = "test";
const b = true;
const c = 789;
a = "test2";

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = "test";
const b = true;
const c = 789;

const okObj = { a, b, c };

// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol("This is my first Symbol");
const sym2 = Symbol("This is my first Symbol");

console.log(sym1.description);

// Arrow functions
const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};

// ----------------------- Advenced functions ---------------------------------------

//--- exercice

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

//What are the two elements of a pure function?

//------ solution

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3); // returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // 31

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); // 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

// ---------------------advenced loop--------------------------------------------------

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach((item) => {
  console.log(item);
});

for (let item in detailedBasket) {
  console.log(item);
}

for (let item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {}

function biggestNumberInArray2(arr) {}

function biggestNumberInArray3(arr) {}

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  return basket[lookingFor] ? true : false;
}

// my solution

const basket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  return basket[lookingFor] ? true : false;
}

console.log(checkBasket(basket, "floss"));

// ----- solution

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach((item) => {
  console.log(item);
});

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach((item) => {
    if (highest < item) {
      highest = item;
    }
  });
  return highest;
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}

biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`;
    }
  }
  return "that does not exist in your basket";
}

// --------------------advanced object -------------------------------------

//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');

// -------------------------advenced array --------------------------------------------

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const arr = [];
array.forEach((item) => {
  item.username += '!';
  arr.push(item)
})

console.log(arr);


//Create an array using map that has all the usernames with a "? to each of the usernames


//Filter the array to only include users who are on team: red


//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// ---solution

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
	let { username } = user;
	return user.username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, index) => {
	return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

// --------------------------------------------ES7-------------------------------------

// -----exercice

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #3) Create a function that calulates the power of 100 of a number entered as a parameter


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result



// ---solution

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000) // Infinity

// --------------------------------------------ES8-------------------------------------

// -----exercice

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

// ---solution

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

// --------------------------------------------ES10-------------------------------------

// -----exercice

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '



//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// ---solution

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//Solution:
console.log(array.flat(2))


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//Solution:
console.log(userEmail3.trimEnd().trimStart())


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
//Solution
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)
