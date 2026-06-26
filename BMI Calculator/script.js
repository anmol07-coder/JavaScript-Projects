let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calculateBtn = document.querySelector("#calculate-btn");
let bmiValue = document.querySelector("#bmi-value");
let bmiStatus = document.querySelector("#bmi-status");
let message = document.querySelector("#message");

let finalHeight;
let finalWeight;
let bmi;
let finalBmi;

function getCategory(bmi){

    if(bmi < 18.5){
        return "Underweight";
    }

    else if(bmi >= 18.5 && bmi < 25){
        return "Healthy";
    }

    else if(bmi >= 25 && bmi < 30){
        return "Overweight";
    }

    else{
        return "Obese";
    }

}

height.addEventListener("input", function(){
    finalHeight = Number(height.value) / 100;
});

weight.addEventListener("input", function(){
    finalWeight = Number(weight.value);
});

calculateBtn.addEventListener("click", function(e){

    e.preventDefault();

    if(height.value.trim() === "" || weight.value.trim() === ""){
        alert("Please enter height and weight.");
        return;
    }

    if(finalHeight <= 0 || finalWeight <= 0){
        alert("Please enter valid values.");
        return;
    }

    bmi = finalWeight / (finalHeight * finalHeight);

    finalBmi = bmi.toFixed(1);

    bmiValue.textContent = finalBmi;
    let category = getCategory(bmi)
    bmiStatus.textContent = category;

    if(category === "Underweight"){
        message.textContent = "You should gain some healthy weight.";
    }
    else if(category === "Healthy"){
        message.textContent = "Great! Your BMI is in the healthy range.";
    }
    else if(category === "Overweight"){
        message.textContent = "Try maintaining a balanced diet and exercise.";
    }
    else{
        message.textContent = "Consult a healthcare professional for guidance.";
    }

    height.value = "";
    weight.value = "";

    finalHeight = 0;
    finalWeight = 0;


});