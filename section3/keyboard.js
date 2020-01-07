const form = document.querySelector('form');
const taskInput = document.getElementById('task');

const input = document.querySelector('#task');

input.addEventListener('focus', function(){
  console.log('focus');
})

input.addEventListener('blur', function(){
  console.log('blur');
})

input.addEventListener('cut', function(e){
  console.log('cut: ' +  e.target.value);
})

input.addEventListener('input', function(e){
  console.log('input: ' +  e.target.type);
})


form.addEventListener('submit', runEvent)
form.addEventListener('keydown', runEvent)
function runEvent(e){
  console.log(e.target.value);
  //e.preventDefault();
  console.log(`event: ${e.type}`);
 
}