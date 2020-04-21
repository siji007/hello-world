class Abs{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.email,'has logged in');
        return this;
    }
    logout(){
        console.log(this.email,'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'has a score',this.score);
        
        return this;

    }
}
class Admin extends Abs {
    deleteUser(use){
        use = use.filter((u) => {
            return u.email != Abs.email//false will remove an element from the array while true keeps the element inside the array

            
        })//filter method allows us to psycho through ecanh element
        //inside the array then filter one of them out of the array.
    }
}
var first = new Abs('siji','Lafo44$');
var sec = new Abs('Priye','Pye£22');
var admin = new Admin('dopl','weuil$');

var use = [first,sec];

admin.deleteUser(sec);

console.log(use);