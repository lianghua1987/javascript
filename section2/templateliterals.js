const name = 'hualiang';
const age = 32;
const job = 'software engineer';

let html;

// es5
html = '<ul><li>' + name+ '</li><li>' + age + '</li><li>' + job + '</li>';


function hello(){
    return 'hello world';
}

// with template string (es6)
html =`
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>Number: ${2+2}</li>
        <li>function: ${hello()}</li>
        <li>${age > 30 ? 'old' : 'young'}</li>
    </ul>
`;

document.body.innerHTML = html;