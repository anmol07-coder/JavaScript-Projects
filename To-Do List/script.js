let todoContainer = document.querySelector(".todo-container");
let inputTask = document.querySelector("#task-input");
let form = document.querySelector("#todo-form");
let button = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    if(inputTask.value.trim() === ""){
        alert("Please write some task ");
        inputTask.value = "";
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.classList.add("task-text");
    span.textContent = inputTask.value.trim();
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");

    let dltButton = document.createElement("button");
    dltButton.classList.add("delete-btn");
    dltButton.appendChild(deleteIcon); 

    li.appendChild(span);
    li.appendChild(dltButton);


    span.addEventListener("click" , function(){
        span.classList.toggle("completed");
    })

    dltButton.addEventListener("click" , function(){
        li.remove();

        if(taskList.children.length === 0){
            let empty = document.createElement("li");
            empty.classList.add("empty");
            empty.textContent = "No tasks yet. Add your first task!";
            taskList.appendChild(empty);
        }
    })

    let empty = document.querySelector(".empty");
    if(empty){
    taskList.removeChild(empty);
    }
    taskList.appendChild(li);

    inputTask.value = "";
})

