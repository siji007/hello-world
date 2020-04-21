//Regular expressions are patterns that provides a powerful way to search and replace in text
//"i" means no case sensitive(no difference between A and a) 
//"g" with this flag the search looks for all matches,without it - only the first match is returned
//"m" multiline mode
//"s" Enables "dotall" mode that allows a dot . to match newline character
//"u" Enable 
//"y" "sticky" mode:searching at the exact position in the text

//Searching: str.match -->the method str.match(regexp) finds all matches of regexp in string str
let str = "We will,we rock you";
alert(str.match(/we/gi)); //We,we (an array of 2 substrings that match);
//without flag g
let result = str.match(/we/i);//here it will only return the first match it comes on contact with
alert(result[0]);//We(1st match
alert(result.length);//1
//Details
alert(result.index);//0 (position of the match)
alert(result.input);//WE will,will rock you(source string)

//Replace:str.replace
//replaces  string found ussing regexp in string with replacement
alert('We will, we will'.replace(/we/i,'I'));//I will.we will
alert('We will,we will'.replace(/we/ig,'I'));//I will,I will
//Symbols..we have $&,$
alert('I love HTML'.replace(/HTML/,"$& and Javascript"));//$& it insert the whole match --I love HTML and Javascript

//Testing: regexp.test-->This looks for atleast one match,if found returns true,otherwise false
let str = 'i love siji';
let regexp = /LOVE/i;
console.log(regexp.test(str));//Always interpret it as 'love is in i love siji'

//CHARACTER CLASSES
//'\d means digit class ranging from 0 to 9
let str = "+7(903)-123-45-62";
let regexp = "/\d/";
console.log(str.match(regexp));//7 'without flag 'g' the regular exp only look for the first match
//
let regexp = "/\d/g";
console.log(str.match(regexp).join(''));//790312345662

// "/\s/" means a space such as whhitspace or tab
//"/\w/" means word

let str = 'is there any CSS4';
let regexp = /CSS\d/
alert(str.match(regexp));//display CSS4

//We can also use many characters
console.log("I love HTML5".match(/\s\w\w\w\w\d/));//return HTML5

//inverse class..for every character there is an inverse class
//'\D' means it matches all character except integert
//"\S" match every character except space
//"\W" match every character except word

let str = "+7(903)-123-(45)";
console.log(str.match(/\D/g));//returns 790312345

//Aa dot is any character that matches  any character except new line,by default a dot doesn't match a new line
let regexp = /CS.4/;
console.log("CSS4".match(regexp));//returns 'CSS4'
//Unicode:flag "u" and class \p{...}
//We can search for characters with a property written as '\p{}u' it must always have a flag 'u'
//for instance '\p{Letter}' denote a letter in any language also written as '\p{L}' lower case--> '\p{Ll}', uppercase--> '\p{Lu}'
let str = "A ¬";
console.log(str.match(/\p{L}/u));//returns A,¬
//Main categories are Letter L,Number N,Punctuation P,Mark M,Sysmbol S,
//WE lso can reprensent currency with \p{Currency_Symbol} or as \p{Sc}
let regexp = /\p{Sc}\d\gu/;
let str = `Prices :$2, £5`;
console.log(str.match(regexp));//returns $2,£5











