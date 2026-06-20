function createToaster(config){
    const parentDiv = document.querySelector(".parent");
    parentDiv.classList.add(`${config.positionY}-${config.positionX}`);
    return function(str){
        
        let div = document.createElement("div");

        div.textContent = str;
        div.classList.add("toast");

        if(config.theme === "dark"){
            div.classList.add("dark-toast");
        }
        else{
            div.classList.add("light-toast");
        }
        parentDiv.appendChild(div);

        setTimeout(() => {
            parentDiv.removeChild(div);
        }, config.duration * 1000);

    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3
});

toaster("Kya hal h meri jaan...");

setTimeout(function(){
    toaster("Aaj tho kedi lagri tu dikhne m");
},4000)

setTimeout(function(){
    toaster("Or padhai ke kya hal chlre");
},8000)