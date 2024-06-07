var taskItems = 
document.getElementsByTagName("li");
var i;
for(i=0;i<taskItems.length;i++){
    var closeBtn =
    document.createElement("span");
    
    var closeTxt = 
    document.createTextNode("x");
    closeBtn.appendChild(closeTxt);
    closeBtn.className = "close";

    taskItems[i].appendChild(closeBtn);
}


//remove task element
var closeBtns = 
document.getElementsByClassName("close");
var i;
for(i=0;i<closeBtns.length;i++){
    closeBtns[i].onclick = function(){
        var taskItem = this.parentElement;
      //  taskItem.style.display ="none";
      taskItem.remove();
    }
}

//Add checked class to task item
var todolist = document.querySelector("#todolist");
todolist.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
       ev.target.classList.toggle("checked");
    }
});

//ADD TASK ITEM TO LIST
function createTask(){
    var newTask = document.createElement("li");
    var txtTask = document.getElementById("txtTask");

    newTask.appendChild(document.createTextNode(txtTask.value));

    //close button setup
    var closeBtn = document.createElement("span"); //span
    closeBtn.appendChild(document.createTextNode("x")); //text x
    closeBtn.className = "close"; //add class close
    closeBtn.addEventListener('click' , function(){
        this.parentElement.remove();
    })

    newTask.appendChild(closeBtn);

    if(txtTask.value===''){
        txtTask.style.border = "2px black solid";
        txtTask.style.background = "yellow";
        txtTask.placeholder = "Enter task here...";
    }else{
       document.getElementById("todolist").appendChild(newTask);
       txtTask.style.border = "none";
       txtTask.style.background = "white";
    }

    txtTask.value = "";
}