/*
=========================================================
 iconos.js

 Centraliza todos los los iconos utilizados
 por la aplicación.

 Contiene:

 - Datos de categorías
 - Iconos HTML
 - Pines personalizados
 - Iconos de Leaflet

=========================================================
*/


// ======================================================
// DATOS DE LAS CATEGORÍAS
// ======================================================

const ICONOS = {

    "Lugar de Asamblea": {
        icono: null,
        color: null
    },

    "Banco": {
        icono: "fa-building-columns",
        color: "#2563eb"
    },

    "Farmacia": {
        icono: "fa-prescription-bottle-medical",
        color: "#16a34a"
    },

    "Hospital": {
        icono: "fa-hospital",
        color: "#dc2626"
    },

    "Restaurante": {
        icono: "fa-utensils",
        color: "#ea580c"
    },

    "Cafetería": {
        icono: "fa-mug-hot",
        color: "#92400e"
    },

    "Supermercado": {
        icono: "fa-cart-shopping",
        color: "#15803d"
    },

    "Estación de servicio": {
        icono: "fa-gas-pump",
        color: "#4b5563"
    },

    "Terminal": {
        icono: "fa-bus",
        color: "#1d4ed8"
    },

    "Policía": {
        icono: "fa-shield-halved",
        color: "#1e40af"
    },
    "Remises": {
    icono: "fa-taxi",
    color: "#f59e0b"
},

};


// ======================================================
// ICONOS PARA LISTAS Y CATEGORÍAS
// ======================================================

function obtenerIcono(categoria) {

    if (categoria === "Lugar de Asamblea") {

        return `
            <img src="img/jworg.svg"
                 class="icono-categoria-jw">
        `;

    }

    const datos = ICONOS[categoria];

    if (!datos) return "";

    return `
        <i class="fa-solid ${datos.icono}"
           style="color:${datos.color};"></i>
    `;

}


// ======================================================
// PIN PERSONALIZADO (HTML)
// ======================================================

function crearPinHTML(categoria) {

    if (categoria === "Lugar de Asamblea") {

        return `
            <img src="img/jworg.svg"
                 class="icono-categoria-jw">
        `;

    }

    const datos = ICONOS[categoria];

    if (!datos) return "";

    return `
        <div
            class="pin-personalizado"
            style="--color:${datos.color};">

            <i class="fa-solid ${datos.icono}"></i>

        </div>
    `;

}


// ======================================================
// ICONOS PARA BIENVENIDA
// ======================================================

function crearIconoHTML(categoria) {

    if (categoria === "Lugar de Asamblea") {

        return `
            <img src="img/jworg.svg"
                 class="icono-bienvenida-jw">
        `;

    }

    const datos = ICONOS[categoria];

    if (!datos) return "";

    return `
        <i class="fa-solid ${datos.icono}"
           style="color:${datos.color};"></i>
    `;

}


// ======================================================
// ICONOS DE LEAFLET
// ======================================================
const CACHE_ICONOS = {};
function obtenerIconoMapa(categoria) {

    // Lugar de Asamblea
    if (categoria === "Lugar de Asamblea") {

        if (!CACHE_ICONOS[categoria]) {

            CACHE_ICONOS[categoria] = L.divIcon({

                className: "icono-jw-marker",

                html: `<img src="img/jworg.svg" alt="JW.ORG">`,

                iconSize: [52, 52],
                iconAnchor: [26, 26]

            });

        }

        return CACHE_ICONOS[categoria];

    }

    const datos = ICONOS[categoria];

    if (!datos) return undefined;

    if (!CACHE_ICONOS[categoria]) {

        CACHE_ICONOS[categoria] = L.divIcon({

            className: "icono-mapa",

            html: crearPinHTML(categoria),

            iconSize: [34, 48],
            iconAnchor: [17, 48]

        });

    }

    return CACHE_ICONOS[categoria];

}