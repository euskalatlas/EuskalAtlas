// ======================================
// LISTA DE Provincias
// ======================================
// Provincias seleccionadas

function actualizarListaProvincias(){

    const contenedor = document.getElementById("listaProvincias");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    let provincias = new Set();

mitologia.forEach(registro => {

    if (
        registro.provincia &&
        registro.provincia.trim() !== ""
    ) {
        provincias.add(registro.provincia);
    }

});

    // Orden alfabético
// Orden alfabético según el idioma mostrado
let lista = [...provincias].sort((a, b) => {

    const nombreA = textos[idioma].provinciasTraducidas[a] || a;
    const nombreB = textos[idioma].provinciasTraducidas[b] || b;

    return nombreA.localeCompare(nombreB, idioma);

});

// Al cambiar de categoría, seleccionar todos los númenes
if (provinciasSeleccionadas.length === 0) {
    provinciasSeleccionadas = [...lista];
}

lista.forEach(provincia => {

    const linea = document.createElement("div");

    linea.innerHTML = `
        <label>
        <input
            type="checkbox"
            value="${provincia}"
            ${provinciasSeleccionadas.includes(provincia) ? "checked" : ""}
        >
        ${textos[idioma].provinciasTraducidas[provincia] || provincia}
        </label>
        `;

    contenedor.appendChild(linea);

});



}
function actualizarResumenProvincias(){

    const resumen = document.getElementById("textoProvincias");

    const total =
        document.querySelectorAll("#listaProvincias input").length;

    if(provinciasSeleccionadas.length === total){

        resumen.textContent = textos[idioma].todasProvincias;

    }else if(provinciasSeleccionadas.length === 0){

        resumen.textContent = textos[idioma].ningunaProvincia;

    }else if(provinciasSeleccionadas.length === 1){

        resumen.textContent = textos[idioma].unaProvincia;

    }else{

        resumen.textContent =
            `${provinciasSeleccionadas.length} ${textos[idioma].variasProvincias}`;

    }

}


// ======================================
// BUSCADOR
// ======================================

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("buscarprovincia").addEventListener("input", function(){

        let texto = this.value.toLowerCase();

        let elementos = document.querySelectorAll("#listaProvincias div");

        elementos.forEach(e => {

            if(e.textContent.toLowerCase().includes(texto)){

                e.style.display = "";

            }else{

                e.style.display = "none";

            }

        });

    });

});



// ======================================
// AL CARGAR LA PÁGINA
// ======================================

// ======================================
// VENTANA DE NÚMENES
// ======================================

const modalProvincias = document.getElementById("modalProvincias");
document
.getElementById("cerrarProvinciasX")
.addEventListener("click", function(){

    modalProvincias.classList.add("oculto");

});
document
.getElementById("abrirProvincias")
.addEventListener("click", function(){

    actualizarListaProvincias();

    modalProvincias.classList.remove("oculto");

});
document
.getElementById("seleccionarTodasProvincias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaProvincias input[type='checkbox']")
    .forEach(c => c.checked = true);

});


document
.getElementById("limpiarProvincias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaProvincias input[type='checkbox']")
    .forEach(c => c.checked = false);

});


document
.getElementById("cerrarProvincias")
.addEventListener("click", function(){
    provinciasSeleccionadas = [];

    document
    .querySelectorAll("#listaProvincias input[type='checkbox']:checked")
    .forEach(c => {

        provinciasSeleccionadas.push(c.value);

    });

actualizarResumenProvincias();

actualizarMapa();

modalProvincias.classList.add("oculto");


});



// Cerrar haciendo clic fuera de la ventana

modalProvincias.addEventListener("click", function(e){

    if(e.target === modalProvincias){

        modalProvincias.classList.add("oculto");

    }

});
