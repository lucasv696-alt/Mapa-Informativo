function crearSidebar(mapa, marcadores) {

    const lista = document.getElementById("lista-lugares");

    lista.innerHTML = "";

    marcadores.forEach(item => {

        const boton = document.createElement("button");

        boton.className = "lugar-item";

        boton.textContent = item.lugar.nombre;

        boton.addEventListener("click", () => {

            mapa.setView(
                [item.lugar.latitud, item.lugar.longitud],
                16
            );

            item.marcador.openPopup();

        });

        lista.appendChild(boton);

    });

}