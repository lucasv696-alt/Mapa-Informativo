/*
=========================================================
 categorias.js

 Crea las categorías del menú lateral y administra
 la visibilidad de los marcadores y lugares.

=========================================================
*/


// ======================================================
// CREAR CATEGORÍAS
// ======================================================

function crearCategorias(mapa, marcadores) {

    const contenedor = document.getElementById("lista-categorias");

    contenedor.innerHTML = "";

    // Obtener categorías sin repetir
    const categorias = [
        ...new Set(
            marcadores.map(item => item.lugar.categoria)
        )
    ];

    categorias.forEach(categoria => {

        const etiqueta = document.createElement("label");

        etiqueta.innerHTML = `
            <input
                type="checkbox"
                checked
                value="${categoria}">

            <span class="categoria-icono">
                ${obtenerIcono(categoria)}
            </span>

            <span class="categoria-texto">
                ${categoria}
            </span>
        `;

        const checkbox = etiqueta.querySelector("input");

        checkbox.dataset.categoria = categoria;

        // Evento al marcar o desmarcar una categoría
        checkbox.addEventListener("change", () => {

            // Mostrar u ocultar marcadores
            marcadores.forEach(item => {

                if (item.lugar.categoria !== categoria) return;

                if (checkbox.checked) {
                    item.marcador.addTo(mapa);
                } else {
                    item.marcador.remove();
                }

            });

            // Mostrar u ocultar tarjetas
            document.querySelectorAll(".lugar-item").forEach(tarjeta => {

                if (tarjeta.dataset.categoria !== categoria) return;

                tarjeta.style.display = checkbox.checked ? "" : "none";

            });

            // Actualizar contador
            actualizarContadorLugares();

        });

        contenedor.appendChild(etiqueta);
        contenedor.appendChild(document.createElement("br"));

    });

}