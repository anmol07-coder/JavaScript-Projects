let input = document.querySelector("#message");
let total = document.querySelector("#total");
let remaining = document.querySelector("#remaining");
let progressBar = document.querySelector("#progress-bar");

input.addEventListener("input" , function(e){
    let characterCount = input.value.length;
    let remainigCharacters = 250 - input.value.length;

    total.textContent  = characterCount;
    remaining.textContent = remainigCharacters;

    let percentage = (characterCount/250)*100;
    progressBar.style.width = percentage+"%";

    if(percentage <=40){
        progressBar.style.background = "blue";
    }

    else if(percentage <= 70){
        progressBar.style.background = "yellow";
    }

    else if(percentage <= 90){
        progressBar.style.background = "orange";
    }

    else{
        progressBar.style.background = "red";
    }
})