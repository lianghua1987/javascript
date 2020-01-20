class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
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

class Customer extends Person{
    constructor(fname, lname, age, phone){
        super(fname, lname);
        this.age = new Date(age);
        this.phone = phone;
    }


}

const john = new Customer('John', 'Williams', '09-03-1987', '202-631-9140');
console.log(john);
console.log(john.greeting());
