//global scope
var a = 1; 
let b = 2;
const c = 3;


// func scope
function test(){
    var a = 4; 
    let b = 5;
    const c = 6;

    console.log("func scope - a:" + a + ", b:" + b + ", c:" + c);
}

test();
console.log("global scope - a:" + a + ", b:" + b + ", c:" + c);


var x = 11; 
let y = 22;
const z = 33;


// func scope
if(true) {
    var x = 44; 
    let y = 55;
    const z = 66;
    console.log("block scope(messed up var, see x's value) - x:" + x + ", y:" + y + ", z:" + z);
    
}


console.log("global scope - x:" + x + ", y:" + y + ", z:" + z);


let i = 0;

for(let i =0; i <10; i++){
    console.log(`loop: ${i}`);
}

console.log("begin i = 0 at then end i is " + i);

var j = 0;

for(var j =0; j <10; j++){
    console.log(`loop: ${j}`);
}

console.log("begin j = 0 at then end j is " + j);