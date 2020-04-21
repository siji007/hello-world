var cars=['dop','volvo','nissan','motorola'];
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}//this loop will print the car name + <br> at once instead of going through thee stress of assigning var to do that!
//easy peezy!!!
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}
var result = 1;
var counter = 0;

while(counter < 10){
    result = result * 2;
    counter = counter + 1;
}

console.log(result);
//result is 1024..it with take the first resul of 1*2 which is two then the counter takes from 0 to 9
//which when you count in an array format that is 10 ..so it the result which is 2 will be multiplied in 10 places to give 1024

