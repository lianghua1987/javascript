function Person(fname, lname){
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.fname} ${this.lname}`;
}

const person = new Person('hua','liang');

//console.log(person);

function Customer(fname, lname, phone, membership){
    // this.fname = fname;
    // this.lname = lname;
    // this.phone = phone;
    // this.membership = membership;
    Person.call(this, fname, lname);

    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

// Make customer prototype return Customer()
Customer.prototype.constructor = Customer;
Customer.prototype.greeting = function(){
    return `Hello there ${this.fname} ${this.lname} welcome to Hua world`;
}
const customer = new Customer('hua','liang', '2026319140', 'Standard');
console.log(customer);
console.log(customer.greeting());


