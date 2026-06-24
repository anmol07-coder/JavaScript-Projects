let btn = document.querySelector("#theme-btn");
let body = document.querySelector("body");

function setDarkOrLight(){
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else{
        body.classList.add("light");
        body.classList.remove("dark");
    }
}

if(localStorage.getItem("theme")){
    body.classList.remove("dark");
    body.classList.remove("light");

    body.classList.add(localStorage.getItem("theme"));

}

else{
    setDarkOrLight();
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener("change", function(){

      if(!localStorage.getItem("theme")){
          setDarkOrLight();
      }

  });

btn.addEventListener("click" , function(){
    if(document.body.classList.contains("dark")){
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem("theme" , "light");
    }

    else{
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem("theme" , "dark");
    }
})

