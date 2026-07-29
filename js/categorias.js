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
    const botonToggle = document.getElementById("btn-toggle-categorias");

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

        checkbox.addEventListener("change", () => {

            actualizarCategoria(
                mapa,
                marcadores,
                categoria,
                checkbox.checked
            );

            actualizarTextoBoton();

        });

        contenedor.appendChild(etiqueta);
        contenedor.appendChild(document.createElement("br"));

    });

    // ==========================================
    // BOTÓN SELECCIONAR / DESELECCIONAR TODAS
    // ==========================================

    botonToggle.addEventListener("click", () => {

        const checkboxes = contenedor.querySelectorAll(
            'input[type="checkbox"]'
        );

        const todasMarcadas = [...checkboxes].every(cb => cb.checked);

        checkboxes.forEach(cb => {

            cb.checked = !todasMarcadas;

            actualizarCategoria(
                mapa,
                marcadores,
                cb.dataset.categoria,
                cb.checked
            );

        });

        actualizarTextoBoton();

    });

    actualizarTextoBoton();

}



// ======================================================
// MOSTRAR / OCULTAR UNA CATEGORÍA
// ======================================================

function actualizarCategoria(
    mapa,
    marcadores,
    categoria,
    visible
) {

    marcadores.forEach(item => {

        if (item.lugar.categoria !== categoria) return;

        if (visible) {
            item.marcador.addTo(mapa);
        } else {
            item.marcador.remove();
        }

    });

    document.querySelectorAll(".lugar-item").forEach(tarjeta => {

        if (tarjeta.dataset.categoria !== categoria) return;

        tarjeta.style.display = visible ? "" : "none";

    });

    actualizarContadorLugares();

}



// ======================================================
// ACTUALIZAR TEXTO DEL BOTÓN
// ======================================================

function actualizarTextoBoton() {

    const boton = document.getElementById("btn-toggle-categorias");

    const checkboxes = document.querySelectorAll(
        '#lista-categorias input[type="checkbox"]'
    );

    const todasMarcadas = [...checkboxes].every(cb => cb.checked);

    boton.innerHTML = todasMarcadas

        ? `<i class="fa-regular fa-eye-slash"></i> Ocultar todas`

        : `<i class="fa-regular fa-eye"></i> Mostrar todas`;

}