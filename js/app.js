/*
=========================================================
 app.js

 Inicializa la aplicación y coordina los distintos
 módulos del proyecto.

 Flujo:

 1. Crear el mapa.
 2. Configurar eventos generales.
 3. Cargar los lugares.
 4. Crear los marcadores.
 5. Crear la interfaz.
 6. Mostrar la pantalla de bienvenida.

=========================================================
*/


// ======================================================
// INICIALIZACIÓN
// ======================================================

async function iniciarAplicacion() {

    // Crear mapa
    const mapa = crearMapa();


    // Configurar eventos generales
    configurarEventos(mapa);


    // Cargar datos
    const lugares = await cargarLugares();


    // Crear marcadores
    const marcadores = crearMarcadores(mapa, lugares);


    // Crear interfaz
    crearSidebar(mapa, marcadores);
    crearCategorias(mapa, marcadores);
    activarBuscador(mapa, marcadores);


    // Pantalla de bienvenida
    iniciarBienvenida();

}


// ======================================================
// EVENTOS GENERALES
// ======================================================

function configurarEventos(mapa) {

    mapa.on("click", () => {

        const sidebar = document.getElementById("sidebar");
        const botonMenu = document.getElementById("menu-toggle");

        if (!sidebar.classList.contains("abierta")) return;

        sidebar.classList.remove("abierta");
        document.body.classList.remove("menu-abierto");

        botonMenu.textContent = "☰";

    });

}


// ======================================================
// INICIAR APLICACIÓN
// ======================================================

iniciarAplicacion();