"use strict";

document.querySelector("#btn_menu").addEventListener("click", toggleMenu);
function toggleMenu () {
    document.querySelector(".botonera_principal").classList.toggle("show");
}