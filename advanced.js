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
