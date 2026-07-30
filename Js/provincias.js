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
let lista = [...provincias].sort();

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
${provincia}
</label>
`;

    contenedor.appendChild(linea);

});



}
function actualizarResumenProvincias(){

    const boton = document.getElementById("abrirProvincias");

    const total = document.querySelectorAll("#listaProvincias input").length;

    if(provinciasSeleccionadas.length === total){

        boton.textContent = "Todas las provincias";

    }else if(provinciasSeleccionadas.length === 0){

        boton.textContent = "Ninguna provincia";

    }else if(provinciasSeleccionadas.length === 1){

        boton.textContent = "1 provincia seleccionada";

    }else{

        boton.textContent = `${provinciasSeleccionadas.length} provincias seleccionadas`;

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
