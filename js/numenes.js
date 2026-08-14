// ======================================
// LISTA DE NÚMENES
// ======================================
// Númenes seleccionados
let numenesSeleccionados = [];

// ======================================
// LISTA DE NÚMENES
// ======================================

function actualizarListaNumenes(categoria){

    const contenedor = document.getElementById("listaNumenes");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // ======================================
    // REGISTROS COMPATIBLES
    // Ignoramos Númen porque estamos
    // calculando las opciones de Númen.
    // ======================================

    const registrosCompatibles =
        obtenerRegistrosCompatibles("numen");


    // ======================================
    // TODOS LOS NÚMENES
    // ======================================

    const numenes = new Set();

    mitologia.forEach(registro => {

        if(
            registro.numen &&
            registro.numen.trim() !== ""
        ){
            numenes.add(registro.numen);
        }

    });


    // ======================================
    // NÚMENES COMPATIBLES
    // ======================================

    const numenesCompatibles = new Set();

    registrosCompatibles.forEach(registro => {

        if(
            registro.numen &&
            registro.numen.trim() !== ""
        ){
            numenesCompatibles.add(registro.numen);
        }

    });


    /// ======================================
// AGRUPAR NÚMENES POR CATEGORÍA
// ======================================

const categoriasOrdenadas = [
    "Figuras mitológicas femeninas",
    "Figuras mitológicas masculinas",
    "Seres zoomorfos",
    "Fenómenos y manifestaciones naturales",
    "Otras entidades y motivos mitológicos"
];


// ======================================
// ASIGNAR CADA NÚMEN A SU CATEGORÍA
// ======================================

const categoriaPorNumen = new Map();

mitologia.forEach(registro => {

    if(
        registro.numen &&
        registro.numen.trim() !== "" &&
        registro.Categoria &&
        registro.Categoria.trim() !== "" &&
        !categoriaPorNumen.has(registro.numen)
    ){

        categoriaPorNumen.set(
            registro.numen,
            registro.Categoria
        );

    }

});


// ======================================
// SEPARAR COMPATIBLES Y NO COMPATIBLES
// ======================================

const gruposCompatibles = {};
const gruposNoCompatibles = {};

categoriasOrdenadas.forEach(categoria => {

    gruposCompatibles[categoria] = [];
    gruposNoCompatibles[categoria] = [];

});


numenes.forEach(numen => {

    const categoria =
        categoriaPorNumen.get(numen);

    // Si por algún motivo el númen no tiene
    // categoría, no lo mostramos en los grupos.
    if(!categoria || !categoriasOrdenadas.includes(categoria)){
        return;
    }

    if(numenesCompatibles.has(numen)){

        gruposCompatibles[categoria].push(numen);

    }else{

        gruposNoCompatibles[categoria].push(numen);

    }

});


// ======================================
// ORDEN ALFABÉTICO
// ======================================

categoriasOrdenadas.forEach(categoria => {

    gruposCompatibles[categoria].sort((a, b) =>
        a.localeCompare(b, idioma)
    );

    gruposNoCompatibles[categoria].sort((a, b) =>
        a.localeCompare(b, idioma)
    );

});


// ======================================
// FUNCIÓN PARA CREAR UN NÚMEN
// ======================================

function crearNumen(numen, compatible){

    const linea =
        document.createElement("div");

    const seleccionada =
        numenesSeleccionados.includes(numen);

    linea.innerHTML = `
        <label>
            <input
                type="checkbox"
                value="${numen}"
                ${seleccionada ? "checked" : ""}
                ${!compatible ? "disabled" : ""}
            >
            ${numen}
        </label>
    `;

    contenedor.appendChild(linea);

}


// ======================================
// 1. MOSTRAR COMPATIBLES
// ======================================

categoriasOrdenadas.forEach(categoria => {

    const lista =
        gruposCompatibles[categoria];

    if(lista.length === 0){
        return;
    }


    const titulo =
        document.createElement("div");

    titulo.className =
        "grupo-categoria-numenes";

    titulo.textContent =
        traducirCategoria(categoria);

    contenedor.appendChild(titulo);


    lista.forEach(numen => {

        crearNumen(numen, true);

    });

});


// ======================================
// SEPARADOR DE NO DISPONIBLES
// ======================================

const hayNoCompatibles =
    categoriasOrdenadas.some(categoria =>
        gruposNoCompatibles[categoria].length > 0
    );


if(hayNoCompatibles){

    const separador =
        document.createElement("div");

    separador.className =
        "separador-no-disponibles";

    separador.textContent =
    textos[idioma].noDisponiblesFiltros;
    contenedor.appendChild(separador);

}


// ======================================
// 2. MOSTRAR NO COMPATIBLES
// ======================================

categoriasOrdenadas.forEach(categoria => {

    const lista =
        gruposNoCompatibles[categoria];

    if(lista.length === 0){
        return;
    }


    const titulo =
        document.createElement("div");

    titulo.className =
        "grupo-categoria-numenes no-disponibles";

    titulo.textContent =
        traducirCategoria(categoria);

    contenedor.appendChild(titulo);


    lista.forEach(numen => {

        crearNumen(numen, false);

    });

});
}

