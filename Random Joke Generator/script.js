let generateButton = document.querySelector("#generate-btn");
let punchLine = document.querySelector("#punchline");
let setup = document.querySelector("#setup");
let jokeStatus = document.querySelector("#status");

 async function getJoke(){
    try{
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();
        console.log(data);
        
        let currPunchLine = data.punchline;
        let currentSetup = data.setup;

        punchLine.textContent = currPunchLine;
        setup.textContent = currentSetup;

        return true;

    }
    catch(err){
        console.log(err.message);
        jokeStatus.textContent = "Failed to fetch joke.."

        return false;
    }

    finally{
        generateButton.disabled = false;
        generateButton.textContent = "Generate Joke";
    }
}

async function loadJoke(){
    generateButton.textContent = "Loading...";
    generateButton.disabled = true;

    jokeStatus.textContent = "Fetching joke..."

    let result = await getJoke();

    if(result){
        jokeStatus.textContent = "";
    }

    else{
        jokeStatus.textContent = "Failed to fetch joke";
    }
}

window.addEventListener("load" , function(){
    loadJoke();
})


generateButton.addEventListener("click" , function(){
    loadJoke();
    
})