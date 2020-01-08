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
    input.value = '';
}

function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTask);
    
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure?'))
        e.target.parentElement.parentElement.remove();
    }
    
}

function clearTask(e){
   //taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    
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
    console.log(text);
     
 }

