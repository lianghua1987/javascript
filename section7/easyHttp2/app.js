const http = new EasyHttp;

// const users = http.get('http://jsonplaceholder.typicode.com/posts');

// console.log(users);

http.get('http://jsonplaceholder.typicode.com/posts')
.then(data => console.log(data))
.catch(err => console.log(err));


http.post('http://jsonplaceholder.typicode.com/posts', {name: 'hualiang', age: 32})
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('http://jsonplaceholder.typicode.com/posts/1', {name: 'hualiang1', age: 32})
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch(err => console.log(err));