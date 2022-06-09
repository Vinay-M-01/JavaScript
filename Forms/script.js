let formName = document.getElementsByTagName("form")[0]
formName.addEventListener('submit',sendData)
let count =0;

//Task 12 - deliverable 3
document.addEventListener('DOMContentLoaded', function(){
    for (let i = 0; i < localStorage.length; i++) {
        
        if(i==localStorage.length-1)

        {   
            console.log(i)
            const keyval = localStorage.key(i);
            
            const val = localStorage.getItem(keyval)
            let newVal = JSON.parse(val)
            
            document.getElementById("fname").value = newVal.name
            console.log(newVal.name)
        }
    
    }

});

function sendData(e)
{
    count+=1
    e.preventDefault()
    let newObj = {
        "name" : document.getElementById("fname").value,
        "Email" : document.getElementById("email").value,
        "phone": document.getElementById("phone").value,
        "meetingtime": document.getElementById("birthdaytime").value,
        "count":count

    }
    let serializedObj = JSON.stringify(newObj)
    let newName = localStorage.setItem(newObj.name, serializedObj)

    let reloadObj = localStorage.getItem(newObj.name)
    let reloadString = JSON.parse(reloadObj)

    let li = document.createElement('li')
    li.className = 'listItems'

    li.appendChild(document.createTextNode('Name is: ' + reloadString.name + " " + '& Email is:' +  reloadString.Email))

    let getId = document.querySelector('#users')
    getId.appendChild(li)

    //function with delete button

    function deleteButton()
    {
        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.className = 'deleteItem';
        button.id = 'delete';
        button.style.backgroundColor = 'red';
        button.style.border = 'solid 1px white';
        button.setAttribute('title', 'detele user details');
        li.appendChild(button);

        return button
    }

    let delbtn = deleteButton()

    delbtn.addEventListener('click', function()
    {
        if(confirm('Are you sure?'))
        {
            getId.removeChild(li);
            localStorage.removeItem(reloadString.name);

        }
    })

    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.className = 'editbtn';
    editBtn.id = 'edit';
    editBtn.style.backgroundColor = 'yellow';
    editBtn.style.border = 'solid 1px white';
    editBtn.setAttribute('title', 'edit user details');
    li.appendChild(editBtn);

    editBtn.addEventListener('click', function()
    {
        let getUserName = prompt('User Name : ')
        let getUserEmail = prompt('User Email :')
        li.textContent = 'Name is : ' + getUserName + 'Email is : ' + getUserEmail + '   ';
        let delbtnn = deleteButton();

        delbtnn.addEventListener('click', function()
        {
            if(confirm('Are you sure?'))
            {
               getId.removeChild(li);
                localStorage.removeItem(reloadString.name);

            }
        })
    })


//     localStorage.setItem('The Name is',document.getElementById("fname").value)
//     localStorage.setItem('The Email is',document.getElementById("email").value)
//     localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
//     localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
// 
}

// let reloadObj = localStorage.getItem("newdata")
// let reloadString = JSON.parse(reloadObj)

// document.getElementById("fname").value = reloadString.name
// document.getElementById("email").value = reloadString.Email
// document.getElementById("phone").value = reloadString.phone
// document.getElementById("birthdaytime").value = reloadString.meetingtime
