// plano.js

let panzoom = null;

function abrirPlano() {

    const visor = document.getElementById("visor-plano");
    const imagen = document.getElementById("imagen-plano");

    visor.style.display = "flex";

    if (!panzoom) {

        panzoom = Panzoom(imagen, {
            maxScale: 8,
            minScale: 1
            
        });

        imagen.parentElement.addEventListener(
            "wheel",
            panzoom.zoomWithWheel
        );
    }

    panzoom.reset();

}

function cerrarPlano() {

    document.getElementById("visor-plano").style.display = "none";

}

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("cerrar-plano")
        .addEventListener("click", cerrarPlano);

});