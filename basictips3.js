//class syntax..the object created from class are called instance of that class and they formed by the 'new' syntax
class MyClass{
    //class methods
    constructor(){...}
    method1(){...}
    method2(){...}
    ...
}
//The constructor() method is called automatically by 'new' operator,so we can initialize object there
class User{
    constructor(name){
        this.name = name;
    }
    fish(){
        alert(this.name);
    }
}
let user = new User('Sijibomi');
user.fish();
//inheritance
class Animal{
    constructor(name){
        this.name = prompt('What is your rabbit name');
    }
    run(value){
        alert(`${this.name} has ran ${value} times`);
    }
    sleep(){
        alert(`${this.name} has slept today`);
    }
}
class Rabbit extends Animal{
    hide(){
        alert(`${this.name} hides`);
    }
    
    sleep(){
        this.greet();//this is to access thr greet meethod inside the sleep method
        alert(`${this.name} slept forever`);
    }
}

let rabbit = new Rabbit();
rabbit.run(7);
rabbit.hide();
rabbit.sleep();


//Any expression is allowed after extends such as function as seen below
function f(phrase){
    return class{
        sayHi(){alert(phrase)}
    }
}
class Animal extends f('helllo'){}
new Animal().sayHi();


//*Overriding a method*
/*incase we want to build on top of a parent method or to extend it functionality,Classes provide a 'super' keyword 
super.method()--> to call parent method and super(...)*/
//Check the example below
class Human{
    constructor(name){
        this.name = name;
        this.age = 0;
    }
    myAge(age){
        this.age = age;
    }
    stop(){
        this.age = 0;
        alert(`${this.name} started with ${this.age}`);
    }
}
class Bola extends Human{
    die(){
        alert(`${this.name} dies!`);
    }
    stop(){
        super.stop();//call parent stop..because i still want to make use of the parent method in my metjod overidden instead of having to rewrite it again
        this.die();//..here the method is allreafdy overiden because there has been some new changes to it i.e not the same as the parent method again
    }
}
let human1 = new Bola('Covid 19');
human1.stop();


//overidding constructors 
class Car{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    name1(){
        alert(`i am of name ${this.name}`);
    }
    type(myType){
        this.myType = myType;
        alert(`${this.name} is of type ${this.myType}`);
    }
}
class Toyota extends Car{
    constructor(name,year){
        super(name);//here i am aceessing the parent constructor because i still want to make use of it,so there will be no need to start redefining the coonstructor from the scratch
        this.year = year;
    }
}
let car_1 = new Toyota('HONDA',2017);
alert(car_1.name);
alert(car_1.year);

/*Static Properties and methods..we can assign methods to the class function itself,not to its prototype
such methods are called static
STATIC methods are used for functionality that belongs to the class 'as a whole'.It doesn't relate to a concrete class instance
Static properties are used when we d' like to store a class level data,also not bound to an instance*/
class User{
    static statMethod(){
        alert(this === User);
    }
}
User.statMethod();

//Static properties
class Animal{
    static breed = 'Rot';
}
alert(Aanimal.breed);


//inheritance of static properties and method
class Animal{
    static breed = 'dogs';
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    run(speed = 0){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }
    static Compare(animalA,animalB){
        return animalA.speed - animalB.speed;
    }
}
class Dog extends Animal{
    hide(){
        alert(`${this.name} hides!`);
    }
}
let dogs = [
    new Dog('Bruno',30),
    new Dog('Yukki',22)
];
dogs.sort(Dog.Compare);
Dog.Compare(dogs[0].dogs[1]);
dogs[0].run;//returns the dog's speed
alert(Dog.breed);//returns 'dogs'

//Protected properties-->this are usually prefixed with an underscore_.
class CoffeeMachine{
    _waterAmount = 0;
    constructor(power){
        this.power = power;
        alert(`Created a coffeee machine with power: ${this.power}`);
    }
}
let coffeee = new CoffeeMachine(33);
coffeee.waterAmount = 300;

//Another example of protected
class CoffeeMachine{
    _waterAmount = 0;
    set waterAmount(value){
        if(value < 0) throw Error('Cannot have a negative value!');
        this._waterAmount = value;
    }
    get(){
        return this._waterAmount;
    }
    constructor(power){
        this.power = power;
    }
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -4;

//Private--> it should start with '#' they are only accessible inside the class
class CoffeeMachine{
    #waterLimit = 200;
    #checkWater(value){
        if(value < 0) throw new Error('Negative value is not allowed!');
        if(value > this.#this.waterLimit) throw new Error('Too much water');
    }
}
//Error can't access privates members from outside of the class
let coffeeMachine = new CoffeeMachine();
coffeeMachine.#waterLimit = 90;

//Extending built-in classes..Built in classes such as Array,map,set
class TestOut extends Array{
    isEmpty(){
        return this.length === 0;
    }
}
let arr = new TestOut(2,5,6,42,3);
alert(arr.isEmpty())
let test = arr.filter(item=>item > 10)
alert(test);

/*Mixins..yees! yes! it is true imn js we can only inherit from a single object and a class may etend only one class
A mixin is a class conttaining methods that can be used by other classes without a need to inherit
A class that contains methods for other classes*/
let hello = {
    voila(){
        alert(`Greetings from Spain with ${this.name}!!!`);
    }
};
class Greetings{
    constructor(name){
        this.name = name;
    }
    morning(){
        alert(`${this.name} says Goodmorning`);
    }
    evening(){
        alert(`${this.name} says Good Night!`);
    }
}
Object.assign(Greetings.prototype,hello);
new Greetings('Siji').voila();

//The instanceof operator
/*The syntax is obj instanceof Class it returns true if Obj belongs to the Class
or a class inheriting from it*/
class Rabbit {}
let rabbit = new Rabbit();
alert(rabbit instanceof Rabbit);//returns true
let arr = [1,2,43,5];
alert(arr instanceof Array)//returns true

//Object.prototype.toString for the type..we use toString.call instead of instanceof when we want to get the type as a string rather than just to check
let theString = Object.prototype.toString();
let names = [];
alert(theString.call(names));//returns [object,Array]

//try and Catch-->it only works for runtime errors
try{
    alert('Hi Bobo!');
    dfdf;
}catch(err){//we can use any name for this catch argument
    alert('An error has occurred');
}

//when dealing with a function the try and catch must be in the function body
setTimeout(()=>{
    try{
        noSuchthing;

    }catch{
        alert('Error is caught here!')
    }
},3000);

/*Throwing our own errors Technically, we can use anything as an error object. That may be even a primitive, like a 
number or a string, but it’s better to use objects, preferably with name and message properties

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them 
to create error objects as well.*/
//syntax is:
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);//the ReferenceError is known as the name property and the message is known as the argument
//Incase what you put in the try block is acyually correct but some details are missing in your information you have to use 'throw'

let info = '{"age":30}';
try{
    let user = JSON.parse(info);
    if(!info.name){
        throw new SyntaxError('info not complete:no name');
    }
    alert(info.name);
}
catch(e){
    alert('JSON Error '+e.message);
}


//try ..finally
//The finally clause is often used when we start doing something and want to finalize it in any case of outcome even if there is an error
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );


//The try..finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}

//CALL BACK FUNCTIONS
const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  // Add a parameter named callback to call
  const call = (callback) => {
    console.log("Calling the callback function.");
    // Call the function callback
    callback();
  };
  call(printKen);
  // Pass printKen as the argument and run call























