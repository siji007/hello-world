//Get input element
let filterInput = document.getElementById('filterInput');
//AddeventlIistener
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toLocaleUpperCase();
    //console.log(filterValue);

    //Get names Ul
    let namesUl = document.getElementById('names');

    //Get li from ul
    let liCollectionItems = namesUl.querySelectorAll('li.collection-item');

    //Loop through all collection items
    for(let i = 0; i < liCollectionItems.length;i++){
        let a = liCollectionItems[i].getElementsByTagName('a')[0];

        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            liCollectionItems[i].style.display = '';
            
        }else{
            liCollectionItems[i].style.display = 'none';
        }
    }
}


