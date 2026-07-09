// mapa.js

function crearMapa() {

    const mapa = L.map('map').setView([-34.6037, -58.3816], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

    return mapa;

}