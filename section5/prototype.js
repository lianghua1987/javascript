//Object.prototype
//Person.prototype

function Person(fname, lname, dob){
    this.fname = fname;
    this.lname = lname;
    this.birthday = new Date(dob);
    this.pro = function(){

    }
}

const brad = new Person('Brad', 'shit', '09-30-1977');
const hua = new Person('Hua', 'liang' ,'1987-09-03');

Person.prototype.getAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() -1970);
}

Person.prototype.getFullName = function(){
    return `${this.fname} ${this.lname}`;
}

console.log(hua);
console.log(hua.getAge());
console.log(hua.getFullName());

console.log(hua.hasOwnProperty('fname'));
console.log(hua.hasOwnProperty('mname'));
console.log(hua.hasOwnProperty('pro'));
