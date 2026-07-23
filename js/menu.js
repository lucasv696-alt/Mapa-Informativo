const backdrop = document.getElementById("menu-backdrop");
const botonMenu = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

botonMenu.addEventListener("click", () => {

    const abierto = sidebar.classList.toggle("abierta");

    document.body.classList.toggle("menu-abierto", abierto);

    botonMenu.textContent = abierto ? "✕" : "☰";

});
const mapa = document.getElementById("map");

mapa.addEventListener("pointerdown", () => {

    if (sidebar.classList.contains("abierta")) {

        sidebar.classList.remove("abierta");

        document.body.classList.remove("menu-abierto");

        botonMenu.textContent = "☰";

    }

});
backdrop.addEventListener("click", () => {

    sidebar.classList.remove("abierta");

    document.body.classList.remove("menu-abierto");

    botonMenu.textContent = "☰";

});