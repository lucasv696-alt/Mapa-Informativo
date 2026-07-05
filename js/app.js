const map = L.map('map').setView([-34.6037, -58.3816], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([-34.6037, -58.3816])
    .addTo(map)
    .bindPopup('¡Primer marcador!')
    .openPopup();