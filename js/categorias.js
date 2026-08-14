// ======================================
// LISTA DE CATEGORÍAS
// ======================================

// ======================================
// LISTA DE CATEGORÍAS
// ======================================

function actualizarListaCategorias(){

    const contenedor = document.getElementById("listaCategorias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // ======================================
    // REGISTROS COMPATIBLES
    // Ignoramos Categoría porque estamos
    // calculando las opciones de Categoría.
    // ======================================

    const registrosCompatibles =
        obtenerRegistrosCompatibles("categoria");


    // ======================================
    // TODAS LAS CATEGORÍAS
    // ======================================

    const categorias = new Set();

    mitologia.forEach(registro => {

        if(
            registro.Categoria &&
            registro.Categoria.trim() !== ""
        ){
            categorias.add(registro.Categoria);
        }

    });


    // ======================================
    // CATEGORÍAS COMPATIBLES
    // ======================================

    const categoriasCompatibles = new Set();

    registrosCompatibles.forEach(registro => {

        if(
            registro.Categoria &&
            registro.Categoria.trim() !== ""
        ){
            categoriasCompatibles.add(registro.Categoria);
        }

    });


    // ======================================
    // ORDEN ALFABÉTICO
    // ======================================

    const lista = [...categorias].sort((a, b) => {

    const compatibleA =
        categoriasCompatibles.has(a);

    const compatibleB =
        categoriasCompatibles.has(b);

    // Primero las compatibles
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

function crearCategoria(categoria, compatible){

    const linea = document.createElement("div");

    const seleccionada =
        categoriasSeleccionadas.includes(categoria);

    linea.innerHTML = `
        <label>
            <input
                type="checkbox"
                value="${categoria}"
                ${seleccionada ? "checked" : ""}
                ${!compatible ? "disabled" : ""}
            >
            ${traducirCategoria(categoria)}
        </label>
    `;

    contenedor.appendChild(linea);

}


// ======================================
// COMPATIBLES
// ======================================

const categoriasDisponibles =
    lista.filter(categoria =>
        categoriasCompatibles.has(categoria)
    );


// ======================================
// NO COMPATIBLES
// ======================================

const categoriasNoDisponibles =
    lista.filter(categoria =>
        !categoriasCompatibles.has(categoria)
    );


// ======================================
// MOSTRAR COMPATIBLES
// ======================================

categoriasDisponibles.forEach(categoria => {

    crearCategoria(categoria, true);

});


// ======================================
// SEPARADOR
// ======================================

if(categoriasNoDisponibles.length > 0){

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

categoriasNoDisponibles.forEach(categoria => {

    crearCategoria(categoria, false);

});

}



// ======================================
// RESUMEN
// ======================================

function actualizarResumenCategorias(){

    const resumen =
        document.getElementById("textoCategorias");

    const total =
        document.querySelectorAll(
            "#listaCategorias input"
        ).length;


    if(categoriasSeleccionadas.length === total){

        resumen.textContent =
            textos[idioma].todasCategorias;

    }else if(categoriasSeleccionadas.length === 0){

        resumen.textContent =
            textos[idioma].ningunaCategoria;

    }else if(categoriasSeleccionadas.length === 1){

        resumen.textContent =
            textos[idioma].unaCategoria;

    }else{

        resumen.textContent =
            `${categoriasSeleccionadas.length} ${textos[idioma].variasCategorias}`;

    }

}



// ======================================
// BUSCADOR
// ======================================

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("buscarCategoria")
    .addEventListener("input", function(){

        let texto = this.value.toLowerCase();

        document
        .querySelectorAll("#listaCategorias div")
        .forEach(e => {

            e.style.display =
                e.textContent.toLowerCase().includes(texto)
                ? ""
                : "none";

        });

    });

});

prepararBuscador(
    "buscarCategoria",
    "listaCategorias",
    "cerrarCategorias"
);



// ======================================
// MODAL
// ======================================

const modalCategorias = document.getElementById("modalCategorias");
document
.getElementById("cerrarCategoriasX")
.addEventListener("click", function(){

    modalCategorias.classList.add("oculto");

});
document
.getElementById("abrirCategorias")
.addEventListener("click", function(){

    actualizarListaCategorias();

    modalCategorias.classList.remove("oculto");

});


document
.getElementById("seleccionarTodasCategorias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaCategorias input[type='checkbox']")
    .forEach(c => c.checked = true);

});


document
.getElementById("limpiarCategorias")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaCategorias input[type='checkbox']")
    .forEach(c => c.checked = false);

});


document
.getElementById("cerrarCategorias")
.addEventListener("click", function(){

    categoriasSeleccionadas = [];

document
.querySelectorAll("#listaCategorias input[type='checkbox']:checked:not(:disabled)")
.forEach(c => {

    categoriasSeleccionadas.push(c.value);

});
    // Recalcular las opciones disponibles
    // en los demás filtros
    actualizarListasDependientes();

    actualizarResumenCategorias();

    actualizarMapa();

    modalCategorias.classList.add("oculto");

});



modalCategorias.addEventListener("click", function(e){

    if(e.target === modalCategorias){

        modalCategorias.classList.add("oculto");

    }

});