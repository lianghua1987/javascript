// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('hello world');
//     e.preventDefault(); // or change to href ='#'
// });


document.querySelector('.clear-tasks').addEventListener('click', onClick); //mouseover

function onClick(e){
  e.preventDefault();
  console.log('clicked');  
let val;

  //event target
  //console.log(e.target);
  val = e.target.innerText = 'Hua';
  val = e.timeStamp;
  val = e.clientY;
  val = e.clientX;

  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}