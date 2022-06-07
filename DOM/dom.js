// console.log(document.forms);
// const title = document.getElementById('header-title').innerHTML = 'Title is Changed'
// document.getElementById('header-title').style.color = 'yellow'
// document.getElementById('main-header').style.border = 'solid 5px black'

// document.getElementsByClassName('title')[0].innerHTML = '<b>ADD ITEM</b>'
// document.getElementsByClassName('title')[0].style.color = 'green'


// console.log("Header title is now: " + title);

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

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'lightgreen';

// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.innerHTML = '<p></p>';

// var items = document.querySelectorAll('li');
// console.log(items);
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'darkgreen';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// Create a div 

// var newDiv = document.createElement('div');

// newDiv.className = 'HELLo';
// newDiv.id = 'HELLo 1';
// newDiv.setAttribute('title', 'Hello DIV');

// var newDivText = document.createTextNode('HEllo');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv,h1);

// before Item 1

// var newitem = document.createElement('div');

// newitem.classname = 'list-group-item1';

// var newitemText = document.createTextNode('HEllo');

// newitem.appendChild(newitemText);

// var ul = document.querySelector('#main');
// var li1 = document.querySelector('#items');

// ul.insertBefore(newitem, li1);

// console.log(newitem);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  // Get input value for item1
  var newItem1 = document.getElementById('item1').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  // var con1 = document.createTextNode(newItem);
  // var con2 = document.createTextNode(newItem1);

  // var ftext = li.appendChild(con2);
  // var stext = li.appendChild(con1);

  // document.getElementById('items').appendChild(stext);

  // Add text node with input value
  li.appendChild(document.createTextNode("Name : " + newItem +","+ "Description : " + newItem1));

  // Create edit button 
  var editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-safe btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
