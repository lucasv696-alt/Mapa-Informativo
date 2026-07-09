// datos.js

async function cargarLugares() {

    const respuesta = await fetch('data/lugares.json');

    return await respuesta.json();

}