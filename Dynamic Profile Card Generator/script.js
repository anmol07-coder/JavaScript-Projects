let name = document.querySelector("#name");
let profession = document.querySelector("#profession");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let submit =  document.querySelector("#submit-btn");
let cardsContainer = document.querySelector(".cards-container");

submit.addEventListener("click", function(e){
    e.preventDefault();


    if(name.value == "" || profession.value == "" || bio.value == "" || photo.value == ""){
        alert("Submit all information ");
    }
    

   else{
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("card");

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("img-wrapper");

        let image = document.createElement("img");
        image.setAttribute("src" , photo.value);
        image.setAttribute("alt" , "Profile photo");

        let h2 = document.createElement("h2");
        h2.textContent = name.value;

        let h4 = document.createElement("h4");
        h4.textContent = profession.value;

        let p = document.createElement("p");
        p.textContent = bio.value;

        innerDiv.appendChild(image);
        outerDiv.appendChild(innerDiv);
        outerDiv.appendChild(h2);
        outerDiv.appendChild(h4);
        outerDiv.appendChild(p);

        cardsContainer.appendChild(outerDiv);

        name.value = "";
        profession.value = "";
        bio.value = "";
        photo.value = "";
   }
})