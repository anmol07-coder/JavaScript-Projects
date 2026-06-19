// To-Do List App - Notes
// Objective

// Create a To-Do List application that allows users to:

// Add tasks
// Delete tasks
// Mark tasks as completed


let taskInput = document.querySelector("#taskInput");
let btn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

function createTask(){
    let task= document.createElement("li");
    task.innerHTML = `<span>${taskInput.value}</span>`;
    return task;
}

function addTask(task){
    taskList.appendChild(task);
}

function deleteButton(){
    let dltBtn = document.createElement("button");
    dltBtn.textContent = `❌`;
    return dltBtn;
}

btn.addEventListener("click" , function(){
    let task = createTask();
    addTask(task);

    let dltBtn = deleteButton();
    task.appendChild(dltBtn);
    dltBtn.addEventListener("click" , function(){
        task.remove();
    })

    task.classList.add("task");

    task.addEventListener("click" , function(){
        task.classList.toggle("completed");
    })

    taskInput.value = "";
})

