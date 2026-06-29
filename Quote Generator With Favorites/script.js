let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let generateButton = document.querySelector("#generate-btn");
let saveButton = document.querySelector("#save-btn");
let currentStatus = document.querySelector("#status");
let favoriteQuotes = document.querySelector("#favorites-list");
let savedQuotes = [];

async function getQuote(){

    try{
        const url = "https://dummyjson.com/quotes/random"
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Quote not generated");
        }

        const data = await response.json();
        return data;
    }

    catch(err){
        currentStatus.textContent = err.message;
    }

    finally{
        generateButton.textContent = "Generate Quote";
        generateButton.disabled = false;
    }
}

function showQuote(data){
    quote.textContent = data.quote;
    author.textContent = `-${data.author}`;
    author.style.display = "block";
}

generateButton.addEventListener("click" , async function(){
    generateButton.textContent = "Loading...";
    generateButton.disabled = true;
    currentStatus.textContent = "";

    let result = await getQuote();

    if(result){
        showQuote(result);
    }

    else{
        author.style.display = "none";
    }
    
})

function createQuoteObject(){
    let obj = {
        quote : quote.textContent,
        author : author.textContent,
    }

    return obj;
}

saveButton.addEventListener("click" , function(){

    if (quote.textContent.trim() === "Click the button to generate a quote.") {
        currentStatus.textContent = "Please generate a quote first.";
        setTimeout(function(){
            currentStatus.textContent = "";
        },2000);

        return;
    }
    
    let obj = createQuoteObject();

    if(!localStorage.getItem("oldFavorites")){
        let oldFavorites = [];
        oldFavorites.push(obj);
        localStorage.setItem("oldFavorites" , JSON.stringify(oldFavorites));

        currentStatus.textContent = "Quote saved successfully.";
        setTimeout(function(){
            currentStatus.textContent = "";
        },2000)
    }

    else{
        let oldFavorites = localStorage.getItem("oldFavorites");
        oldFavorites = JSON.parse(oldFavorites);
        let alreadyPresent = oldFavorites.find(function(val){
            return val.quote === obj.quote;
        });

        if(alreadyPresent){
            currentStatus.textContent = "Quote already saved.";
            setTimeout(function(){
                currentStatus.textContent = "";
            },4000)
            return;
        }  

        oldFavorites.push(obj);
        localStorage.setItem("oldFavorites" , JSON.stringify(oldFavorites));
        currentStatus.textContent = "Quote saved successfully.";
        
        setTimeout(function(){
            currentStatus.textContent = "";
        },2000)
    }

    renderFavoriteQuotes(readSavedQuotes());
})

function readSavedQuotes(){
    if(localStorage.getItem("oldFavorites")){
        savedQuotes = JSON.parse(localStorage.getItem("oldFavorites"));
    }

    return savedQuotes;

}

function renderFavoriteQuotes(savedQuotes){
    favoriteQuotes.innerHTML = "";
    savedQuotes.forEach(function(val){
        let div = document.createElement("div");
        div.classList.add("favorite-card");

        let button = document.createElement("button");
        button.textContent = "Delete";

        let p = document.createElement("p");
        p.textContent = val.quote;

        let h4 = document.createElement("h4");
        h4.textContent = val.author;

        div.append(p , h4 ,button);
        favoriteQuotes.append(div);

        button.addEventListener("click" , function(){
            if(localStorage.getItem("oldFavorites")){
                let newQuotes = JSON.parse(localStorage.getItem("oldFavorites"));
                let filteredElement = newQuotes.filter(function(newVal){
                    return val.quote !== newVal.quote;
                });

                localStorage.setItem("oldFavorites" , JSON.stringify(filteredElement));
                renderFavoriteQuotes(readSavedQuotes());
            }
        })
    })
}

window.addEventListener("load", function(){

    let quotes = readSavedQuotes();
    renderFavoriteQuotes(quotes);
});

// data.author
// data.quote