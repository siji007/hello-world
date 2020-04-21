class Info{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email,'has logged in');
    }
}
var first = new Info('siji$2017', 'Olusijoski');
var second = new Info('loi£142', 'Amanda');
//1.the new keyword is use to creaate an empty obj{}.
//2 .calls the constructor method
//3. set the value of 'this' to be the new object
first.login();