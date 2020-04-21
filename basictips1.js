//concatenation of object property with array
let arr = [1,2,3];
let arr2 = {
    0:'bola',
    lenght:1
};
alert(arr.concat(arr2));//1,2,3 [object,object]

//when a Symbol.isConcatSpreadable property is introduced then it is treated as an array by concat
let myarr = [1,2];
let arrayLike = {
    0:'somethingGood',
    lenght:1,
    [Symbol.isConcatSpreadable]:true,
};
let p = myarr.concat(arrayLike);
alert(p);

//  ForEach method allows to run a functionfor every element of the array...it is not magic bruh
['Bilbao','Gandalf','Nigul'].forEach((item,index,array)=>{
    alert(`${item} is at index ${index} in ${array}`);
});
//indexOf
let nun = [0,false,true];
alert(num.indexOf(1))//returns false

//each we can also use the arr.findIndex but it will only return the index where the element was found instead of the element
//find method looks for single elements that makes the function true 
let users = [
    {id: 1, name:'John'},
    {id: 2, name:'Siji'},
    {id: 3, name:'Rex'}
];
let user = users.find(item => item.id == 1);
alert(user.name);

//filter method returns an array of all matching element
let users = [
    {id: 1, name:'John'},
    {id: 2, name:'Siji'},
    {id: 3, name:'Rex'}
];
let user = users.filter(item => item.id > 1);
alert(user.name);
//so like inside an array i think we have a keyword 'item'==>the elements of the array, 'index' ==> position of the element
// and 'array' ==> which is the arrauy itself
let users = [
    {id: 1, name:'siji'},
    {id:2, name:'Rex'},
    {id:3, name:'Sade'}
];
let user = users.filter(item => item.id > 1);
alert(user.length);

