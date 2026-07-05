const map = L.map('map').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

fetch('data/lugares.json')
    .then(response => response.json())
    .then(lugares => {

        lugares.forEach(lugar => {

            L.marker([lugar.latitud, lugar.longitud])
                .addTo(map)
                .bindPopup(`
                    <strong>${lugar.nombre}</strong><br>
                    ${lugar.direccion}<br>
                    ${lugar.descripcion}
                `);

        });

    })
    .catch(error => {
        console.error("Error al cargar los lugares:", error);
    });