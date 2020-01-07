const newHeading = document.createElement('h5');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Hua Task List'));

const oldHeading = document.querySelector('#task-title');

console.log(oldHeading);
console.log(newHeading);

const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

//remove ele
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//lis[0].remove();
list.removeChild(lis[3]);

// classes & attr
const firstLi = document.querySelector('li:first-child');

const link = firstLi.children[0];
let val;

//classes
val = link.className;
val = link.classList;
link.classList.add('test-class')
link.classList.remove('test-class')



val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(link);

