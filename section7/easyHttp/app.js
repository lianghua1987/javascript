const http = new easyHttp();

http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err){
        console.log(err);
    } else{
        console.log(response);
    }
});


const data = {
    name: 'Hua Liang',
    title: 'Custom Post',
    body: 'This is a custom post'
}

const data1 = {
    name: 'Hua Liang',
    title: 'Custom Put',
    body: 'This is a custom put'
}
http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, response){
    if(err){
        console.log(err);
    } else{
        console.log(response);
    }
});

http.put('http://jsonplaceholder.typicode.com/posts/1', data1, function(err, response){
    if(err){
        console.log(err);
    } else{
        console.log(response);
    }
});

http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else{
        console.log(response);
    }
});