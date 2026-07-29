function iniciarBienvenida() {

    const pantalla = document.getElementById("pantalla-bienvenida");
    const boton = document.getElementById("btn-comenzar");
    const contenedor = document.getElementById("bienvenida-iconos");

    const categorias = [
    "Hospital",
    "Restaurante",
    "Cafetería",
    "Estación de servicio",
    "Farmacia",
    "Banco"
];

    contenedor.innerHTML = "";

    categorias.forEach(categoria => {

        contenedor.innerHTML += crearIconoHTML(categoria);

    });

    boton.addEventListener("click", () => {

        pantalla.style.display = "none";

    });

}