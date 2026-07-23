// marcadores.js

function crearMarcadores(mapa, lugares) {

    const marcadores = [];

    lugares.forEach(lugar => {

        const urlRuta =
    `https://www.google.com/maps/dir/?api=1&destination=${lugar.latitud},${lugar.longitud}`;

const telefonoHTML =
    lugar.categoria === "Remises" && lugar.telefono
        ? `
            <a
                href="tel:+54${lugar.telefono.replace(/\D/g, "")}"
                class="telefono-popup">

                📞 ${lugar.telefono}

            </a>
          `
        : "";
const botonPlano =
    lugar.categoria === "Lugar de Asamblea"
        ? `
            <button
                class="btn-popup"
                onclick="abrirPlano()">

                🗺 Ver plano

            </button>
          `
        : "";        

const popup = `
<div class="popup-lugar">

    <h3>${obtenerIcono(lugar.categoria)} ${lugar.nombre}</h3>

    ${
        lugar.calificacion
            ? `
                <p class="popup-calificacion">
                    ⭐⭐⭐⭐⭐ ${lugar.calificacion}
                </p>
              `
            : ""
    }

    ${telefonoHTML}

${botonPlano}

<a
    href="${urlRuta}"
        target="_blank"
        class="btn-popup">

        🧭 Cómo llegar

    </a>

</div>
`;
const icono = obtenerIconoMapa(lugar.categoria);

const marcador = L.marker(
    [lugar.latitud, lugar.longitud],
    icono ? { icon: icono } : {}
)
.addTo(mapa)
.bindPopup(popup);

        marcadores.push({
            lugar,
            marcador,
            visible: true
        });

    });

    return marcadores;

}