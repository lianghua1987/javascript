const first = 'hua';
const last = 'liang';

let val;

val = first + last;

console.log(val);

val = first.concat(' ', 'N/A ' + last).toUpperCase();

console.log(val);

val = first[0];
console.log(val);


val = first.indexOf('u');
console.log(val);


val = first.charAt('2');
console.log(val);

const greeting = 'hello world and good night hua liang';

val = greeting.slice(-5);
console.log(val);

val = greeting.split(' ');
console.log(val);

val = greeting.includes('hua');
console.log(val);