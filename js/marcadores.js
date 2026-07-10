// marcadores.js

function crearMarcadores(mapa, lugares) {

    const marcadores = [];

    lugares.forEach(lugar => {

        const urlRuta =
            `https://www.google.com/maps/dir/?api=1&destination=${lugar.latitud},${lugar.longitud}`;

        const popup = `
            <div class="popup-lugar">

                <h3>${lugar.nombre}</h3>

                <p>${lugar.direccion}</p>

                <div class="popup-botones">

                    <a
                        href="${urlRuta}"
                        target="_blank"
                        class="btn-popup">
                        🧭 Cómo llegar
                    </a>

                </div>

            </div>
        `;

        const marcador = L.marker([lugar.latitud, lugar.longitud])
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