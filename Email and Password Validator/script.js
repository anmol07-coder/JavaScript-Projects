let form = document.querySelector("#validator-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorEmail = document.querySelector("#email-message");
let errorPassword = document.querySelector("#password-message");
let toggleBtn = document.querySelector("#toggle-password");
let strengthBar = document.querySelector("#strength-fill");
let validate = document.querySelector("#submit-btn");
let outerMostDiv = document.querySelector(".container");

form.addEventListener("submit" , function(e){

    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|in|org|net)$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isEmailValid =  emailRegex.test(email.value.trim());
    let isPassValid = passRegex.test(password.value.trim());

    if(!isEmailValid){
        errorEmail.textContent = "Invalid Email";
        errorEmail.style.color = "red";

        setTimeout(function(){
            errorEmail.textContent = "";
        },3000);

        email.value = "";
    }

    if(!isPassValid){
        errorPassword.textContent = "Invalid Password";
        errorPassword.style.color = "red";

        setTimeout(function(){
            errorPassword.textContent = "";
        },3000);

        password.value = "";
    }

    if(isEmailValid && isPassValid){

        let successMsg = document.querySelector(".success");
        if(!successMsg){
            successMsg = document.createElement("div");
            successMsg.style.color = "green";
            outerMostDiv.appendChild(successMsg);
        }

        successMsg.textContent = "Password and Email validated";
        successMsg.classList.add("success");

        email.value = "";
        password.value = "";

        setTimeout(function(){
            successMsg.textContent = "";
        },3000);
    }

    

})

toggleBtn.addEventListener("click" , function(){
    if(password.getAttribute("type") === "password"){
        password.removeAttribute("type");
        password.setAttribute("type" , "text");
    }

    else{
        password.removeAttribute("type");
        password.setAttribute("type" , "password");
    }
    
})

password.addEventListener("input" , function(){
    let pass = password.value.trim();

    if(pass.length === 0){
        strengthBar.style.width = "0%";
        return;
    }

    let hasLowercase = /[a-z]/.test(pass);
    let hasUppercase = /[A-Z]/.test(pass);
    let hasNumber = /\d/.test(pass);
    let hasSpecial = /[@$!%*?&]/.test(pass);

    let passPoints = 0;
    if(password.value.length >= 8){
        passPoints++;
    }

    if(hasLowercase){
        passPoints++;
    }

    if(hasNumber){
        passPoints++;
    }

    if(hasSpecial){
        passPoints++;
    }

    if(hasUppercase){
        passPoints++;
    }

    if(passPoints <= 2){
        strengthBar.style.width = "30%";
        strengthBar.style.background = "red";
    }
    else if(passPoints <= 4){
        strengthBar.style.width = "60%";
        strengthBar.style.background = "orange";
    }
    else{
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }

})