function actualizarResumenNumenes(){

    const resumen = document.getElementById("textoNumenes");

    const total =
        document.querySelectorAll("#listaNumenes input").length;

    if(numenesSeleccionados.length === total){

        resumen.textContent = textos[idioma].todosNumenes;

    }else if(numenesSeleccionados.length === 0){

        resumen.textContent = textos[idioma].ningunNumen;

    }else if(numenesSeleccionados.length === 1){

        resumen.textContent = textos[idioma].unNumen;

    }else{

        resumen.textContent =
            `${numenesSeleccionados.length} ${textos[idioma].variosNumenes}`;

    }

}

// ======================================
// BUSCADOR
// ======================================

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("buscarNumen").addEventListener("input", function(){

        let texto = this.value.toLowerCase();

        let elementos = document.querySelectorAll("#listaNumenes div");

        elementos.forEach(e => {

            if(e.textContent.toLowerCase().includes(texto)){

                e.style.display = "";

            }else{

                e.style.display = "none";

            }

        });

    });

});
prepararBuscador(
    "buscarNumen",
    "listaNumenes",
    "cerrarNumenes"
);


// ======================================
// AL CARGAR LA PÁGINA
// ======================================

// ======================================
// VENTANA DE NÚMENES
// ======================================

const modalNumenes = document.getElementById("modalNumenes");
document
.getElementById("cerrarNumenesX")
.addEventListener("click", function(){

    modalNumenes.classList.add("oculto");

});
document
.getElementById("abrirNumenes")
.addEventListener("click", function(){

if(categoriasSeleccionadas.length === 1){

    actualizarListaNumenes(categoriasSeleccionadas[0]);

}else{

    actualizarListaNumenes("Todas las Categorias");

}
    modalNumenes.classList.remove("oculto");

});
document
.getElementById("seleccionarTodos")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaNumenes input[type='checkbox']")
    .forEach(c => c.checked = true);

});


document
.getElementById("limpiarNumenes")
.addEventListener("click", function(){

    document
    .querySelectorAll("#listaNumenes input[type='checkbox']")
    .forEach(c => c.checked = false);

});


document
.getElementById("cerrarNumenes")
.addEventListener("click", function(){

    numenesSeleccionados = [];

    document
    .querySelectorAll("#listaNumenes input[type='checkbox']:checked:not(:disabled)")
    .forEach(c => {

        numenesSeleccionados.push(c.value);

    });

    // Recalcular las opciones disponibles
    // en los demás filtros
    actualizarListasDependientes("numen");;

    actualizarResumenNumenes();

    actualizarMapa();

    modalNumenes.classList.add("oculto");

});



// Cerrar haciendo clic fuera de la ventana

modalNumenes.addEventListener("click", function(e){

    if(e.target === modalNumenes){

        modalNumenes.classList.add("oculto");

    }

});
