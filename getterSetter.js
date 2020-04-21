var pile = {
    elements:['egg','milk','orange'],
    get height(){
        return this.elements.length;
    },
    set height(value){
        console.log('ignoring attempt to set height',value);
    }
};
console.log(height);//this will return the total number of element
pile.height = 10;//return ignoring attempt
