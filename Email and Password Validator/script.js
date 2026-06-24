let email = document.querySelector("#email");
let password = document.querySelector("#password");
let validate = document.querySelector("#submit-btn");
let successMsg = document.querySelector("#success-message");
let emailError = document.querySelector("#email-error");
let passError = document.querySelector("#password-error")

const emailRegexEqn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegexEqn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

validate.addEventListener("click" , function(e){

    emailError.textContent = "";
    passError.textContent = "";
    successMsg.textContent = "";

    e.preventDefault();

    let isEmailValid = emailRegexEqn.test(email.value);
    let isPassValid = passRegexEqn.test(password.value);

    if(!isEmailValid){
        emailError.textContent = "Email not valid";
        emailError.style.color = "red";
        email.value = "";
    }

    if(!isPassValid){
        passError.textContent = "Password not valid";
        passError.style.color = "red";
        password.value = "";
    }

    if(isEmailValid && isPassValid){
        successMsg.textContent = "VALIDATED";
        successMsg.style.color = "green";
        email.value = "";
        password.value = "";
    }

    
})
