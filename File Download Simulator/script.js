let download = document.querySelector("#download-btn");
let percentage = document.querySelector("#percentage");
let downloadStatus = document.querySelector("#status");
let progressBar = document.querySelector("#progress-fill");
let count = 0;
let duration = 5;

download.addEventListener("click" , function(){
    download.setAttribute("disabled", "true");
    downloadStatus.textContent = "Downloading";
       
        let interval = setInterval(function(){
            if(count <= 99){
                count++;
                percentage.textContent = `${count}%`;
                progressBar.style.width = `${count}%`;

                if(count <= 40){
                    progressBar.style.background = " #ef4444";
                }

                else if(count<=60){
                    progressBar.style.background = "#f97316";
                }

                else if(count<=80){
                    progressBar.style.background = "#eab308";
                }

                else{
                    progressBar.style.background = "#22c55e";
                }
            }
           


            else{
                clearInterval(interval);
                downloadStatus.textContent = "Download Complete ✅";
                count=0;
            }
            
        },(duration*1000)/100);
    
})