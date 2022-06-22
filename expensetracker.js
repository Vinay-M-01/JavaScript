document.getElementById("submitButton").addEventListener("click",myFunction);
let count =0;

function myFunction(e){
    
    count+=1
    e.preventDefault()
    let amt = document.getElementById("ExpenseName").value
    let decrip = document.getElementById("Description").value
    let cato = document.getElementById("category").value
    
    //created a new element 
    let li = document.createElement('li')
    li.className = 'listItems'

    //created a new text content 
    li.textContent = amt +'-'+ decrip +'-'+ cato +'  ';

    // took li element and appended content to it 
    let getdata = document.getElementById("MainList")
    getdata.appendChild(li);

    //creating a new object 
    let newObj = {
        "Amount" : document.getElementById("ExpenseName").value,
        "Description" : document.getElementById("Description").value,
        "category": document.getElementById("category").value,
        "count":count
    }

    let serializedObj = JSON.stringify(newObj);
    let newName = localStorage.setItem(newObj.count, serializedObj);

    let reloadObj = localStorage.getItem(newObj)
    let reloadString = JSON.parse(reloadObj);

    function deletebtn(){

        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.className = 'deleteItem';
        button.style.backgroundColor = 'red';
        button.id = 'delete';
        li.appendChild(button);
        return button
    }
    

    // button.style.backgroundColor = 'lightred';
    // button.style.border = 'solid 1px white';
    // button.setAttribute('title', 'detele user details');

    let delbtn = deletebtn()
    
    delbtn.addEventListener('click', () =>
    {
        if(confirm('Are you sure?'))
        {
            getdata.removeChild(li);
            localStorage.removeChild(reloadString)  
        }
    })

    let editbtn = document.createElement('button');
    editbtn.innerHTML ='Edit';
    editbtn.className = 'Editbtn';
    li.appendChild(editbtn);

    editbtn.addEventListener('click', () =>
    {
        let getamount = prompt('Enter the amount: ')
        let getdecription = prompt('Enter decription: ')
        let getcategory = prompt('Enter Category: ')

        li.textContent = getamount +'-'+ getdecription +'-'+ getcategory +'  ';

        let newObj = {
            "Amount" : getamount,
            "Description" : getdecription,
            "category": getcategory,
            "count":count
        }
    
        let serializedObj = JSON.stringify(newObj);
        let newName = localStorage.setItem(newObj.count, serializedObj);

        li.appendChild(delbtn);
        li.appendChild(editbtn)
    });

}

document.addEventListener('DOMContentLoaded', () =>
{
    for(let i=0; i<localStorage.length; i++)
    {
        const keyval = localStorage.key(i);
        const Val = localStorage.getItem(keyval);
        const newVal = JSON.parse(Val);

        let getdata = document.getElementById("MainList")
        let li = document.createElement('li')
        li.className = 'listItems'
        li.textContent = `${newVal.Amount}-${newVal.Description} - ${newVal.category}`;
        getdata.appendChild(li);

        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.className = 'deleteItem';
        button.id = 'delete';
        li.appendChild(button);

        button.addEventListener('click', () =>
        {
            if(confirm('Are you sure?'))
            {
                getdata.removeChild(li);
                localStorage.removeChild(reloadString)  
                }
            })
        
            let editbtn = document.createElement('button');
            editbtn.innerHTML ='Edit';
            editbtn.className = 'Editbtn';
            li.appendChild(editbtn);
        
            editbtn.addEventListener('click', () =>
            {
                let getamount = prompt('Enter the amount: ')
                let getdecription = prompt('Enter decription: ')
                let getcategory = prompt('Enter Category: ')
        
                li.textContent = getamount +'-'+ getdecription +'-'+ getcategory +'  ';
        
                let newObj = {
                    "Amount" : getamount,
                    "Description" : getdecription,
                    "category": getcategory,
                    "count":count
                }
            
                let serializedObj = JSON.stringify(newObj);
                let newName = localStorage.setItem(newObj.count, serializedObj);
        
                li.appendChild(delbtn);
                li.appendChild(editbtn)
            });
    }
    
});