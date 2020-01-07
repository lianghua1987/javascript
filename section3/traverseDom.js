let val;


const item = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

val = listItem.childNodes; // text nodes 

val = item.children;

val = item.childNodes[0];
val = item.childNodes[1].nodeName;
val = item.childNodes[1].nodeType;
item.childNodes[3].textContent = 'Hua is awesome';

val = item.firstChild;
val = item.firstElementChild;
val = item.childElementCount;

val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;


val = listItem.nextElementSibling;
val = listItem.previousElementSibling;


console.log(val);
// 1 - element
// 2 - attribute
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype


// Zhti9oconsole.log(item.childNodes[2]);