let key = document.querySelector("#key-box")

window.addEventListener("keydown" , function(e){
    if(e.key !== " "){
        key.textContent = e.key;
    }
   else{
    key.textContent = "SPC";
   } 
    
})