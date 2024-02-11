// Function called while clicking add button
function add_item() {

    // Getting box and ul by selecting id;
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){
    //if(item.valur!= ""){
        //creating element and adding value to it when yo
        // Creating element and adding value to it
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
    
        // Adding li to ul the list that exist 
       // let make_li = document.get elementry 
        list_item.appendChild(make_li);
    
        // Reset the value of box that you insert 
        item.value=""
        
        // Delete a li item on click
        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    
    }
    else{
    
        // Alert msg when value of box is "" empty ànd not any input string are  
        alert("plz add a value to item what you add for your  todo list");
    }
    
    }
    
