var rabbit = {}
undefined
rabbit.speak = function(line){
    return 'Siji is saying ' + line + '.';
}
ƒ (line){
    return 'Siji is saying ' + line + '.';
}
rabbit.speak('Victoria I love you');
//zoom zoom

function speak(line) {
console.log("The " + this.type + " rabbit says '" +
line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("Oh my ears and whiskers, ");