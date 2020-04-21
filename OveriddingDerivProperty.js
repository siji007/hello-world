function Rabbit(type) {
    this.type = type;
    }
    var killerRabbit = new Rabbit("killer");
    var blackRabbit = new Rabbit("black");

    Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
    line + "'");
    };
    blackRabbit.speak("Doom...");
    
    Rabbit.prototype.teeth = "small";
    console.log(killerRabbit.teeth);
   
    killerRabbit.teeth = "long, sharp, and bloody";
    console.log(killerRabbit.teeth);
    VM116:2 long, sharp, and bloody//Overidding has occured here