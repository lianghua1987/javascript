class Person{
    constructor(fname, lname, dob){
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
    }

    greeting(){
        return `hello there ${this.fname} ${this.lname}  `;
    }

    getAge(){
        const diff = Date.now() - this.dob.getTime();
        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    }

    static add(x,y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '09-03-1987');
console.log(mary);
console.log(mary.greeting());
console.log(mary.getAge());
//console.log(mary.add(1,2));
console.log(Person.add(1,2));
