// mapa.js

function crearMapa() {

    const mapa = L.map('map', {
        zoomControl: false
    }).setView([-32.4846, -58.2321], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

    L.control.zoom({
        position: "bottomright"
    }).addTo(mapa);

    return mapa;

}