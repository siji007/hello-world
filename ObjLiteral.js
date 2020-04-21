var info = {
    name:'cops',
    email:'Ujin20$',
    login(){//a simple way of writing function inside an object in ES6
        console.log(this.email,'has logged in');

    },
    logout(){
        console.log(this.email,'has logged out');
    }
}
//for updating object property
name = 'ada';
console.log(info.login());