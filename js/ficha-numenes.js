const botonFichaNumenes = document.getElementById("abrirFichaNumenes");
const modalFichaNumenes = document.getElementById("modalFichaNumenes");
const listaFichaNumenes = document.getElementById("listaFichaNumenes");
const inputBuscarFichaNumen = document.getElementById("buscarFichaNumen");
const cerrarFichaNumenes = document.getElementById("cerrarFichaNumenes");

let numenes = [];

// Esperar a que carguen los datos
const esperanumenes = setInterval(() => {

    if (!mitologia.length) return;

    clearInterval(esperanumenes);

    numenes = [...new Set(
        mitologia
            .filter(r => r.numen && r.numen.trim() !== "")
            .map(r => r.numen.trim())
    )].sort((a, b) => a.localeCompare(b, "es"));

    pintarnumenes();

}, 100);

function pintarnumenes(filtro = "") {

    listaFichaNumenes.innerHTML = "";

    numenes
        .filter(numen =>
            numen.toLowerCase().includes(filtro.toLowerCase())
        )
        .forEach(numen => {

            const item = document.createElement("a");

            item.className = "municipio-item";

            item.href = `numen.html?numen=${encodeURIComponent(numen)}`;

            item.textContent = numen;

            listaFichaNumenes.appendChild(item);

        });

}

// Abrir modal
botonFichaNumenes.onclick = () => {

    modalFichaNumenes.classList.remove("oculto");

    inputBuscarFichaNumen.value = "";

    pintarnumenes();

};

// Cerrar modal
cerrarFichaNumenes.onclick = () => {

    modalFichaNumenes.classList.add("oculto");

};

// Buscar
inputBuscarFichaNumen.oninput = () => {

    pintarnumenes(inputBuscarFichaNumen.value);

};
