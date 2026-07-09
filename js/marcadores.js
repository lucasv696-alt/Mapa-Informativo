// marcadores.js

function crearMarcadores(mapa, lugares) {

    const marcadores = [];

    lugares.forEach(lugar => {

        const marcador = L.marker([lugar.latitud, lugar.longitud])
            .addTo(mapa)
            .bindPopup(`
                <strong>${lugar.nombre}</strong><br>
                ${lugar.direccion}<br>
                ${lugar.descripcion}
            `);

        marcadores.push({
            lugar,
            marcador
        });

    });

    return marcadores;

}