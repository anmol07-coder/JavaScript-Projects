let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let submit = document.querySelector("#btn");
let cardsContainer = document.querySelector(".cards-container");
let form = document.querySelector("form");

const userManager = {
    users : [],
    init : function (){
        submit.addEventListener("click" , this.submitForm.bind(this));
    },

    submitForm : function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser : function () {
        this.users.push({
            userName : userName.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value
        })

        form.reset();
        this.renderUI();
    },

    renderUI : function () {
        cardsContainer.innerHTML = "";

        this.users.forEach((user , index) =>{
            let outerDiv = document.createElement("div");
            outerDiv.classList.add("card");

            let innerDiv = document.createElement("div");
            innerDiv.classList.add("img-wrapper");

            let image = document.createElement("img");
            image.setAttribute("src" , user.photo);

            let h2 = document.createElement("h2");
            h2.textContent = user.userName;

            let h4 = document.createElement("h4");
            h4.textContent = user.role;

            let p = document.createElement("p");
            p.textContent = user.bio;

            let buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("btn-group");

            let removeBtn = document.createElement("button");
            removeBtn.classList.add("friend-btn");
            removeBtn.textContent = "Remove Friend";

            let profileBtn = document.createElement("button");
            profileBtn.classList.add("profile-btn");
            profileBtn.textContent = "View Profile";

            buttonsDiv.appendChild(removeBtn);
            buttonsDiv.appendChild(profileBtn);
            
            innerDiv.appendChild(image);

            outerDiv.appendChild(innerDiv);
            outerDiv.appendChild(h2);
            outerDiv.appendChild(h4);
            outerDiv.appendChild(p);
            outerDiv.appendChild(buttonsDiv);

            cardsContainer.appendChild(outerDiv);

            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

        })
    },

    removeUser : function (index) {
        this.users.splice(index,1);
        this.renderUI();
        
    }
}

userManager.init();
