class Chain{
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
first = new Chain('siji','Lafo44$');
sec = new Chain('Priye','Pye£22');
first.login().updateScore().updateScore().logout();