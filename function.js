function mytemp(fahrenheit){
    return (5/9) * (fahrenheit);
}
document.getElementById('demo')=mytemp(77);

var know='The temperature is' +mytemp(77)+'celcius';

//zoom zoom
function randomPoi(radius){
    var angle = Math.random() *  2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}

//zoom zoom
function zeroPad(number, width) {
var string = String(number);
while (string.length < width)
string = "0" + string;
return string;
}
function printFarmInventory(cows, chickens, pigs) {
console.log(zeroPad(cows, 3) + " Cows");
console.log(zeroPad(chickens, 3) + " Chickens");
console.log(zeroPad(pigs, 3) + " Pigs");
}
//zoom zoom
function power(base, exponent) {
    if (exponent == undefined)
    exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
    result *= base;
    return result;
    }

    //zoom zoom
   
    function laugh(num){
        num = 'ha';
        for(var i=0;i < num; i++){
            
             num[i];
            
        }
       
    }
