let addButton = document.querySelector("#addBtn");
let formPopup = document.querySelector(".form-popup");
let overlay = document.querySelector(".overlay");
let closeButton = document.querySelector(".close-form")
let form = document.querySelector("#callForm");
let imageInput = document.querySelector("#image");
let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let town = document.querySelector("#town");
let purpose = document.querySelector("#purpose");
let priorityOptions = document.querySelectorAll('input[name="priority"]');
let radioArray = Array.from(priorityOptions);
let stack = document.querySelector(".stack");
let upButton = document.querySelector("#upBtn");
let downButton = document.querySelector("#downBtn")
let currIndex = 0;

function validateFields(){
    if(imageInput.value.trim() === "" || name.value.trim() === "" ||phone.value.trim() === "" ||town.value.trim() === "" || purpose.value.trim() === ""){
        alert("Please enter valid details in form");
        return false;
    }

    else{
        return true;
    }
}

function addUsers(obj){
    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks" , JSON.stringify(oldTasks));
    }

    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks" , JSON.stringify(oldTasks));
    }
}

addButton.addEventListener("click" , function(){
    formPopup.classList.add("active");
    overlay.classList.add("active");

})

closeButton.addEventListener("click" , function(){
    formPopup.classList.remove("active");
    overlay.classList.remove("active");
})

form.addEventListener("submit" , function(e){
    e.preventDefault();

    
    if(!validateFields()){
        return;
    };
    
    let filteredOption = radioArray.filter(function(val){
        return val.checked;
    })

    addUsers({
        imageUrl : imageInput.value,
        userName : name.value,
        userNumber : phone.value,
        userTown : town.value,
        userPurpose : purpose.value,
        priority : filteredOption[0].value,
        createdAt: new Date().toLocaleString()
    });

    let allTasks = JSON.parse(localStorage.getItem("tasks"));
    currIndex = allTasks.length - 1;
    showUsers();
    
    form.reset();
    formPopup.classList.remove("active");
    overlay.classList.remove("active");
    
})

function showUsers() {
    
    stack.innerHTML = "";
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if(allTasks.length === 0){
        return;
    }

    for(let i=0; i< Math.min(3 , allTasks.length); i++){
        let task = allTasks[(currIndex+i) % allTasks.length];

        let card = document.createElement("div");
        card.className = "card";

        if(i==0){
            card.classList.add("active");
        }

        else if(i==1){
            card.classList.add("second");
        }

        else{
            card.classList.add("third");
        }

        if (task.priority === "Emergency") {
            card.classList.add("emergency");
        }

        else if (task.priority === "Urgent") {
        card.classList.add("urgent");
        }

        else if (task.priority === "Important") {
            card.classList.add("important");
        }

        else {
            card.classList.add("norush");
        }
        
        let priorityStrip = document.createElement("div");
        priorityStrip.className = "priority-strip";

            /* Card Top */

        let cardTop = document.createElement("div");
        cardTop.className = "card-top";

            /* Avatar */

        let avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = task.imageUrl;
        avatar.alt = task.userName;

            /* User Info */

        let info = document.createElement("div");

        let userName = document.createElement("h3");
        userName.className = "person-name";
        userName.textContent = task.userName;

        let town = document.createElement("p");
        town.className = "town";
        town.textContent = task.userTown;

        info.append(userName, town);

        cardTop.append(avatar, info);

            /* Purpose */

        let purposeBox = document.createElement("div");
        purposeBox.className = "purpose-box";

        let heading = document.createElement("h4");
        heading.textContent = "Purpose";

        let purpose = document.createElement("p");
        purpose.className = "purpose";
        purpose.textContent = task.userPurpose;

        purposeBox.append(heading, purpose);

        let cardBottom = document.createElement("div");
        cardBottom.className = "card-bottom";

        let badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = task.priority;

        let time = document.createElement("small");
        time.className = "time";
        time.textContent = task.createdAt;

        cardBottom.append(badge, time);

        let cardButtons = document.createElement("div");
        cardButtons.className = "card-buttons";

        let callBtn = document.createElement("button");
        callBtn.className = "call-btn";

        let callIcon = document.createElement("i");
        callIcon.className = "ri-phone-fill";

        callBtn.append(callIcon, " Call");

        callBtn.addEventListener("click", function () {

            window.location.href = `tel:${task.userNumber}`;

        });


        let messageBtn = document.createElement("button");
        messageBtn.className = "message-btn";

        let messageIcon = document.createElement("i");
        messageIcon.className = "ri-message-3-fill";

        messageBtn.append(messageIcon, " Message");

        messageBtn.addEventListener("click", function () {

            window.location.href = `sms:${task.userNumber}`;

        });

        cardButtons.append(callBtn, messageBtn);
        card.append(
            priorityStrip,
            cardTop,
            purposeBox,
            cardBottom,
            cardButtons
        );

        stack.append(card);
    }

}
    
downButton.addEventListener("click",function(){
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if(allTasks.length===0){
        return;
    }
    currIndex++;
    currIndex%=allTasks.length;
    showUsers();
});

upButton.addEventListener("click",function(){
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if(allTasks.length===0){
        return;
    }
    currIndex--;
    if(currIndex<0){
        currIndex=allTasks.length-1;
    }
    showUsers();

});
showUsers();