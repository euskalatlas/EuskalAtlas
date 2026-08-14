// ======================================
// LISTA DE BIBLIOGRAFÍAS
// ======================================

// ======================================
// LISTA DE AUTORES
// ======================================

function actualizarListaBibliografias(){

    const contenedor = document.getElementById("listaBibliografias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // ======================================
    // REGISTROS COMPATIBLES
    // Ignoramos Autor porque estamos
    // calculando las opciones de Autor.
    // ======================================

    const registrosCompatibles =
        obtenerRegistrosCompatibles("autor");


    // ======================================
    // TODOS LOS AUTORES
    // ======================================

    const autores = new Set();

    mitologia.forEach(registro => {

        if(
            registro.autor &&
            registro.autor.trim() !== ""
        ){
            autores.add(registro.autor);
        }

    });


    // ======================================
    // AUTORES COMPATIBLES
    // ======================================

    const autoresCompatibles = new Set();

    registrosCompatibles.forEach(registro => {

        if(
            registro.autor &&
            registro.autor.trim() !== ""
        ){
            autoresCompatibles.add(registro.autor);
        }

    });


    // ======================================
    // ORDEN ALFABÉTICO
    // ======================================

    const lista = [...autores].sort((a, b) => {

    const compatibleA =
        autoresCompatibles.has(a);

    const compatibleB =
        autoresCompatibles.has(b);

    // Primero los compatibles
    if (compatibleA && !compatibleB) return -1;
    if (!compatibleA && compatibleB) return 1;

    // Dentro de cada grupo, orden alfabético
    return a.localeCompare(b, idioma);

});

    

    // ======================================
    // CREAR OPCIONES
    // ======================================

    // ======================================
// CREAR OPCIÓN
// ======================================

function crearBibliografia(autor, compatible){

    const linea = document.createElement("div");

    const seleccionada =
        autoresSeleccionados.includes(autor);

    linea.innerHTML = `
        <label>
            <input
                type="checkbox"
                value="${autor}"
                ${seleccionada ? "checked" : ""}
                ${!compatible ? "disabled" : ""}
            >
            ${autor}
        </label>
    `;

    contenedor.appendChild(linea);

}


// ======================================
// COMPATIBLES
// ======================================

const autoresDisponibles =
    lista.filter(autor =>
        autoresCompatibles.has(autor)
    );


// ======================================
// NO COMPATIBLES
// ======================================

const autoresNoDisponibles =
    lista.filter(autor =>
        !autoresCompatibles.has(autor)
    );


// ======================================
// MOSTRAR COMPATIBLES
// ======================================

autoresDisponibles.forEach(autor => {

    crearBibliografia(autor, true);

});


// ======================================
// SEPARADOR
// ======================================

if(autoresNoDisponibles.length > 0){

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

autoresNoDisponibles.forEach(autor => {

    crearBibliografia(autor, false);

});

}


// ======================================
// RESUMEN
// ======================================

function actualizarResumenBibliografias(){

    const resumen = document.getElementById("textoBibliografia");

    const total =
        document.querySelectorAll("#listaBibliografias input").length;

    if(autoresSeleccionados.length === total){

        resumen.textContent = textos[idioma].todaBibliografia;

    }else if(autoresSeleccionados.length === 0){

        resumen.textContent = textos[idioma].ningunaBibliografia;

    }else if(autoresSeleccionados.length === 1){

        resumen.textContent = textos[idioma].unaBibliografia;

    }else{

        resumen.textContent =
            `${autoresSeleccionados.length} ${textos[idioma].variasBibliografias}`;

    }

}



// ======================================
// BUSCADOR
// ======================================

document.addEventListener("DOMContentLoaded", function(){

    document
    .getElementById("buscarBibliografia")
    .addEventListener("input", function(){

        let texto = this.value.toLowerCase();

        document
        .querySelectorAll("#listaBibliografias div")
        .forEach(e => {

            e.style.display =
                e.textContent.toLowerCase().includes(texto)
                ? ""
                : "none";

        });

    });

});
prepararBuscador(
    "buscarBibliografia",
    "listaBibliografias",
    "cerrarBibliografia"
);



// ======================================
// MODAL
// ======================================

const modalBibliografia = document.getElementById("modalBibliografia");

document
.getElementById("cerrarBibliografiaX")
.addEventListener("click", function(){

    modalBibliografia.classList.add("oculto");

});

document
.getElementById("abrirBibliografia")
.addEventListener("click", function(){

    actualizarListaBibliografias();

    modalBibliografia.classList.remove("oculto");

});


document
.getElementById("seleccionarTodasBibliografias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaBibliografias input[type='checkbox']")
    .forEach(c => c.checked = true);

});


document
.getElementById("limpiarBibliografias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaBibliografias input[type='checkbox']")
    .forEach(c => c.checked = false);

});


document
.getElementById("cerrarBibliografia")
.addEventListener("click", function(){

    autoresSeleccionados = [];

    document
    .querySelectorAll("#listaBibliografias input[type='checkbox']:checked:not(:disabled)")

    .forEach(c => {

        autoresSeleccionados.push(c.value);

    });

    // Recalcular las opciones disponibles
    // en los demás filtros
    actualizarListasDependientes();

    actualizarResumenBibliografias();

    actualizarMapa();

    modalBibliografia.classList.add("oculto");

});

modalBibliografia.addEventListener("click", function(e){

    if(e.target === modalBibliografia){

        modalBibliografia.classList.add("oculto");

    }

});