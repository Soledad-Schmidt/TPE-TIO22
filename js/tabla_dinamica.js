"use strict"

document.querySelector("#agregar3").addEventListener("click", agregar3);
document.querySelector("#vaciar").addEventListener("click", vaciar);
document.getElementById("mostrar").addEventListener("click", mostrar());

let productos = [
    {
        nombre : "Juan",
        apellido : "Perez",
        email : "juan@gmail.com",
        telefono : "2494497079",
        articulo : "calcomania",
        cantidad : "4",
    },
    {
        nombre : "Maria",
        apellido : "Lopez",
        email : "maria@gmail.com",
        telefono : "2494567342",
        articulo : "tazas",
        cantidad : "2",
    },
    {
        nombre : "Florencia",
        apellido : "Gonzalez",
        email : "florencia@gmail.com",
        telefono : "2494339866",
        articulo : "llaveros",
        cantidad : "5",
    },
];

function agregar3() {
    productos.push(productos[0], productos[1], productos[2]);
    mostrarTabla();
}

function vaciar(){
    productos = [];
    mostrarTabla();
}

function mostrar (e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let telefono = document.querySelector("#telefono").value;
    let articulo = document.querySelector("#articulo").value;
    let cantidad = document.querySelector("#cantidad").value;

    let compra = {
        nombre : nombre,
        apellido : apellido,
        email : email,
        telefono : telefono,
        articulo : articulo,
        cantidad : cantidad,
    };

    productos.push(compra);
    mostrarTabla();
}

function mostrarTabla() {
    let tabla_dinamica = document.querySelector("#tabla_dinamica");
    tabla_dinamica.innerHTML = '';
    for (const i of productos) {
        tabla_dinamica.innerHTML +=  
                                  `<tr>
                                        <td>${i.nombre}</td>
                                        <td>${i.apellido}</td>
                                        <td>${i.email}</td>
                                        <td>${i.telefono}</td>
                                        <td>${i.articulo}</td>
                                        <td>${i.cantidad}</td>
                                    </tr>`;
    };
}
mostrarTabla();
