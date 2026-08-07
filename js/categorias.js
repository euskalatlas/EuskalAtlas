// ======================================
// LISTA DE CATEGORÍAS
// ======================================

function actualizarListaCategorias(){

    const contenedor = document.getElementById("listaCategorias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    let categorias = new Set();

    mitologia.forEach(registro => {

        if(
            registro.Categoria &&
            registro.Categoria.trim() !== ""
        ){
            categorias.add(registro.Categoria);
        }

    });

    let lista = [...categorias].sort();

    if(categoriasSeleccionadas.length === 0){
        categoriasSeleccionadas = [...lista];
    }

    lista.forEach(categoria => {

        const linea = document.createElement("div");

        linea.innerHTML = `
<label>
<input
    type="checkbox"
    value="${categoria}"
    ${categoriasSeleccionadas.includes(categoria) ? "checked" : ""}
>
${traducirCategoria(categoria)}
</label>
`;

        contenedor.appendChild(linea);

    });

}



// ======================================
// RESUMEN
// ======================================

function actualizarResumenCategorias(){

    const resumen = document.getElementById("textoCategorias");

    const total =
        document.querySelectorAll("#listaCategorias input").length;

    if(categoriasSeleccionadas.length === total){

        resumen.textContent = textos[idioma].todasCategorias;

    }else if(categoriasSeleccionadas.length === 0){

        resumen.textContent = textos[idioma].ningunaCategoria;

    }else if(categoriasSeleccionadas.length === 1){

        resumen.textContent = textos[idioma].unaCategoria;

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
    .querySelectorAll("#listaCategorias input[type='checkbox']:checked")
    .forEach(c => {

        categoriasSeleccionadas.push(c.value);

    });

    actualizarResumenCategorias();

    actualizarMapa();

    modalCategorias.classList.add("oculto");

});



modalCategorias.addEventListener("click", function(e){

    if(e.target === modalCategorias){

        modalCategorias.classList.add("oculto");

    }

});