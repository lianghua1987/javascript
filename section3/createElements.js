const li = document.createElement('li');

li.className = 'collection-item';
li.id ='new-item';
li.setAttribute('title', 'Hua New Item');
li.setAttribute('fake', 'fake');
li.style.background = 'red';

// append something inside
li.appendChild(document.createTextNode('hello world'));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.href= '#';
link.innerHTML = ' <i class="fa fa-remove"></i>';
li.appendChild(link);



let val = document.querySelector('ul.collection');
val.appendChild(li);





console.log(val);
