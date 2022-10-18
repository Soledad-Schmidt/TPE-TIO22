"use strict";
console.log("Inicia programa");
let btn_cargar = document.querySelector("#cargar");
btn_cargar.addEventListener("click", enviar);

function enviar (){
    console.log("anda");
    let captcha = document.querySelector("#captcha").value;
    console.log(captcha);
    if (captcha == 7) {
        document.querySelector("#confirmacion").innerHTML = "Verificado con éxito!";
    } else {
        document.querySelector("#confirmacion").innerHTML = "Incorrecto! volvé a intentarlo!";
    }
    
}
