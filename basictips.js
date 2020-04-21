let name = 'siji';
alert(`Hi,${name}`);//you can also print like this...

typeof(name);//to return the type of the argument

String(1);//String can also convert a value to string just like it convert string to a value..
//Bitwise Operators!
console.log(5&13);//it convert it to a binary form and returns 1 in each bit position for which corresponding bit are both 1
console.log(5 or 13);//it convert it to a binary form and returns 1 in each bit position for which any of the corresponding bit is 1
 
//Confirm functionn:gives a modal button that shows 2 buttons:Ok and Cancel..
let response = confirm('Are you sure ou want to continue?');


//Some simple conditional statement
let age = prompt('How Old are you','');
let access = (age > 18) ? true : false;
alert(access1);
//+prompt method
+prompt('Enter a number','')//+prompt means you can only enter a number;

//LABEL NAME
outer: for(let i=0;i<6;i++){
    for (let j = 0; j<6;j++){
        let input= prompt(`Value at coords (${i},${j})`,'');
        if(!input) break outer;
    }
}
alert('done');
//Multiplication table
let f=2;
multi:for(let i =1; i<13; i++){
    let yes = confirm(`Multication table of (${f}*${i}) gives:` + f*i);
    if (yes == false){
        break multi;
    }else{
        yes;
    }   
}
alert('done');

let g = prompt('Enter a number');
switch(g){
    case '3':
    case '2':
        alert('Even number recorded');
        break;
    default:
        alert('You are talking in the rubbish');
        break;
}
//Exeercise
let a = +prompt('a?','');
switch(a){
    case '0':
        alert(a);
        break;
    case '1':
        alert(a);
        break;
    case '2':
    case '3':
        alert(a,a);
}

 function sue(from,text){
     from = 'Mr ' +from +'.'; 
     alert(from +text);
 }
 let from = 'Siji'
sue(from,'hello');

function checkAge(age){
    if(age>=18){
        return true;
    }else{
        confirm('Do you have access from your parent?');
    }
}
let age = prompt('How old are you?');
if(checkAge(age)){
    alert('Access Granted!');
}else{
    alert('Access Denied');
}
////

function ask(quest,yes,no){
    if(confirm(quest)) yes()
    else no();
}
function showOk(){
    alert('You agreed');
}
function showCancel(){
    alert('You canceled the execution');
}
ask('Bawoni Baby',showOk,showCancel);

//Copy function to another variable
function sayHi(){
    alert('Hello');
}
let co = sayHi;
co();

//Arrow function:used in replacement of a functtion
let sum = (a,b) =>{
    let result = a + b;
    return result;
};
alert(sum(2,8));

//Prime number
function showPrime(n){
    for(let i =2; i < n;i++){
        if(n % i == 0){
            continue;
        }else{
            alert(i + 'is a prime numer');
        }  
    }
}
showPrime(7);

////
let user = new Object();
user = {
    name:'siji',
    job:'DevOps',
    'likes Victoria':true,
}
let key = prompt('What do you want to know about the user','name');
alert(user[key]);

//
function make(name,age){
    return{
        name,
        age
    };
}
let user = make('John',30);
alert(user.name);

//oBJECT can use any name
let obj={
    for: 1,
    let: 2,
    return : 3
};
//DOM
//To access the first child in the parent node
document.body.firstElementChild;
document.body.children[0];

//To know every element present in chilNode
for(let elem of document.body.children){
    alert(elem);
}

//for(let i = 0; i < document.body.childNodes.length;i++){
  //  alert(document.body.childNodes[i]);
//}
//for(let keyd of document.body.childNodes) alert(keyd);

let td = table.rows[0].cells[1];
td.style.backgroundColor = "red";
//
let Guest = `Guests:
*jpohn
*seyi
`;
alert(Guest);

//Number:the Math.trunc property removes any decimal point
let j =47.6
alert(Math.trunc(j));
//Object Assigning(it use to copy properties of object of the RHS to the LHS )
let users = {name:'Siji'};
let permission = { canSee:true};
let permitt = {canTalk:true};
Object.assign(users,permission,permitt);

//you can also perform the following operation on object
Object.keys(users)//it always return a string
Object.values(users);
Object.entries(obj);

//COnst object
//the onlty thing thing you can't change in when using const for object  is changing the variable that declares the object
 const church = {
    name:'Ecwa',
 };
 user = 123//gives error
 let co = user;

 //Symbol
 let id = Symbol("id");
 let ann={
     name:"John",
     [id]: 123
 };
//
let id = Symbol.for("id");
id:'sade';
console.log(id);


//'this' object(use when an object method want to access info stored in the objects)
let rex = {
    name: 'John',
    age: 30,
    sayHi(){
        alert(this.name);
    }
};
rex.sayHi();

