function breakChain(){
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;"; //Every icon has a special unicode so we gonna set the unicode now
    setTimeout(function(){
        chain.innerHTML = "&#xf127;";
    },1000);
}
breakChain();