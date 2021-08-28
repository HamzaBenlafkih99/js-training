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