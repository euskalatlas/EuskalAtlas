// ======================================
// LISTA DE Provincias
// ======================================
// Provincias seleccionadas

function actualizarListaProvincias(){

    const contenedor = document.getElementById("listaProvincias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // ======================================
    // REGISTROS COMPATIBLES
    // Ignoramos Provincia porque estamos
    // calculando las opciones de Provincia.
    // ======================================

    const registrosCompatibles =
        obtenerRegistrosCompatibles("provincia");

    
    // ======================================
    // TODAS LAS PROVINCIAS
    // ======================================

    const provincias = new Set();

    mitologia.forEach(registro => {

        if(
            registro.provincia &&
            registro.provincia.trim() !== ""
        ){
            provincias.add(registro.provincia);
        }

    });


    // ======================================
    // PROVINCIAS COMPATIBLES
    // ======================================

    const provinciasCompatibles = new Set();

    registrosCompatibles.forEach(registro => {

        if(
            registro.provincia &&
            registro.provincia.trim() !== ""
        ){
            provinciasCompatibles.add(registro.provincia);
        }

    });


    // ======================================
    // ORDEN ALFABÉTICO
    // ======================================

const lista = [...provincias].sort((a, b) => {

    const compatibleA =
        provinciasCompatibles.has(a);

    const compatibleB =
        provinciasCompatibles.has(b);

    // Primero las compatibles
    if (compatibleA && !compatibleB) return -1;
    if (!compatibleA && compatibleB) return 1;

    // Dentro de cada grupo, orden alfabético
    const nombreA =
        textos[idioma].provinciasTraducidas[a] || a;

    const nombreB =
        textos[idioma].provinciasTraducidas[b] || b;

    return nombreA.localeCompare(nombreB, idioma);

});


   // ======================================
// CREAR OPCIÓN
// ======================================

function crearProvincia(provincia, compatible){

    const linea = document.createElement("div");

    const seleccionada =
        provinciasSeleccionadas.includes(provincia);

    linea.innerHTML = `
        <label>
            <input
                type="checkbox"
                value="${provincia}"
                ${seleccionada ? "checked" : ""}
                ${!compatible ? "disabled" : ""}
            >
            ${textos[idioma].provinciasTraducidas[provincia] || provincia}
        </label>
    `;

    contenedor.appendChild(linea);

}


// ======================================
// COMPATIBLES
// ======================================

const provinciasDisponibles =
    lista.filter(provincia =>
        provinciasCompatibles.has(provincia)
    );


// ======================================
// NO COMPATIBLES
// ======================================

const provinciasNoDisponibles =
    lista.filter(provincia =>
        !provinciasCompatibles.has(provincia)
    );


// ======================================
// MOSTRAR COMPATIBLES
// ======================================

provinciasDisponibles.forEach(provincia => {

    crearProvincia(provincia, true);

});


// ======================================
// SEPARADOR
// ======================================

if(provinciasNoDisponibles.length > 0){

    const separador =
        document.createElement("div");

    separador.className =
        "separador-no-disponibles";

    separador.textContent =
        textos[idioma].noDisponiblesFiltros;

    contenedor.appendChild(separador);

}


// ======================================
// MOSTRAR NO COMPATIBLES
// ======================================

provinciasNoDisponibles.forEach(provincia => {

    crearProvincia(provincia, false);

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

    prepararBuscador(
    "buscarprovincia",
    "listaProvincias",
    "cerrarProvincias"
);

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
