let movieName = document.querySelector("#movie-name");
let searchButton = document.querySelector("#search-btn");
let currentStatus = document.querySelector("#status");
let moviesContainer = document.querySelector("#movies-container");

function validate(){
    if(movieName.value.trim() === ""){
        return false;
    }
    return true;
    
}

async function searchMovie(){

    try{
        const apiKey = "7bac4ba2";
        const url =  `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName.value}`;

        const response = await fetch(url);
        
        const data = await response.json();
    
        if(data.Response === "False"){
            throw new Error(data.Error);
        }

        return data;
    }

    catch(err){
        currentStatus.textContent = err.message;
    }

    finally{
        movieName.value = "";
        searchButton.textContent = "Search";
        searchButton.disabled = false;
    }
}

function showMovie(data){
    data.Search.forEach(function(val){
        let movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        let image = document.createElement("img");
        if(val.Poster === "N/A"){
            image.src = "placeholder-image";
        }
        else{
            image.src = val.Poster;
        }

        let movieInfo = document.createElement("div");
        movieInfo.classList.add("movie-info");

        let title = document.createElement("h2");
        title.textContent = val.Title;
        
        let type = document.createElement("p");
        type.textContent = val.Type;

        let year = document.createElement("p");
        year.textContent = `Year : ${val.Year}`;

        let imdbRating = document.createElement("a");
        imdbRating.textContent = "View on IMDb";
        imdbRating.href = `https://www.imdb.com/title/${val.imdbID}`;
        imdbRating.target = "_blank";
        imdbRating.rel = "noopener noreferrer";

        movieInfo.append(title , type , year , imdbRating);
        movieCard.append(image , movieInfo);
        moviesContainer.append(movieCard);

    })
    
}

searchButton.addEventListener("click" , async function(){
    currentStatus.textContent = "";
    moviesContainer.innerHTML = "";

    searchButton.textContent = "Loading...";
    searchButton.disabled = true;
    let isValid = validate();
    if(!isValid){
        alert("Please enter a valid movie name ");
        return;
    }

    let result = await searchMovie();

    if(result){
        showMovie(result);
    }
    

})