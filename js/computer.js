let computerElement = document.querySelector('#computer');

let rotatey = document.querySelector("#rotatey");
let rotatex = document.querySelector("#rotatex");

rotatey.addEventListener("change", rotate);
rotatex.addEventListener("change", rotate);

rotatey.addEventListener("input", rotate);
rotatex.addEventListener("input", rotate);

function rotate() {
  let valuey = rotatey.value;
  let valuex = rotatex.value;
  computerElement.style.transform = "scale(1.5) rotatex(" + valuex + "deg) rotatey(" + valuey + "deg)";
}
rotate(); 
