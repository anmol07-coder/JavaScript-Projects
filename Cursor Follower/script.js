let cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
});

let currentX = 0;
let currentY = 0;

function animate(){
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animate);

}

animate();