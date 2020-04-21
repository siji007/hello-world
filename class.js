class User{
    constructor(man,son){
        this.man = man;//we use this so that we can be anle to assign multiple names to the email property.
        
        this.son = son;
    }   
}
var firstMan = new User('POPS','Marcus');
var retMan = new User('Brus','Madf');
console.log(firstMan);