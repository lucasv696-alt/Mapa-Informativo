function crearSidebar(mapa, marcadores) {

    const lista = document.getElementById("lista-lugares");
    lista.innerHTML = "";

    marcadores.forEach(item => {

        const tarjeta = document.createElement("div");

        tarjeta.className = "lugar-item";
        tarjeta.dataset.id = item.lugar.id;

        tarjeta.innerHTML = `
            <strong>${item.lugar.nombre}</strong>
            <small>${item.lugar.categoria}</small>
        `;

        tarjeta.addEventListener("click", () => {

            document.querySelectorAll(".lugar-item").forEach(t =>
                t.classList.remove("activo")
            );

            tarjeta.classList.add("activo");

            mapa.setView(
                [item.lugar.latitud, item.lugar.longitud],
                16
            );

            item.marcador.openPopup();

            actualizarPanel(item.lugar);

        });

        lista.appendChild(tarjeta);

    });

}

function actualizarPanel(lugar){

    lugarSeleccionado = lugar;

    const panel = document.getElementById("panel-info");
const botonPlano = lugar.plano
    ? `
        <button class="boton-plano" onclick="verPlano('${lugar.plano}')">
            📄 Ver plano
        </button>
      `
    : "";
    panel.innerHTML = `
    <h2>${lugar.nombre}</h2>

    <p><strong>Categoría:</strong> ${lugar.categoria}</p>

    <p><strong>Dirección:</strong><br>${lugar.direccion}</p>

    <p>${lugar.descripcion}</p>

    <hr>

    <a
        class="boton-ruta"
        target="_blank"
        href="https://www.google.com/maps/dir/?api=1&destination=${lugar.latitud},${lugar.longitud}">
        🧭 Cómo llegar
    </a>
    ${botonPlano}
`;
}
function verPlano(ruta){

    const panel = document.getElementById("panel-info");

    panel.innerHTML = `
        <button class="boton-volver" onclick="volverPanel()">
            ⬅ Volver
        </button>

        <h2>Plano</h2>

        <img
    src="${ruta}"
    class="imagen-plano"
    alt="Plano"
    onclick="ampliarPlano('${ruta}')">
    `;

}
let lugarSeleccionado = null;

function volverPanel(){

    if(lugarSeleccionado){

        actualizarPanel(lugarSeleccionado);

    }

}
function ampliarPlano(ruta){

    document
        .getElementById("imagen-plano-grande")
        .src = ruta;

    document
        .getElementById("visor-plano")
        .classList.remove("oculto");

}
function cerrarPlano(){

    document
        .getElementById("visor-plano")
        .classList.add("oculto");

}