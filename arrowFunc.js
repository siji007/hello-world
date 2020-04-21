const years = [1944,2001,1998,1976];
let ages = years.map(el => 2019 - years);
console.log(ages);
//the arrow func makes us to have access to each element in d array
ages = years.map((el, index)=> `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages);
ages = years.map((el,index)=>{
    const now = new Date().getFullyear();
    const age = now - el;
    return `Age element ${index + 1} is ${age}.`
});
console.log(ages);