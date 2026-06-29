let cityName = document.querySelector("#city");
let searchButton = document.querySelector("#search-btn");
let currentStatus = document.querySelector("#status");
let image = document.querySelector("#weather-icon");
let getCityName = document.querySelector("#city-name");
let countryName = document.querySelector("#country");
let temperature = document.querySelector("#temperature");
let condition = document.querySelector("#condition");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let weatherCard = document.querySelector(".weather-card");


async function getWeather(){
    try{

        if(cityName.value.trim() === ""){
            throw new Error("Please enter city name");
        }   

        const api_key = "4fd116895d5c496cbdf162816262806"
    
        const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName.value.trim()}`;

        let response = await fetch(url);
        let data = await response.json();

        if(!response.ok){
            throw new Error(data.error.message);
        }
        return data;
    }

    catch(err){
        currentStatus.textContent = err.message;
    }

    finally{
        searchButton.textContent = "Search";
        searchButton.disabled = false;
        cityName.value="";
    }
}

function showWeather(data){
    image.src = data.current.condition.icon;
    getCityName.textContent = data.location.name;
    condition.textContent = data.current.condition.text;
    humidity.textContent = `${data.current.humidity}%`;
    wind.textContent = `${data.current.wind_kph} km/h`;
    temperature.textContent = `${data.current.temp_c}°C`;
    countryName.textContent = data.location.country;
}

searchButton.addEventListener("click" , async function(){
    searchButton.textContent = "Loading...";
    searchButton.disabled = true;
    currentStatus.textContent = "";

    let result = await getWeather();

    if(result){
        weatherCard.style.display = "block";
        showWeather(result);
    }

    else{
        weatherCard.style.display = "none";
    } 
    
})
