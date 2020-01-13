// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad);


function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        return new Date(diff).getUTCFullYear() -1970;
    }
}

const brad = new Person('Brad', '09-30-1977');
const hua = new Person('Hua', '1987-09-03');
console.log(brad);
console.log(hua.getAge());