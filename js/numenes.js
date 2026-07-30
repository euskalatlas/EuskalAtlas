// ======================================
// LISTA DE NÚMENES
// ======================================
// Númenes seleccionados
let numenesSeleccionados = [];

function actualizarListaNumenes(categoria){

    const contenedor = document.getElementById("listaNumenes");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    let numenes = new Set();

    aplicarFiltrosSinNumenes(mitologia).forEach(registro => {

        // Todas las categorías
        if(categoria === "Todas las Categorias"){

            if(registro.numen && registro.numen.trim() !== ""){
                numenes.add(registro.numen);
            }

        }

        // Categoría concreta
        else{

            if(
                categoriasSeleccionadas.includes(registro.Categoria) &&
                registro.numen &&
                registro.numen.trim() !== ""
            ){

                numenes.add(registro.numen);

            }

        }

    });

    // Orden alfabético
let lista = [...numenes].sort();

// Al cambiar de categoría, seleccionar todos los númenes
if(numenesSeleccionados.length === 0){
    numenesSeleccionados = [...lista];
}

lista.forEach(numen => {

    const linea = document.createElement("div");

    linea.innerHTML = `
<label>
<input
    type="checkbox"
    value="${numen}"
    ${numenesSeleccionados.includes(numen) ? "checked" : ""}
>
${numen}
</label>
`;

    contenedor.appendChild(linea);

});



}
function actualizarResumenNumenes(){

    const boton = document.getElementById("abrirNumenes");

    const total = document.querySelectorAll("#listaNumenes input").length;

    if(numenesSeleccionados.length === total){

        boton.textContent = "Todos los númenes";

    }else if(numenesSeleccionados.length === 0){

        boton.textContent = "Ningún númen";

    }else if(numenesSeleccionados.length === 1){

        boton.textContent = "1 númen seleccionado";

    }else{

        boton.textContent = `${numenesSeleccionados.length} númenes seleccionados`;

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



// ======================================
// AL CARGAR LA PÁGINA
// ======================================

// ======================================
// VENTANA DE NÚMENES
// ======================================

const modalNumenes = document.getElementById("modalNumenes");

document
.getElementById("abrirNumenes")
.addEventListener("click", function(){

    actualizarListaNumenes(categoriaSeleccionada);

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
    .querySelectorAll("#listaNumenes input[type='checkbox']:checked")
    .forEach(c => {

        numenesSeleccionados.push(c.value);

    });

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
