var num=892;
num.toString(16);/*convert the out to base(16) and return it in a string formatt*/

var number=2;
while(number!= Infinity){
    number = number*number;
}
/*not sure if this will run..LMAO!!!*/
var x=100/'Apple';
if (isNaN(x) == true){
    xee='It is truly not a number';
    return xee;
}
var y=112.365;
y.toFixed(2);/*returns 112.37*/
y.toPrecision(2);/*returns  112.4*/
y.exponential(4);

/*NUMBER METHOD!!1*/
Use to convert js variables to Numbers
 x= true;
 Number(x);/*returns 1*/
 x=new Date();
 Number(x)/*returns a random number as output*/
 

 x='10' '20'
 Number(x)/*returns Nan function*/

    //PARSEINT AND parseFloat
    parseInt('10.33')/*returns 10 because it is the first integer it came across*/
    parseInt('10 20 30')//returns only 10 bcus it is the first integer
    parseInt('years 10')/*returnds NaN bcus year is not a number neither an integter*/

parseFloat('10.33')//returns 10.33 bcus it is the float in the argument
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});//ascending orders




