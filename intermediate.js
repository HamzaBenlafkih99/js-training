//-------------- Scope -------------------//
// Root scope (window)

var fun = 5;

function funFunction(){
    //Child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction(){
    //Child scope
    var fun = "Byeee";
    console.log(2, fun);
}

function funestFunction(){
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

function funFunction(){
    //Child scope
    
    console.log(fun);
    // what actually happend is that when we console.log fun the compiler search to find 
    // variable fun in the function scope if he diden't find it he start looking for the parent scope
}


// let + const

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