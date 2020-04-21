//ADVANCED FUNCTION
//recursion 
function pow(x, n){
    let result = 1;
    for(let i = 0; i < n;i++){
        result *= x;
    }
    return result;
}
alert(pow(2,5));

function pow1(x,n){
    if(n == 1){
        return x;
    }else{
        return x * pow1(x,n-1);//in maths it would mean x^n = x * x^n-1
    }
}
alert(pow1(2,6))
//recursion should always be shorter so we can also write it in this formatt
function pow(x,n){
    return (n==1) ? x: x * pow(x,n-1);
}

//Function that calculates sum of numbers to 1+2+3+4...+n
function sum(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
       result += i;
    }
    return result;
}
sum(4);
//factorial
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
       result *= i;
    }
    return result;
}
factorial(4);

//REST parameter(...)unlimited number of argument
function sum(...args){
    let result = 0;
    for(let arg of args){
        result += arg;
    }
    return result;
}
sum(2,4,65,6,5,0);
//the rest ... parameter must always used as the end of parameters listing e.g==-> func(ard,..agt,ret) is wrong

//*arguments* variable -->a soecial array-like object that contains all argument by their index
//even though it is array-like it does not support narray methods such as map()
function showName(){
    alert(arguments.length());
    alert(arguments[0]);
}
showName('Julius','Ceasar');

//Spread syntax-->similiar to rest but it is used in function call
//How to call max function from an array -->if we use the normal array[index] call method it will give an error
let arr = [3,5,1];
alert(Math.max(...arr));
//another one
let arr1 = [-2,3,54,2];
let arr2 = [4,1,45,6];
alert(Math.max(...arr1, ...arr2));

//The spread syntax internally uses iterator to gather element same way as "for ..of" does
//spread syntax to turn string into array of characters
let str = "Hello";
alert([...str]);//returns H,e,l,l,o

//Array.from also does the same thing it also convert iterables to array
let str = "Hello";
alert(Array.from(str));//returns H,e,l,l,o

//Get a copy of an object/array
let arr = [1,2,3];
let arrCopy = [...arr];//spread the array into a list parameter then put the result into new array

//checking if the array have the same content
alert(JSON.stringify(arr)===JSON.stringify(arrCopy));

//Note that modifying our initial array does not modify the copy
arr.push(5);
alert(arr)//1,2,3,5
alert(arrCopy);

//Global Object--> provides variable and function that are available anywhere ,in a browser oit is named 'window'
window.alert('Hello world!');

//global functions and variables are declared with 'var' not (let/const)
var gvar = 7;
alert(window.gvar);//returns 5
//or
let gui = 3;
alert(window.gui);//returns undefined

//if a value is so important that you'd like to make it available globally,write nit directly has a property
window.CurrentUser = {
    name:"siji";
};
alert(CurrentUser.name);//Siji is returned
//or,if we have a local variable with the name "CurrentUser" we get it explicitly
alert(window.CurrentUser.name);
if(!window.Promise){
    alert('Too Old');
}

//The 'name' property--> a function name is accessible as the 'name' property
function sayHi(){
    alert('Hi');
}
alert(sayHi.name);//returns 'Hi'

//Custom property--> we can add properties of our own ,here i will add counter
function sayHi(){
    alert('Hi');
    sayHi.counter++;
}
sayHi.counter = 0;//initial value
sayHi();
sayHi();
alert(`called ${sayHi.counter} times`);

/*The new function
The syntax for creating this function --> let cov = new function([qrg1,qrg2,...argn], functionBody);*/
let sum = new Function('a','b','return a + b');//new Function allow us to turn any string to a function
alert(sum(1,2));//returns 3

//setTimeout--> allows us to run a function after once after the interval time
//syntax--> let timeId = setTimeout(fun/code,[delay],arg1,[arg2],...)
function test(praise,who){
    alert(phrase + ','+ name);
}
setTimeout(test,4000,'Hello','John');

setTimeout(()=> alert('Hello'),3000);//it is advisable not to use string like this one :setTimeout("alert('Hello')",2000;)

//a call to setTimeout returns a 'timer identifier' timerID that we can use to cancel execution,in a browser the timer identifier is a number
let timerID = setTimeout(()=> alert('Hello'),3000);
alert(timerID);
clearTimeout(timerID);
alert(timerID);

/*setInterval==>it nruns the function not only once but regularly after the given time interval
to stop further calls we call *clearInterval(timerID)* */
let timmerID = setInterval(() => {
    console.log('Hi Marcus')
}, 2000);
//after 5 seconds stop
setTimeout(()=>{
    clearInterval(timmerID);
    console.log('Stop');
},5000);

