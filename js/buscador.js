function activarBuscador(mapa, marcadores) {

    const buscador = document.getElementById("buscador");

    buscador.addEventListener("input", () => {

        const texto = buscador.value.trim().toLowerCase();

        document.querySelectorAll(".lugar-item").forEach((tarjeta, indice) => {

            const item = marcadores[indice];

            const coincide =
                item.lugar.nombre.toLowerCase().includes(texto) ||
                item.lugar.categoria.toLowerCase().includes(texto);

            // Mostrar u ocultar tarjeta
            tarjeta.style.display = coincide ? "" : "none";

            // Mostrar u ocultar marcador
            if (coincide) {
                if (!mapa.hasLayer(item.marcador)) {
                    item.marcador.addTo(mapa);
                }
            } else {
                if (mapa.hasLayer(item.marcador)) {
                    mapa.removeLayer(item.marcador);
                }
            }

        });

    });

}