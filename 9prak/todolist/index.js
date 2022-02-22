let toDoList = [];
let deleteButtonList =[];
    

let ulElement= document.getElementById("list");
let node;
let textnode;
let form = document.getElementById("task-form");
form.addEventListener("submit", addTask);
window.o 
function insertTasksInHtml(newTask) {
    node = document.createElement("li");  
    node.classList.add("list-item")
    let deleteButton= document.createElement("a");
    let textDelete = document.createTextNode("Удалить");
    deleteButtonList.push(deleteButton); 
    deleteButton.appendChild(textDelete); 
    textnode = document.createTextNode(newTask);     
    node.appendChild(textnode);
    node.appendChild(deleteButton);    
    ulElement.appendChild(node);                   
}

function addTask(e) {
    e.preventDefault();
    let taskInput = document.getElementById("task-input").value; 
    
    if (taskInput === "") {
        alert("Введите хотя бы что нибудь");
    } else {
        toDoList.push(taskInput);
        insertTasksInHtml(taskInput);
        document.getElementById("task-input").value = "";
    }

    for(let i = 0; i < deleteButtonList.length; i++) {
        deleteButtonList[i].addEventListener("click", ()=>{
            let element = deleteButtonList[i].closest('li');
            element.remove();
        }, false);}
}



