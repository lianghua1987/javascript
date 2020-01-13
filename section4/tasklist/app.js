// define ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const input = document.querySelector('#task');


loadEventListeners();

function addTask(e){
    e.preventDefault();
    if(input.value === ''){
        alert('add a task');
    }


    const li = document.createElement('li');
    li.className = 'collection-item';
    // create text node
    li.appendChild(document.createTextNode(input.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = \'fa fa-remove\'></a>';
    li.appendChild(link);
    taskList.appendChild(li);
    storeTask(input.value);
    input.value = '';
}

function storeTask(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));        
    }
    tasks.push(e);   
    localStorage.setItem('tasks', JSON.stringify(tasks));     
}

function remoteTask(e){
    let tasks;

    if( localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));       
    } 

    tasks.forEach(function(t, index){
        if(e.textContent === t){
            tasks.splice(index, 1);
        }
    });  
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}

function loadEventListeners(){
    // add task event
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTask);    
}

function getTasks(){
    let tasks;

    if( localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));       
    } 

    tasks.forEach(function(t){
        const li = document.createElement('li');
        li.className = 'collection-item';
        // create text node
        li.appendChild(document.createTextNode(t));    
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = \'fa fa-remove\'></a>';
        li.appendChild(link);
        taskList.appendChild(li);
    });        
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure?')){
            e.target.parentElement.parentElement.remove();
            remoteTask(e.target.parentElement.parentElement);
        }        
    }    
}

function clearTask(e){
   //taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();    
}

function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });     
 }

