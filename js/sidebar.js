/*
=========================================================
 sidebar.js

 Crea la lista de lugares del menú lateral y administra
 el contador de lugares visibles.

=========================================================
*/


// ======================================================
// CREAR SIDEBAR
// ======================================================

function crearSidebar(mapa, marcadores) {

    const lista = document.getElementById("lista-lugares");

    lista.innerHTML = "";

    marcadores.forEach(item => {

        const tarjeta = document.createElement("div");

        tarjeta.className = "lugar-item";

        tarjeta.dataset.categoria = item.lugar.categoria;
        tarjeta.dataset.nombre = item.lugar.nombre.toLowerCase();
        tarjeta.dataset.id = item.lugar.id;

        tarjeta.innerHTML = `
            <strong>${item.lugar.nombre}</strong>
            <small>${item.lugar.categoria}</small>
        `;

        tarjeta.addEventListener("click", () => {

            // Quitar selección anterior
            document.querySelectorAll(".lugar-item").forEach(t =>
                t.classList.remove("activo")
            );

            // Seleccionar la tarjeta actual
            tarjeta.classList.add("activo");

            // Centrar mapa
            mapa.setView(
                [item.lugar.latitud, item.lugar.longitud],
                16
            );

            // Abrir popup
            item.marcador.openPopup();

        });

        // Guardar referencia para usar desde otros archivos
        item.tarjeta = tarjeta;

        lista.appendChild(tarjeta);

    });

    actualizarContadorLugares();

}


// ======================================================
// CONTADOR DE LUGARES
// ======================================================

function actualizarContadorLugares() {

    const visibles = document.querySelectorAll(
        "#lista-lugares .lugar-item:not([style*='display: none'])"
    ).length;

    document.getElementById("contador-lugares").textContent = visibles;

}