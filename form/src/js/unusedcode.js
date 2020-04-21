function formVal(){
    //PASSWORD
    let pass = document.getElementsByName('Password');
    for(pass.length < 6){
        alert('Password must be atleast Six characters');
    }// else if{
    //for(let upper = 0; upper < pass; upper++){
     //   if(pass[upper] !== pass.toUpperCase()){
    //        alert('Password must contain atleast 1 Uppercase');
    //    }
   // }
//}

//INCASE USER DIDN'T FILL IN ANY INFORMATION IN ALL THE INPUT(METHOD1)
/*for(let i =0; i<3; i++){
    let every1 = document.forms[i];
    if(every1.forms[i] == null || every1.forms[i] == ''){
        let every2 = error.innerHTML;
        every2 = 'Please fill in the blank space';
        alert(every2 + every1.value);
    }
}*/

//Username(Special Character case)
let user = document.getElementsByName('Username');
let schar = '[ , /,^,.,$,?,*,+,(,)';
if(user = schar){
    alert('You cannot fill in a special character as Username');
}else{
    test

}

//INCASE USER DIDN'T FILL IN ANY INFORMATION IN ALL THE INPUT(METHOD2)
let inp = document.getElementById('input');
for(let count = 0; count < 3; count++){
    for(count in inp){
        if(count == null || count == ''){
        let every1 = error.innerHTML;
        every1 = 'Please fill in the blank space';
        alert(every1 + every1.value);
        }
    } 
}
};