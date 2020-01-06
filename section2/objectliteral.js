const person = {
    first: 'hua',
    last: 'liang',
    age: 32,
    address: {
        city: 'nanjing',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    },
    hobbies: ['shooting', 'running']

}

let val;

val = person;

val = person.first;
val = person['first'];


val = person.getBirthYear();
val = person['address']['state'];

console.log(val);


const people = [
    {name:'tewst1', age: 52},
    {name:'bbb', age: 22},
    {name:'aaaa', age: 13}
];


for(let i=0; i<people.length; i++){
    console.log(people[i].name.concat(' ', people[i].age));
}

val = person.getBirthYear();
console.log(val);