//map ..this array method calls the function for each element of the array and returns the array of results
let lengths = ['Bamboo','Mayowq','Marzouq'].map((item)=> item.length);
alert(lengths);
function com(a,b){
    if (a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
let arr = [2,1,5,3];
arr.sort(com);

//shoortest function for comparison of ascending numbers.cause .sort alone will only work for stringd without writing any function to it
arr1 = [6,2,66,33,12,1];
arr1.sort((a,b)=>{return a - b});
alert(arr1);
//comapring strings
let countries = ['Zsrfw','Aba','cov','Vimuer'];
alert(countries.sort((a,b)=>{a > b ?1:-1}));

//join method(it combines element togethet)
let names = ['josh','lion','huston'];
alert(names.join(';'));

//reduce method are used to calculate a single value based on the array...the first argument is the accumulator that stores the combined
//result of all previous executions
let marr = [1,2,3,4];
let result= marr.reduce((sum,current)=>{sum + current,0});//here 0 is the initial value 0+1+2+3+4
alert(result);

//Array.from ==> takes an iterable or array-like value and makes a real 'Array' from it.Then we can call array methods on it

let arrayLike = {
    0:'Something',
    1:'World',
    length:2
};
let arr = Array.from(arrayLike);
alert(arr.pop);

//You can use Array.from(str) to turn a string into an array of characters

let name = 'Houston';
let chars = Array.from(name);
alert(chars[1]);

let yre = 'John';
let cars = [];
for(let char of yre){//Here the 'yre' is being iterated by 'char' and char is being stored into the empty array 'cars'
    cars.push(char);//then everything automatically becomes an array
}
alert(cars);

//MAP(honestly don't get the concept yet but they said 'The only diff btw object and map is that Mapp allows key of any type')

let map = new Map();
map.set('1','str1');
map.set(1,'Money');
map.set(true,'bool1');
alert(map.get(1));
alert(map.get('1'));
map.keys()//gives '1',1,true
map.values();//gives 'str1','Money','bool1'
map.entries();// returns iterable values for entries [key,values]

//ITERATION OVER MAP
let recipeMap = new Map([
    ['cucumber',555],
    ['onions',210]
]);
for(let vege of recipeMap.keys()){//iterate over keys vegetable
    alert(vege);
}
for(let amount of recipeMap.values()){//iterate over values(amount)
    alert(amount);
}
for(let entry of recipeMap.entries()){//iterate over [key,value]
    alert(entry);
}

//map also has a .forEach method,similar to Array
recipeMap.forEach((value,key,map)=>{
    alert(`The number of ${value} is ${key}`);
});
/*we can also create an map from an object,then will use the built-in method Object.entries(obj) that will return an array of key
and value pairs for an object exactly in that format*/
let obj = {
    name:'John',
    age:30
};
let map = new Map(Object.entries(obj));
alert(map.get('name'));

//The Object.fromEntries method create an object from a map;
let price = Object.fromEntries([
    ['Orange',30],
    ['Mango',22]
]);
alert(price.Orange);
//Object.entries is used to get an array of key/value pairs from an object
let price = {
    'sed':1,
    1:'olp'
};
let result = Object.entries(price);
alert(result[1]);

//Set==> is a collection of values without keys,where value only occurs once
let set = new Set();
let john = {name: 'John'};
let sade = {name: 'Sade'};
set.add(john);
set.add(sade);
alert(set.size);

//a program that return max num between two  num without using loops,if statement and arithemetic of
let result = ()=>{
    this.a = prompt('Enter a num');
    this.b = prompt('Enter a num');
    let result1 = (this.a - this.b)?this.a:this.b;
    return result1;
};
alert(result());


let result = ()=>{
    let pro = [];
    alert(`Enter a number${pro}`);
    return pro.Math(max)
}

let prices = {
    orange:1,
    mango:22,
    pawpaw:2
};
let result = Object.entries(prices);
result.map(([key,value])=>[key,value*3]);
alert(result.pawpaw);

//A function that calculate the sum of salary
let salaries = {
    'John':1000,
    'Sade':700,
    'Mayowa':450
};
function sumSalaries(salaries){
    let sum = 0;
    for(let salary of Object.value(salaries)){
        sum += salary;
    }
    return sum;
}
alert(sumSalaries(salaries));

//a function calculate total number of items in the object
let user = {
    name:'John',
    age:30
};
let sum = 0;
function count(user){
    return Object.keys(user).length;
}
alert(count(user));

//Destructuring
let arr = ['sui','leo'];
let[firstt,last] = arr;
//anoother example of destructuring
let user = {
    name:'John';
    age:33
};
for(let [key,value] of Object.entries(user)){
    alert(`${key}:${value}`);
}
//the rest... is use when we want not to get first values but also too gather all that follows
let [name1,name2,...rest] = ['aas','c','sd','aeq','qwqe','dfds'];
alert(rest[1]);//returns aeq
//default value
let [name = 'siji', surname = 'doxcm'] = ['juius'];
alert(surname)//returns 'doxcm' but if surnmae was empty it will return undefined

//Object destructuring
let sass = {
    length:100,
    width:22
};
let {len,wid} = sass;
alert(len);//returns 100

 //another fprmat of obj des...
 let sass = {
    length:100,
    width:22
};
let {len:l,wid:w} = sass;
alert(l);//returns 100

//Nested destructing
let options = {
    size: {
        width:100,
        lenght:20,
    },
    items:['Cake','Fanta'],
    extra:true
};
let{
    size:{//you can't change this to another variable
        wid,
        len,
    },
    items:[item1,item2], 
}= options;
alert(item1);

//destructuring with function
let options = {
    title:'MY menu',
    items:['item1','item2'],
};
function showMenu({
    title = 'menu',
    width: w = 20,
    height: h = 23,
    items: [item1,item2]
}){
    alert(`${title} ${w} ${h}`);
}
showMenu({});//this display the default vvalues of the function such as 'menu',20,23
showMenu(options);// display 'My menu'

//Date creation
let now = new Date();
alert(now); 
let dec31_1969 = new Date(-24 * 3600 + 1000);
alert(dec31_1969);
//date also has some methods such getDay(),getMonth(),getYear(),

//Autocorrection we can also to the same for .setHours,.setSeconds,
let date = new Date(2016,2,23);
date.setDate(date.getDate() + 2);//add extra 2 days to the initial
alert(date);


//when date is converted to a number,it becomes a timestamp
let date = new Date();
alert(+date);
     //OR
    alert(date.getTime());//it returns the number of milliseconds
let start = Date.now();
for(let i = 0; i < 100000;i++){
    let some = i*i*i;
}
let end = Date.now();
alert(`The loop too ${end - start} mill`);

//Date.parse(str) ==> can read a from a string but turns it to millisecond
let ms = Date.parse('2012-01-25');
alert(ms);

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
alert(date);

//A function that represent getDay ewith short form of the week
function getWweekDay(date){
    let days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    return days[date.getDay.()];
}
let date = new Date(2012,3,5);
alert(getWweekDay(date));

// function that returns the last day of every month
function dar(year,month){
    let date = new Date(year,month+1,0);
    return date.getDate();
}
alert(dar(2013,1));

//a function that return the number of seconds from the begining of today
let getSec = ()=>{
    let now = new Date();
    let today = new Date(now.getFullYear(),now.getMonth(),now.getDay());
    let diff = now - today;
    return Math.round(diff/1000);
}
alert(getSec());

//JSON->javascript object notation is a general format to represent values and object
//JSON.strinify to convert objects to JSON(string)
//JSON.parse to convert JSON back into an object
let student = {
    name: 'John',
    age:30,
    isAdmin:true,
    courses:['hhtml','css','js']
}
let js = JSON.stringify(student);
alert(js);

//in JSON-encoded object strings use double quotes,no single quote or backticks in JSON
alert(JSON.stringify(1))//returns 1 cus a number is still a number in JSON

//full syntax of JSON
/*let json = JSON.stringify(value[, replacer,space])
value --> a value to encode
replacer --> An array of properties to encodespace --> Amount of space to use for formatting
*/
let room1 = {
    number:32
};
let meetup = {
    name: 'John',
    age:30,
    participant: [{name:'sinzu'},{name:'Alice'}],
    courses:['html','css','js']
}
room1.occupied = meetup;
alert(JSON.stringify(meetup,['age','participant'/*'name' */],2));//the object in the participant arre empty because 'name' is not in the list
//the space argument is exclusively just use for nice output-->better indentation i guess

/*JSON.paarse--> use to decode a JSON-string 
let value = JSON.parse(str, [reviver]);
str-->the JSON-string to parse
reviver -> operational function that will be called for each (key,value) pair and can transform value

*/
let num = "[0,1,2,3]"//always use double quote for JSOn
let user = JSON.parse(num);
alert(user[1]);
//for nested object
let use = '{"name":"Siji","friends":[0,1,3,5]}';
let us = JSON.parse(use);
alert(us.friends[2]);
//
let str = '{"title":"Conference","date":"2020-11-29T12:00:00.000Z"}';
let meetup= JSON.parse(str,function meet(key,value){
    if(key=='date') return new Date(value);
    return value;
});
alert(meetup.date.getDate());

