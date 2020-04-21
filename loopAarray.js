var index;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for (index = 0; index < fruits.length; index++) {
    text += fruits[index];
}
var fruits=['apple','mango','rere'];
Array.isArray(fruits);//gives true as output
fruits instanceof Array;//instanceof is use to check for validity
fruits.toString();//it convert array to string as output
fruits.join('*');
fruits.pop();//removes the last element of an array
fruits.unshift('Lemon')//add a new element at the begining of an array and unshift other ele...
fruits.splice(2,0,'Manna','grape')//the 2 specify where the new object will be substituted and the zero determines how many ele will be removed after the 2nd index
