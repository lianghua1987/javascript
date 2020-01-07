//  localStorage.setItem('name', 'hualiang');

//  sessionStorage.setItem('name', 'isa');

//  //localStorage.removeItem('name');

//  localStorage.clear();

//  console.log(localStorage.getItem('name'));




document.querySelector('form').addEventListener('submit', function(e){
 
    e.preventDefault();
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
   //console.log(task);
  });