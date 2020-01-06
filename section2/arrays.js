const number = [43, 38, 29, 53,5,14,16,84,64,77,45];


const number2 = new Array(43, 53,5,14,16,84,64,77,45);

const fruit = new Array('apple','banana', 'orange', 'pear');

const mixed = [22, 'hello', undefined, true, false, {a:1, b:1}, new Date(), NaN];

// console.log(mixed);

// console.log(Array.isArray(number));
// console.log(mixed.length);

// console.log(mixed[2]);


// mixed[1] = 'world';

// console.log(mixed);

// console.log(number);

// number.push(888);
// console.log(number);

// number.unshift(666);
// console.log(number);

// number.pop();
// console.log(number);


// number.shift(666);
// console.log(number);

// number.splice(1,3);

// console.log(number);

// number.reverse();
// console.log(number);

// let val;

// val = number.concat(fruit);
// console.log(val);


val = number.sort();
console.log(val);

// user compare
val = number.sort(function(x,y){
    return x-y;
});
console.log(val);

val = number.sort(function(x,y){
    return y-x;
});
console.log(val);


function under40(num){
    return num <40;
}

val = number.find(under40);

console.log(val);s