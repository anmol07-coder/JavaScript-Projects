// Counter app => Build a Counter App that can:

// Increase the count
// Decrease the count
// Reset the count


let increase = document.querySelector("#increase");
let decrease =  document.querySelector("#decrease");
let reset =  document.querySelector("#reset");
let countElement = document.querySelector("#count");
let currCount = 0;

function changeColor(){
    if(currCount > 0){
        countElement.style.color = "green";
    }

    else if(currCount < 0){
        countElement.style.color = "red";
    }

    else{
        countElement.style.color = "grey";
    }
}

increase.addEventListener("click" , function(){
    currCount++;
    countElement.textContent = currCount;
    changeColor();
})

decrease.addEventListener("click" , function(){
    currCount--;
    countElement.textContent = currCount;
    changeColor();
})

reset.addEventListener("click" , function(){
    currCount = 0;
    countElement.textContent = currCount;
    changeColor();
})