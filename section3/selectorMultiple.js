// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'blue';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// const lis = document.getElementsByTagName('li');
// console.log(lis);

// let lis1 = document.getElementsByTagName('li');

// lis1 = Array.from(lis1);
// lis1.reverse();
// console.log(lis1);


const items = document.querySelectorAll('li.collection-item');

console.log(items);

items.forEach(function(item, index, array){
  item.textContent = `this is ${index} item`;
})


const oddItems = document.querySelectorAll('li:nth-child(odd)');
const evenItems = document.querySelectorAll('li:nth-child(even)');

oddItems.forEach(function(li, index){
  li.textContent= `this is odd ${index} item`;
  li.style.background = '#ccc';
});

for(let i = 0; i< evenItems.length; i++){
  evenItems[i].style.background = 'yellow';
}