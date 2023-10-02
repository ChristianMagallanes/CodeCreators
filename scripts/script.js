function servicios() {
  let seccion = document.getElementById("servicios");
  seccion.scrollIntoView({ behavior: "smooth" });
}
function about() {
  let seccion = document.getElementById("sobremi");
  seccion.scrollIntoView({ behavior: "smooth" });
}
const verPlanesBtn = document.getElementById("ver-planes-btn");

verPlanesBtn.addEventListener("click", function(){
  window.location.href = './pages/planes.html';
});


