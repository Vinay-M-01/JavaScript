console.log(document.forms);
const title = document.getElementById('header-title').innerHTML = 'Title is Changed'
document.getElementById('header-title').style.color = 'yellow'
document.getElementById('main-header').style.border = 'solid 5px black'

document.getElementsByClassName('title')[0].innerHTML = '<b>ADD ITEM</b>'
document.getElementsByClassName('title')[0].style.color = 'green'


console.log("Header title is now: " + title);

// var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = 'HELLO 2'
// items[1].style.fontWeight = 'bold';

// items[2].style.backgroundColor = 'darkgreen';
// for(var i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// var li = document.getElementsByTagName('li');
// li[1].textContent = 'HELLO 2'
// li[1].style.fontWeight = 'bold';

// li[2].style.backgroundColor = 'darkgreen';
// for(var i=0; i<li.length; i++)
// {
//     li[i].style.fontWeight = 'bold';
// }

// console.log(document.getElementsByClassName('list-group')[0].children[4].textContent = 'Modified using just class name');
// console.log(document.getElementsByTagName('li')[4].style.backgroundColor = 'red');

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'lightgreen';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.innerHTML = '<p></p>';

var items = document.querySelectorAll('li');
console.log(items);
items[1].style.fontWeight = 'bold';
items[1].style.color = 'darkgreen';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}

