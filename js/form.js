"use strict";
window.addEventListener('DOMContentLoaded',function(){listenerCaptcha();})

console.log("Inicia programa");
let btn_cargar = document.querySelector("#cargar");
btn_cargar.addEventListener("click", enviar);


function listenerCaptcha(){// llama a los listeners del captcha
    document.getElementById("validarCaptcha").addEventListener("click",validar);
   let botonCrear = document.getElementById("crearCaptcha");
   botonCrear.addEventListener("click", function(){
       document.getElementById("textCaptcha").innerHTML = crearCaptcha();
       document.getElementById("validacion").value = "";
   });
   document.getElementById("validacion").onpaste = function(e){
       e.preventDefault(); 
       return false;
   }
   document.getElementById("textCaptcha").oncopy = function(e){
       e.preventDefault(); 
       return false;
   }
}
function crearCaptcha(){//elige 6 caracteres del array aleatorios
    let caracteres = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@","#","$","%","&","?","¿","!","¡","+","-","*","/","(",")","[","]","{","}","<",">","=","_","^","~","`","|","¬",";",":",",",".","'","\"","\\",'"'];
    let captcha = "";
    for (let i = 0; i < 6; i++){
        let mezclador = caracteres[(Math.floor (Math.random()*(caracteres.length)))]
        captcha += mezclador;
    }
    return captcha;
}
function validar(){//valida el texto ingresado con el captcha
    let valor =  document.getElementById("textCaptcha").textContent;
    let aValidar = document.getElementById("validacion").value;
    let carne = false;
    if((valor == aValidar) && (aValidar != "")){
        document.getElementById("enviar").disabled = false;
        carne = true;
        iconoCaptcha(carne);
    }
    else{
        iconoCaptcha(carne);   
    }  
}
function iconoCaptcha(carne){//agrega el icono dependiendo de la validacion
    let icono = document.getElementById("verificar");   
    if(!carne){
        icono.className ="fa-solid fa-circle-exclamation";
    }
    else{
        icono.className ="fa-solid fa-face-laugh-beam";
    }
}
