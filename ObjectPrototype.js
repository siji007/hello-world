//setter and getter
let cat = {
    name:{first:'Tiger',second:'Lion'},
    color:'Yellow'
};
Object.defineProperty(cat, 'fullname',
{
    get:function(){
        return this.name.first + ' ' + this.name.second;
    },
    set:function(value){
        this.name.first + this.name.second == value.split(' ');
    }
});
cat.fullname;

//Prototype ...An object does not have prototype,they only have __proto__

