let i = 200;
setInterval(function(){
    console.log(--i);
    if(i == 0) {
        break;
    }
    console.log('Stop');
},100);

//FUNCTION BINDING-->for instance when passing setTimeout there is a problem losing *this*
let user = {
    firstname:"John",
    sayHi(){
        alert(`Hello, ${this.firstname}`);
    }
};
setTimeout(user.sayHi,1000);//Hello, undefined
//To solve this problem we will use a wrapper
let user = {
    firstname:"John",
    sayHi(){
        alert(`Hello, ${this.firstname}`);
    }
};
setTimeout(function(){
    user.sayHi();
},2000);
/*We can also use bind to solve 'this' problem(Functions provide a built-in method that allows to fix this)
-->The syntax is : let boundFunc = func.bind(context);
*/
let user = {
    firstname:"John",
    sayHi(){
        alert(`Hello, ${this.firstname}`);
    }
};
let sayHHi = user.sayHi.bind(user);//just discovered that instead of using bind you can use arrow function also!!!
sayHHi();
setTimeout(sayHHi,2000);

//if the object has many methods we could bind them all in a loop
for(let key in user){
    if(typeof user[key] == 'function'){
        user[key] = user[key].bind(user);
    }
}
//Partial function --> we can also bind argument but we rearely use it
The syntax is ==> let bound = func.bind(context, [arg1],[arg2],...);
function mul(a,b){
    return a * b;
}
let double =  mul.bind(null,3);//now we don't need to provide first argument bcus it is fixed
alert(double(5));// = mul(3,5) = 3 * 5 = 15

//Arrow functions have no this
let group = {
    title:'Our Group',
    stu8dents:['John','Seod','Cola'],
    showList(){
        this.stu8dents.forEach(stu8dents => alert(this.title + ':' + this.stu8dents));
    }
};
group.showList();

//Arrow functions vs Bind
/*.bind(this) crreates a bound version of the function
The arrow => doesn't create any binding and arrow function cannoot be called with *new* */

/*Property flags and descriptors ,object properties besides a value have 3 special attributes(so called flags)
Writable - if true the value can be changed,otherwise read only
enumerable - if true,then listed in loops,otherwise not listed
configurable-if true the property can be deleted*/
let user = {
    name:"John"
};
let descriptor = Object.getOwnPropertyDescriptor(user,'name');
alert(JSON.stringify(descriptor,null,2));

//Non writable
let user = {
    name:'John',
};
Object.defineProperty(user,"name",{
    writable:false
});
user.name = 'Sada'//Error:cannot modify the name

//Non configurable-->is sometimes preset for built in object and properties,a con configurable cannot be deleted
let descriptor = Object.getOwnPropertyDescriptor(Math,'PI');//configurable - false;One cannot change the value of pie
alert(JSON.stringify(descriptor,null,3));

//Object.defineProperties(obj,descriptors) that allows us to define many property at once
let person = {};
Object.defineProperties(person,{
    name:{value:'Siji',writable:false},
    surname:{value:'Sadiat',writable:false}
});

let names = ['dop','pos','kola'];
names.forEach((value,index,array)=>{
    console.log('hi'+ value + 'index'+index[0]);
});
let clone = Object.defineProperties({},Object.getOwnPropertyDescriptor(person));
alert(JSON.stringify(clone,null,2));

//__proto__ is an historical getter/setter for [[Prototype]]
let animal = {
    eat:true
};
let rabbit = {
    jumps:true
};
rabbit.__proto__ = animal;//Now rabbit prototypically inherits from animal which means rabbit can now access all the properties of the animal
alert(rabbit.eat);
//Another example
let animal = {
    eat:true,
    walk(){
        alert('aNIMal can walk')
    }
};
let rabbit = {
    jog:true,
    __proto__:animal
}
rabbit.walk();

//Getter and setter function along prototype
let user = {
    name:'Siji',
    surname:'Olaifa',
    set fullname(value){
        [this.name, this.surname] = value.split(" ");

    },
    get fullname(){
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__:user,
    isAdmin:true
};

alert(admin.fullname);

//F.prototype--> if F.prototype is is an object the new operator uses it to set [[Prototype]] for the new object
let animal = {
    eats:true,
};
function Rabbit(name){
    this.name = name;
}
Rabbit.prototype = animal;//means When a new Rabbit is created,assign its[[Prototype]] to animal
let rabbbit = new Rabbit("White rabbbit!");
alert(rabbbit.eats);

//Changing Prototype of an Object!!!
function Rabbit(){}
Rabbit.prototype = {
    eats:true
};
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
alert(rabbit.eats);








