const todoField = document.querySelector("#todoField");
const sectionTag = document.querySelector("section");
const todos = []

function list(){
    const template = todos.map((todo,index) => `<li id = ${index} class="${todo.complete ? "crossout": ""}">${todo.name} <input type="checkbox" id= "complete" value= ${index} onclick="Finish()"><button id= "delete" value= ${index} onclick="removeTask()">x</button> </li>`);
    sectionTag.innerHTML = template.join("");
};

document.querySelector("form").addEventListener("submit", function(event){
    console.log("submit");
    event.preventDefault();
    var todo = todoField.value;
    todos.push({name: todo, complete: false});
    console.log(todos)
    list();
});

function removeTask() {
    console.log("delete"); 
    var deleteTask=document.querySelector("#index")
    deleteTask.remove();
}
function Finish() {
    console.log("complete");
}