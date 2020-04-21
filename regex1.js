//Anchors: string start ^ and end $
//The caret ^ matches the beginning of a text and the dollar $-at the end
//Just means the startswith and endwith method
let str1 = `it's fierce was a stone`;
console.log(/stone$/.test(str1));//true
console.log(/^it's/.test(str1));

//When testing for a full match of a string we use both anchors together
let goodInput = "12:34";
let badInput = "12:345";

let regexp = /^\d\d:\d\d/;
alert(regexp.test(goodInput));//true
console.log(regexp.test(badInput));//returns false

//Multiline mode of anchors ^$,flag "m"
//The multiline mode does not match only the bbeginning and the end of a string,but also at the start/end of line
let str = `1st place has to be me
2nd place :Piglet
3rd place na shalaye`;
let regexp = /^\d/gm;
console.log(str.match(regexp)); //it should return 1 2 3

//Searching for a new line '\n'
let str = `Winini:1
shizu money:2
spending:4`;
console.log(str.match(/\d\n/gm)); //1\n,2\n ..it didn't return '3' because there is no new line after 3

//Escaping, special characters
//using a special character as a regular one pretend it with a backslash :\.
console.log('Chapter 5.1'.match(/\d\.\d/));//5.1(match)

//parenthesis are also special characters
console.log('function g()'.match(/\g\(\)/));// returns "g()"

//Set and Ranges
console.log('Mop','Top'.match(/[tm]op/gi));//means find [t or m ] then "op"..//returns mop and top

//Ranges
//[a-z] is a character than ranges from a to z same thing goes for [0-5]
console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g));//returns xAF







