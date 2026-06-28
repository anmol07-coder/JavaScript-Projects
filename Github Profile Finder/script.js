let userName = document.querySelector("#username");
let searchButton = document.querySelector("#search-btn");
let currentStatus = document.querySelector("#status");
let image = document.querySelector("#avatar");
let githubUserName = document.querySelector("#name");
let login = document.querySelector("#login");
let bio = document.querySelector("#bio");
let followers = document.querySelector("#followers");
let following = document.querySelector("#following");
let repositories = document.querySelector("#repos");
let userLocation = document.querySelector("#location");
let userCompany = document.querySelector("#company");
let viewProfile = document.querySelector("#profile-link");
let profileCard = document.querySelector(".profile-card");

async function getUser(){
    try{
        if(userName.value.trim() === ""){
            throw new Error("Username is not valid");
        }
        const url = `https://api.github.com/users/${userName.value}`;
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Invalid URL");
        }

        const data = await response.json();
        return data;
        

    }

    catch(err){
        currentStatus.textContent = err.message;
        return null;
    }

    finally{
        userName.value ="";
        searchButton.disabled = false;
        searchButton.textContent = "Search";
    }

}

function showUser(data){
    image.setAttribute("src" , data.avatar_url); 
    followers.textContent = data.followers; 
    following.textContent = data.following; 
    githubUserName.textContent = data.name;
    login.textContent = `@${data.login}`; 
    repositories.textContent = data.public_repos; 
    viewProfile.href = data.html_url;
    
    if(data.company !== null){
        userCompany.textContent = data.company; 
    } 
    else{
        userCompany.textContent = "Not Available";
    } 

    if(data.location !== null){ 
        userLocation.textContent = data.location; 
    } 
    else{
        userLocation.textContent = "Not Available"; 
    }

    if(data.bio !== null){
        bio.textContent = data.bio; 
    } 
    else{
        bio.textContent = "Not Available"; 
    }
}


searchButton.addEventListener("click" , async function(){

    currentStatus.textContent = "";
    searchButton.textContent = "Loading user";
    searchButton.disabled = true;
    

    let result = await getUser();
    if(result){
        profileCard.style.display = "block";
        showUser(result);
    }
    
    else{
        profileCard.style.display = "none";
    }

    
})