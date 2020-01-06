let i = 20;

do{
    console.log('number ' + i);
    i++;
}
while(i<10)


const cars = ['lexus', 'volvo', 'bmw', 'mercedes', 'ford'];

// for(let i = 0; i< cars.length; i++){
//     console.log(cars[i]);
// }


cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);
    console.log(array);
})


// map

const users = [
    {id: 1, name: 'hua1'},
    {id: 2, name: 'hua2'},
    {id: 3, name: 'hua3'},
];


const ids = users.map(function(user){
    return user.id;
});

console.log(ids);


const user = {
    name: 'hua liang',
    age: 12,
    sex: 'M'
};

for(let x in user){
    console.log(x + ': ' + user[x]);
}