let download = document.querySelector("#download-btn");
let barDiv = document.querySelector("#progress-bar");
let percentageCount = document.querySelector("#percentage");
let count;
let duration = 10;

download.addEventListener("click",function(){
    count = 0;
    download.disabled = true;
    let interval = setInterval(function(){
        if(count <= 99){
            count++;
            barDiv.style.width = `${count}%`;
            percentageCount.textContent = `${count}%`;
            download.textContent = "Downloading";
        }

        else{
            download.disabled = false;
            clearInterval(interval);
            download.textContent = "Downloaded";
        }
    },(duration*1000)/100);
})