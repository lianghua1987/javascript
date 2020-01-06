let val;

const today = new Date();
let birthday = new Date('9-3-1987 00:55:00');
 birthday = new Date('September 3 1987 00:55:00');
 birthday = new Date('01/3/1987 00:55:00');

val = today;

val = today.toString();

val = birthday;

console.log(val);
console.log(typeof(val));

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getMilliseconds();
val = today.getTime();
console.log(val);


birthday.setMonth(2);
console.log(birthday);