let calculator = {
    read(){
        this.a  = +prompt('a?',0);
        this.b  = +prompt('a?',0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
//A ladder that goes up and down
let ladder = {
    step: 0,
    steup(){
        this.step++;
        return this;
    },
    stepdown(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
}
ladder.steup();
ladder.stepdown();
ladder.showStep();

//
let obj1 = {
    name:'banke',
    id:'233'
};
let obj2 = {
    work:'CIA'
}
let total = obj1 + obj2;
console.log(total);
//Constructor with return keyword overiddes the this operator
function BigUser(){
    this.name = 'John';
    return{
        name: 'Siji Boy'
    };
}
alert( new BigUser().name);

//Constructor function calculator tha create object with 3 methods:read,mul and sum
function Calculator(){
    this.read = function(){
        this.a = prompt('Enter first',0);
        this.b = prompt('Enter sec',0); 
    };
    this.sum = ()=>{
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };

}
let calc = new Calculator();
calc.read();

alert('Sum=' + calc.sum());
alert('Mul:' + calc.mul());

//
function Accumulator(startingValue){
    let i =0;
    startingValue = i;
    this.read = function(){
        startingValue += +prompt('Value:');
        return startingValue + i;
    }
}
let accumulator = new Accumulator();
accumulator.read();
accumulator.read();

//Numbers
console.log(Math.round(432.45));
console.log(Math.trunc(3.45));//removes verything after the decimal point.
console.log(33.434.toFixed(1));//33.4 1 decimal place.use unary plus operator to convert to Number()call

//Object.is(a,b)... compares value like === and returns true or false
 let a = 8;
 let b = 4;
 console.log(Object.is(a,b));//returns false 8 === 4;

 //parseInt and ParseFloat('they read a number from a string until they can't and it returns either an intege
 //integer or a float from a string)
 //it can also return a 'Nan' i.e when it can't read a digit.... e.g alert(parseInt('a123')) ..returns Nan
 alert(parseInt('100px'));//display 100

//Max and Min
alert(Math.max(2,3,-22,0,6));
alert(Math.min(1,34,4));


//Strings [] ---> is us to get a character from a particular position and if it doesn't exist it returns Undefined
//Strings are immutable let H = 'Hi'; H[0]= 'h'; -->gives error

//IndexOf()-->you put the string you eant to search for from a text and it shows the position of the string in yhe text
let str = 'Giants do die';
alert(str.indexOf('Giants')); //0

if (str.indexOf('Giants')){
    alert('We found it');//this doesn't work bcu we didn't specify the index position
}
if (str.indexOf('Giants',0)){
    alert('We found it');//this will work cause position was specified
}

//trying to search for a string 'as' in text

let word = 'As sly as a fox, as strong as an ox';
let target = 'as'
let pos = 0;
while(true){
    let myword = word.indexOf(target,pos);
    if(myword == -1) break;
    alert(`Found at position ${myword}`);
    pos += 1;
       
}
//Comapring Strings
alert('a' > 'Z')//true lowercase is always greater than upper
//str.codePointAt(pos)--> returns the code for the character at that position 
alert('Z'.codePointAt(0));//returns 90
alert(String.fromCodePoint(33));
//startwith,endwith
alert('widget'.startsWith('Widget is unfamiliar with the principle'));
//includes
alert('Hello'.includes('gett'))//returns false

let str = ' ';
for(letters = 44; letters <=168; letters++){
    str = String.fromCodePoint(letters);
}
alert(str);
let str = 'strinify';
alert(str.slice(0,5))//returns frm the start but does not include the end 'strin'
alert('ozere'.localeCompare('Zealand'))//retuns negtive if the first string < 2nd str,retuns posi.. if fir str > 2nd str,returns 0 if they are equivalent

//ARRAY
let fruits = ['Mango','Orange'];
fruits.shift();//takes one element from the start

//unshift put elment in from the start
fruits.unshift('sfds','ret');
//note we shouldn't use for..in in array 
//you can use for(let ios of android)

let arr = ['shoe','bag','cow'];
for(let mat = 0; mat <arr;mat++){
    alert(arr[i]);
}
//multidimensional array
let matrix = [
    [3,56,8],
    [4,8,9],
    [7,4,9],
];
alert(matrix[0][2]);//gives 8

let styles = new Array('Jazz','Blues');
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length - 1 / 2)];
alert(styles.shift());
styles.unshift('Rap','Reggae');

//splice'unlike delete when an item is deleted you cannot get it back splice allows us to be able to remove  an item and still accessed the removed element'
let arr = ['I','study','javadopl'];
arr.splice(1,1);
alert(arr);//return i javascript

arr.splice(0,1,'I am a developer');//returns 'i am a developer javadol'
//slice
let arr = ['t','e','g','y'];
alert(arr.slice(-2));//returns g.y
//concat
alert(arr.concat(['dog']));
//
let users = [
    {id: 1, name:'John'},
    {id: 2,name:'Siji'}
];
let user = users.find(users.id == 1);
alert(user);

//Strings are iterable
for(let char of 'test'){
    alert(char);//display 't' followed by 'e','s','t'
}
//strings can also be iterable explicitly using the 'str[Symbol.iterator()';

let str = 'Hello';

let iterator = str[Symbol.iterator]();
while(true){
    let result = iterator.next();
    if (result == done) break;
    alert(result.value);//outputs character  by character
}

