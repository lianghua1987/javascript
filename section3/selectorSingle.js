console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


const taskTitle =  document.getElementById('task-title'); // preferred

document.getElementById('task-title').style.background = 'yellow';
document.getElementById('task-title').style.padding = '5px';


// document.getElementById('task-title').textContent = 'Task Modified By Hua';
// document.getElementById('task-title').innerText = 'Task Modified By Hua1';
// document.getElementById('task-title').innerHTML = '<b>Task Modified By Hua1</b>';

taskTitle.textContent = 'Task Modified By Hua';
taskTitle.innerText = 'Task Modified By Hua1';
taskTitle.innerHTML = '<b>Task Modified By Hua1</b>';


console.log('querySelector');
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.task-title-class'));
console.log(document.querySelector('h5'));


document.querySelector('li').style.color = 'red'; // pick the first item
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'orange'; // sudo css3
document.querySelector('li:nth-child(2)').style.color = 'green'; // sudo css3
document.querySelector('li:nth-child(2)').textContent = 'hello Hua'; // sudo css3
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; 
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; 

