const val = 100;

if(val == '100'){
    console.log("correct");
} else {
    console.log("incorrect");
}


if(val === '100'){
    console.log("correct");
} else {
    console.log("incorrect");
}

if(val === 100){
    console.log("correct");
} else {
    console.log("incorrect");
}

let id = 100;
if(typeof id !== 'undefined'){
    console.log(`the id is ${id}`);
} else {
    console.log("no id here");
}