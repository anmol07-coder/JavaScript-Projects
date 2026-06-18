// Create a digital clock that:

// Displays current time
// Updates every second
// Shows time in HH:MM:SS format
// Displays AM/PM


let clock = document.querySelector("#clock");

setInterval(function(){
    let currentTime = new Date();

    let currHour = currentTime.getHours();
    let currMin = currentTime.getMinutes();
    let currSec = currentTime.getSeconds();

    let lastPart = "AM";

    if(currHour >= 12){
        lastPart = "PM";
        currHour = currHour - 12;
    }

    if(currHour === 0){
        currHour = 12;
    }

    if(currHour < 10){
        currHour = "0" + currHour;
    }

    if(currMin < 10){
        currMin = "0" + currMin;
    }

    if(currSec < 10){
        currSec = "0" + currSec;
    }

    clock.textContent = `${currHour}:${currMin}:${currSec} ${lastPart}`;

},1000);