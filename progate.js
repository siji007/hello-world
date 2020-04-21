//Object along with loop
const cafe = {
    name: "Progate Cafe",
    businessHours: { 
      opening: "10:00(AM)",
      closing: "8:00(PM)"
    },
    // Add a menus property and assign an array to it
    menus:['Coffee','Tea','Chocolate Cake']
    
  };
  
  console.log(`Name: ${cafe.name}`);
  console.log(`Hours: From ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);
  console.log(`----------------------------`);
  console.log("Menu Recommendations");
  
  // Use a for loop to print the contents of the menu array
  for(let i =0; i<cafe.menus.length;i++){
    console.log(cafe.menus[i]);
  }
  
//Array in Object
const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master White", age: 100},
    {name: "Ben the Baby Ninja", age: 5},
  ];
  
  // Complete the for loop
  for (let i = 0;i < characters.length ;i++) {
    console.log("--------------------");
    
    // Define the character constant
    const character = characters[i];
    
    // Print "My name is ____"
    console.log('My name is' + character.name);
    
    // Print "I am ____ years old"
    console.log('I am'+ character.age+'years old');
    
  }
  
  //CALLBACK FUNCTIONS 1
  const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(printKen);
  
  // Declare the function in the argument and pass it
  call(()=>{
    console.log("Master White");
  });



  //CALLBACK FUNCTIONS 2
  const call = (callback) => {
    callback("Ken the Ninja", 14);
  };
  
  // Add a function that receives two arguments within the argument of call
  call((name,age) => {
    console.log(`${name} is ${age} years old.`);
  });



















