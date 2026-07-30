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
${categoria}
</label>
`;

        contenedor.appendChild(linea);

    });

}



// ======================================
// RESUMEN
// ======================================

function actualizarResumenCategorias(){

    const boton = document.getElementById("abrirCategorias");

    const total = document.querySelectorAll("#listaCategorias input").length;

    if(categoriasSeleccionadas.length === total){

        boton.textContent = "Todas las categorías";

    }else if(categoriasSeleccionadas.length === 0){

        boton.textContent = "Ninguna categoría";

    }else if(categoriasSeleccionadas.length === 1){

        boton.textContent = "1 categoría seleccionada";

    }else{

        boton.textContent =
            `${categoriasSeleccionadas.length} categorías seleccionadas`;

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



// ======================================
// MODAL
// ======================================

const modalCategorias =
    document.getElementById("modalCategorias");

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