let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let lastPart = document.querySelector("#ampm");
let date = document.querySelector("#date");

let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

function updateClock(){
    let currTime = new Date();

    let currHour = currTime.getHours();
    let currMinute = currTime.getMinutes();
    let currSecond = currTime.getSeconds();
    let currDate = currTime.getDate();
    let currMonth = currTime.getMonth();
    let currYear = currTime.getFullYear();
    let currDay = currTime.getDay();

    let ampmPart = "AM";

    if(currHour > 12){
        ampmPart = "PM";
        currHour = currHour-12;
    }

    if(currHour === 0){
        currHour = 12;
    }

    if(currHour < 10){
        currHour = `0${currHour}`;
    }

    if(currMinute < 10){
        currMinute = `0${currMinute}`;
    }

    if(currSecond < 10){
        currSecond = `0${currSecond}`;
    }

    if(currDate < 10){
        currDate = `0${currDate}`;
    }

    hours.textContent = currHour;
    minutes.textContent = currMinute;
    seconds.textContent = currSecond;
    lastPart.textContent = ampmPart;
    date.textContent = `${days[currDay]}, ${currDate} ${months[currMonth]} ${currYear}`;
}

updateClock();
setInterval(updateClock, 1000);
