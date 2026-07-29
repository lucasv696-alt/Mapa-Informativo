// mapa.js

function crearMapa() {

    const limitesCiudad = L.latLngBounds(

        [-32.5600, -58.3300], // Suroeste
        [-32.4000, -58.1200]  // Noreste

    );

    const mapa = L.map('map', {

        zoomControl: false,

        maxBounds: limitesCiudad,
        maxBoundsViscosity: 1.0,

        minZoom: 13,
        maxZoom: 18

    }).setView([-32.4846, -58.2321], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '&copy; OpenStreetMap'

    }).addTo(mapa);

    L.control.zoom({

        position: "bottomright"

    }).addTo(mapa);

    return mapa;

}