let form=document.getElementById('addForm');
let itemsList = document.getElementById('items');
let filter = document.getElementById('filter');
const body = document.getElementById('itembody');
const dbutton = document.getElementById('dmode');


//Form Submit event
form.addEventListener('submit', addItem);
//DeleteEvent
itemsList.addEventListener('click',removeItem);

//
filter.addEventListener('keyup',filterItems);

//darkmode
dbutton.addEventListener('click',darkeMode);
//Normal mode
dbutton.addEventListener('dblclick',()=>{
    body.classList.add('show');
});
//Add item
function addItem(event){
    event.preventDefault();//to stop submitting to the page itself
    
    //Get input value
    let newItem = document.getElementById('item').value;

    //Create new li element
    let li = document.createElement('div');
    
    //Add class
    li.className = 'list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    
    //Create del button
    let delButton = document.createElement('button');
    //Add classes to deletebutton
    delButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node to it button
    delButton.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(delButton);

    //Append li to list
    itemsList.appendChild(li);


}

//Remove Item
function removeItem(e){
    console.log(1)//it should only read when we click the 'X'delete button not when we click on the item itself,so we solve this with the function below
    if(e.target.classList.contains('delete')){
        //console.log(1); //this should work display '1' only when we click on delbutton 'X'
        if(confirm('Are you Sure?')){
            let li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }

}
//FilterList
function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();//conver all text in the search input to lowerCase
    //To Get list
    let items = itemsList.getElementsByTagName('div');
    //convert the items into an array format
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        //console.log(itemName);//display each item along with their textContent

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

//dark Mode
function darkeMode(e){
    e.preventDefault();
    body.style.backgroundColor = "#000";

}