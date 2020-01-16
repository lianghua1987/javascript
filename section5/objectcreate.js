const personPrototypes = {
    greeting: function(){
        return `hello greeting ${this.fname} ${this.lname}`;
    },
    getMarried: function(newLname){
        this.lname = newLname;
    }
}

const hua = Object.create(personPrototypes);
hua.fname = 'hua';
hua.lname = 'liang';
hua.age = 32;
console.log(hua);
hua.getMarried('Zong');
console.log(hua.greeting());


const hl = Object.create(personPrototypes, {
    fname: {value: 'h'},
    lname: {value: 'l'},
    age: {value: 32}
});

console.log(hl);
console.log(hl.greeting());
