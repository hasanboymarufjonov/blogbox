/*
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const message = document.querySelector('#subject');
const msg = document.querySelector('.msg');
const button = document.querySelector('.btn'); 

button.addEventListener('click', (e) =>{
    e.preventDefault();
    if(nameInput.value === ''|| emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
 
        setTimeout(() => msg.remove(), 3000);
     } else {
         msg.innerHTML = `Thank you for submit' ${fname.value}`;
 
        //Clear fields
        nameInput.value='';
        emailInput.value = '';
     }
});
*/
/*
button.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('button clicked')
})
*/


var x = document.forms["myForm"]["firstname"].value;
var y = document.forms["myForm"]["lastname"].value;
var z = document.forms["myForm"]["subject"].value;
/*
function validateForm(){
    if (x === ""){
        alert("You didn't enter your firstname");
        return false;
    }
}

function validateForm(){
    if (y === ""){
        alert("You didn't enter your lastname");
        return false;
    }
}

function validateForm(){
    if (z === ""){
        alert("You didn't enter your message");
        return false;
    }
}
*/


function validateForm(){
    if (x === '' || y === '' || z === ''){
        alert("Form must be full filled out");
        return false;
    }
}