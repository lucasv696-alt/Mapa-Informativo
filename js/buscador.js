function activarBuscador(mapa, marcadores) {

    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultados-busqueda");

    buscador.addEventListener("input", actualizarBusqueda);

    function actualizarBusqueda() {

        const texto = normalizarTexto(
    buscador.value.trim()
        )
        resultados.innerHTML = "";

        if (texto === "") {
            resultados.style.display = "none";
            return;
        }
        function normalizarTexto(texto) {

    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

}

        const encontrados = marcadores.filter(item => {

            const checkbox = document.querySelector(
                `input[data-categoria="${item.lugar.categoria}"]`
            );

            const categoriaActiva = checkbox ? checkbox.checked : true;

            const nombre = normalizarTexto(item.lugar.nombre);
            const categoria = normalizarTexto(item.lugar.categoria);

            return categoriaActiva &&
                (
                    nombre.includes(texto) ||
                    categoria.includes(texto)
                );

        });

        if (encontrados.length === 0) {

            resultados.style.display = "none";
            return;

        }

        resultados.style.display = "block";

        encontrados.forEach(item => {

            const fila = document.createElement("div");

            fila.className = "resultado-busqueda";

            fila.innerHTML = `
                <div class="resultado-icono">
                    ${obtenerIcono(item.lugar.categoria)}
                </div>

                <div class="resultado-nombre">
                    ${item.lugar.nombre}
                </div>
            `;

            fila.addEventListener("click", () => {

                mapa.setView(
                    [item.lugar.latitud, item.lugar.longitud],
                    17
                );

                item.marcador.openPopup();

                buscador.value = "";

                resultados.innerHTML = "";
                resultados.style.display = "none";

                // Cerrar menú en celular
                const sidebar = document.getElementById("sidebar");

                if (window.innerWidth <= 768) {

                    sidebar.classList.remove("abierta");
                    document.body.classList.remove("menu-abierto");

                    document.getElementById("menu-toggle").textContent = "☰";

                }

            });

            resultados.appendChild(fila);

        });

    }

}