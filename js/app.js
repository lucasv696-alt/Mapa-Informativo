// app.js

async function iniciarAplicacion() {

    const mapa = crearMapa();

    const lugares = await cargarLugares();

 const marcadores = crearMarcadores(mapa, lugares);

crearSidebar(mapa, marcadores);

}

iniciarAplicacion();