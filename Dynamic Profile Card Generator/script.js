let form = document.querySelector("#user-form");
let userImage = document.querySelector("#photo");
let userName = document.querySelector("#name");
let userProfession = document.querySelector("#profession");
let userAge = document.querySelector("#age");
let userLocation = document.querySelector("#location");
let userEmail = document.querySelector("#email");
let userLinkedin = document.querySelector("#linkedin");
let userGithub = document.querySelector("#github");
let userSkills = document.querySelector("#skills");
let userBio = document.querySelector("#bio");
let submit = document.querySelector("#submit-btn");
let outerDiv = document.querySelector(".cards-container");

form.addEventListener("submit" , function(e){
    e.preventDefault();


    if(userImage.value.trim() === "" || userName.value.trim() === "" || userProfession.value.trim() === "" || userAge.value.trim() === "" || userLocation.value.trim() === "" || userEmail.value.trim() === "" || userLinkedin.value.trim() === "" || userGithub.value.trim() === "" || userSkills.value.trim() === "" || userBio.value.trim() === ""){
        alert("Please complete all the details ");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("card");

    if(document.querySelector(".empty-state")){
        document.querySelector(".empty-state").remove();
    }

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("img-wrapper");

    let image = document.createElement("img");
    image.setAttribute("src" , userImage.value);
    image.setAttribute("alt" , "Profile Picture");
    imageDiv.appendChild(image);

    let name = document.createElement("h2");
    name.textContent = `Name : ${userName.value}`;

    let profession = document.createElement("h3");
    profession.textContent = `Profession : ${userProfession.value}`;

    let age = document.createElement("h3");
    age.textContent = `Age : ${userAge.value}`;

    let finalLocation = document.createElement("h4");
    finalLocation.textContent = `Location : ${userLocation.value}`;

    let email = document.createElement("h4");
    email.textContent = `Email : ${userEmail.value}`;

    let linkedinDiv = document.createElement("div");
    let linkedin = document.createElement("a");
    linkedin.setAttribute("href" , userLinkedin.value);
    linkedin.textContent = "LinkedIn";
    linkedin.target = "_blank";
    linkedin.rel = "noopener noreferrer";
    linkedinDiv.appendChild(linkedin);

    let githubDiv = document.createElement("div");
    let github = document.createElement("a");
    github.setAttribute("href" , userGithub.value);
    github.textContent = "Github";
    github.target = "_blank";
    github.rel = "noopener noreferrer";
    githubDiv.appendChild(github);


    let ul = document.createElement("ul");
    ul.textContent = `SKILLS : `;
    

    let skillsArr = userSkills.value.split(",");
    skillsArr.forEach(function(val){
        let li = document.createElement("li");
        li.classList.add("skill");
        li.textContent = val.trim();
        ul.appendChild(li);
    })


    let bio = document.createElement("p");
    bio.textContent = `Bio : ${userBio.value}`

    card.append(imageDiv , name , profession , age , finalLocation , email , linkedinDiv , githubDiv , ul , bio);

    outerDiv.append(card);

    form.reset();
})
