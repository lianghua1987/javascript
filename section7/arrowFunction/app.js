// const sayHello = function(){
//   console.log('hello');
// }


// const sayHello = () => {
//   console.log('hello');
// }

// one line function does not need braces
// const sayHello = () => console.log('hello');

// same as above, one line return
// const sayHello = () => 'Hello World';

// return object
// const sayHello = () => ({msg: 'hello hua'});

// single prarm does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('Hua');

//console.log(sayHello());

// const sayHello = (fname, lname) => console.log(`Hello ${fname}, ${lname}`);
// sayHello('hua', 'liang');

//  const sayHello = name => console.log(`Hello ${name}`);
//  sayHello('Hua');

 const users = ['hua', 'william', 'joe'];
//  const nameLength = users.map(function(name){
//     return name.length;
//  });

const nameLength = users.map(name => name.length);
console.log(nameLength);