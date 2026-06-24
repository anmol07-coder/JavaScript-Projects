let input = document.querySelector("#textarea");
let charactersCount = document.querySelector("#char-count");
let remainingCount = document.querySelector("#remaining-count");

input.addEventListener("input" , function(){
    charactersCount.textContent = input.value.length;
    remainingCount.textContent = 200 - input.value.length;
    
    if(200 - input.value.length <= 20){
        remainingCount.style.color = "red";
    }
    else if(200 - input.value.length === 200){
        remainingCount.style.color = "#60A5FA";
    }

    else{
        remainingCount.style.color = "green";
    }
})