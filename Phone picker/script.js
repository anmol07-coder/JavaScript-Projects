let heading = document.querySelector("#heading");
let select = document.querySelector("#phone-select");

select.addEventListener("change" , function(e){
    heading.textContent = `Selected phone : ${e.target.value}`;
    heading.style.color = "grey";
})