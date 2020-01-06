// function greet(){
//     console.log('test');
//     return 'hello world';
// }


// console.log(greet());


// function greet(par){
//     console.log(par);
//     return 'hello world';
// }


// console.log(greet('test'));

function greet(first = 'hua', last = 'liang'){
    console.log(first.concat(' ', last));
    return 'hello world';
}


console.log(greet('hu1a'));


//function expression

const squre = function(x=3){
    return x*x;
};

console.log(squre());

console.log(squre(9));


// immidiatley invokable function expressions = iifes

(function(){
    console.log('iife ran ...')
})();



(function(name){
    console.log('iife ran with name ...' + name)
})('hua liang');



const todo = {
    add: function(){
        console.log('add todo');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.add();
todo.add(1);
todo.edit();
todo.edit(1);

todo.delete = function(){
    console.log('delete to do');
}
todo.delete();