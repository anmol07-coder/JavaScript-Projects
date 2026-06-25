let button = document.querySelector("#show-alert");
let notification = document.querySelector("#notification");
let closeBtn = document.querySelector(".close");

button.addEventListener("click" , function(){
    notification.classList.add("show");

    setTimeout(function(){
        notification.classList.remove("show");
    },3000)
})

closeBtn.addEventListener("click" , function(){
    notification.classList.remove("show");
})