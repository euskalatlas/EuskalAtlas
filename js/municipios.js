const botonMunicipios = document.getElementById("abrirMunicipios");
const modalMunicipios = document.getElementById("modalMunicipios");
const listaMunicipios = document.getElementById("listaMunicipiosModal");
const inputBuscarMunicipio = document.getElementById("buscarMunicipio");
const cerrarMunicipios = document.getElementById("cerrarMunicipios");

let municipios = [];

// Esperar a que carguen los datos
const esperaMunicipios = setInterval(() => {

    if (!mitologia.length) return;

    clearInterval(esperaMunicipios);

    municipios = [...new Set(
        mitologia
            .filter(r => r.municipio && r.municipio.trim() !== "")
            .map(r => r.municipio.trim())
    )].sort((a, b) => a.localeCompare(b, "es"));

    pintarMunicipios();

}, 100);

function pintarMunicipios(filtro = "") {

    listaMunicipios.innerHTML = "";

    municipios
        .filter(municipio =>
            municipio.toLowerCase().includes(filtro.toLowerCase())
        )
        .forEach(municipio => {

            const item = document.createElement("a");

            item.className = "municipio-item";

            item.href = `municipio.html?municipio=${encodeURIComponent(municipio)}`;

            item.textContent = municipio;

            listaMunicipios.appendChild(item);

        });

}

// Abrir modal
botonMunicipios.onclick = () => {



    modalMunicipios.classList.remove("oculto");

    inputBuscarMunicipio.value = "";

    pintarMunicipios();

};

// Cerrar modal
cerrarMunicipios.onclick = () => {

    modalMunicipios.classList.add("oculto");

};

// Buscar
inputBuscarMunicipio.oninput = () => {

    pintarMunicipios(inputBuscarMunicipio.value);

};
