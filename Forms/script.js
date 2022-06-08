let formName = document.getElementsByTagName("form")[0]
formName.addEventListener('submit',sendData)

function sendData(e)
{
    localStorage.setItem('The Name is',document.getElementById("fname").value)
    localStorage.setItem('The Email is',document.getElementById("email").value)
    localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
    localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
}
