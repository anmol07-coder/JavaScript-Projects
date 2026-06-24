let key = document.querySelector("#key");
let code = document.querySelector("#code");
let eventCode = document.querySelector("#eventCode");
let keyBox = document.querySelector(".key-box");

window.addEventListener("keydown" , function(e){
    if(e.key !== " "){
        key.textContent = e.key;
    }

    else{
        key.textContent = "SPC";
    }
    code.textContent = e.keyCode;
    eventCode.textContent = e.code;
    
    keyBox.classList.add("animate");

    setTimeout(function(){
        keyBox.classList.remove("animate");
    },300);
})