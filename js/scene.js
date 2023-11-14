const carroBlanco = document.querySelector("#CarroBlanco");
const carroVerde = document.querySelector("#CarroVerde");
const carroMorado = document.querySelector("#CarroMorado");
const boton1 = document.querySelector("#Boton1");
const boton2 = document.querySelector("#Boton2");
const boton3 = document.querySelector("#Boton3");

boton1.addEventListener("click", function () {
  carroBlanco.setAttribute("visible", true);
  carroVerde.setAttribute("visible", false);
  carroMorado.setAttribute("visible", false);
});

boton2.addEventListener("click", function () {
  carroBlanco.setAttribute("visible", false);
  carroVerde.setAttribute("visible", true);
  carroMorado.setAttribute("visible", false);
});

boton3.addEventListener("click", function () {
  carroBlanco.setAttribute("visible", false);
  carroVerde.setAttribute("visible", false);
  carroMorado.setAttribute("visible", true);
});
