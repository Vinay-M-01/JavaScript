document.addEventListener('DOMContentLoaded', reload)
function reload(e)
{   

    axios.get("https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData").
    then(displayData =>
        {
            for(let i=0; i<displayData.data.length; i++)
            {
                showOutput(displayData.data[i])
            }
        })
}

let getCallBtn = document.getElementById('submitButton')
getCallBtn.addEventListener('click', postUserData)
let count =0;

//Posting data to the crud crud
function postUserData(event01)
{   
    event01.preventDefault()
    console.log('Button is working')

    count+=1

    let amt = document.getElementById("ExpenseName").value
    let decrip = document.getElementById("Description").value
    let cato = document.getElementById("category").value

    let userObj = {"Amount": amt, "Description":decrip, "Category":cato}

    function addUserToCrudCrud()
    {
        axios.post("https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData", userObj)
    }
    addUserToCrudCrud()
    showOutput(userObj)

}

//Show the output function 
function showOutput(obj)
{
    
    let mainClass = document.getElementById('MainList')
    let childClass = document.createElement('li')

    childClass.textContent = `${obj.Amount}  -  ${obj.Description}  -  ${obj.Category}`
    mainClass.append(childClass)

    let editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.style.backgroundColor = 'green'
    childClass.appendChild(editBtn)

    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.style.backgroundColor = 'red'
    childClass.appendChild(delBtn)

    delBtn.addEventListener('click', ()=>
    {
        if(confirm('Delete User Info?'))
            {
                axios.get('https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData')
                .then(deleteObj =>
                    {
                        let results = [];

                        let toSearch = obj.Description;

                        for(var i=0; i<deleteObj.data.length; i++) {
                        for(key in deleteObj.data[i]) {
                            if(deleteObj.data[i][key].indexOf(toSearch)!=-1) {
                            results.push(deleteObj.data[i]);
                            }
                        }
                        }
                        let delId = results[0]._id
                        console.log(delId)
                        let delUrl = `https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData/${delId}`
                        console.log(delUrl)
                        axios.delete(delUrl)
 
                    })


                mainClass.removeChild(childClass)
                
            }
        })


editBtn.addEventListener('click', ()=>
{   


    let newAmount = prompt('Add Amount', 'Enter amount here')
    let newDescription = prompt('Add Descripption', 'Enter decription here')
    let newCategory = prompt('Add Category','Enter category here')
    
    childClass.textContent = `${newAmount}  -  ${newDescription}  -  ${newCategory}`       

    let obj01 = {Amount:newAmount,Description:newDescription,Category:newCategory}
    childClass.append(delBtn)
    childClass.appendChild(editBtn)


    
    
    axios.get('https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData')
    .then(editObj =>
    {
        let results = [];

        let toSearch = obj.Description;

        for(let i=0; i<editObj.data.length; i++) 
        {
            for(key in editObj.data[i]) 
            {
                if(editObj.data[i][key].indexOf(toSearch)!=-1) 
                {
                    results.push(editObj.data[i]);
                }
            }
        }
        let editId = results[0]._id
        console.log(editId)
        let editUrl = `https://crudcrud.com/api/13448a7146a74786b5fe5572f979f39c/ExpenseData/${editId}`
        console.log(editUrl)
        axios.put(editUrl, obj01)
        
    }
    )

})
}