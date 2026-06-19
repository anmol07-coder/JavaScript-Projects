// Create a BMI Calculator that:

// Takes height and weight as input
// Calculates BMI
// Displays BMI value
// Displays BMI category
// Changes category color dynamically



let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calculateBtn = document.querySelector("#calculateBtn");
let bmiValue = document.querySelector("#bmiValue");
let category = document.querySelector("#category");
let finalHeight;
let finalWeight;
let bodyCategory;
let finalBmi;
let bmi;

function findCategory(){
    if(finalBmi <= 18.5){
        category.textContent = `Underweight`;
        category.style.color = "lightblue";
    }

    else if(finalBmi > 18.5 && finalBmi <= 24.9){
        category.textContent = `Normal Weight`;
        category.style.color = "green";
    }

    else if(finalBmi > 24.9 && finalBmi <= 29){
        category.textContent = `Overweight`;
        category.style.color = "orange";
    }

    else{
        category.textContent = `Obese`;
        category.style.color = "red";
    }
}

height.addEventListener("input" , function(e){
    finalHeight = height.value / 100;
});

weight.addEventListener("input" , function(e){
    finalWeight = weight.value;
});


calculateBtn.addEventListener("click" , function(){
    bmi = finalWeight / (finalHeight*finalHeight);
    finalBmi = bmi.toFixed(2);
    bmiValue.textContent = finalBmi;
    findCategory();
    height.value = "";
    weight.value = "";

})

