let re;

re = /hello/

re = /hello/i; //case insensitive
re = /hello/gi; // global search


console.log(re);
console.log(re.source);


// exec() - return result in an array or null
//const result = re.exec('hello world hua');
//const result = re.exec('hua tes hu adf 123 hello world hua');
const result = re.exec('hua tes hello hu adf 123 hello world hua');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);


// test() - return true or false if there is match

const result1 = re.test('Hello');
console.log(result1);


let str = 'hua tes hello hu adf 123 hello world hua';
const result2 = str.match(re);
console.log(result2);

// search() - return index of first match, return -1 if not found
const result3 = str.search(re);
console.log(result3);

str = 'some dummy shit';
const result4 = str.search(re);
console.log(result4);

// replace() - return a new string with some or all matches of a pattern
str = 'hua tes hello hu adf 123 hello world hua';
const newStr = str.replace(re, 'regex replacement shit');
console.log(newStr);