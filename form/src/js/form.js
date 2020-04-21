const name = document.querySelector('.name');
const username = document.querySelector('.user');
const password = document.querySelector('.password');
const sbutton = document.querySelector('#subutton');
const name_error = document.querySelector('#name_error');
const pass_error = document.querySelector('#pass_error');

sbutton.addEventListener('click',formSubmit);
function formSubmit(e){
    const nameValue = name.value;
    const passValue = password.value;
     
    
    e.preventDefault();
    if(nameValue === ''){
        name_error.innerHTML = 'Name must be filled';
        return false;
    }
    const namespecial = /^([A-Z*]){4-10}$/i;
    const namespec = namespecial.test(nameValue);
    if(!namespec){
        name_error.innerHTML = 'Name must contain only letters and be of length 4-10';
    }
    else{
        button.addEventListener('click',()=>{
            alert('Successfullfy submitted');
        });
    }


    const passSpecial = /^[0-9]$/i;
    const checkPassSpecial = passSpecial.test(passValue);
    if(!checkPassSpecial){
        pass_error.innerHTML = 'Password must contain atleast One number'
    }
}









