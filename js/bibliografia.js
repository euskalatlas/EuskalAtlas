// ======================================
// LISTA DE BIBLIOGRAFÍAS
// ======================================

function actualizarListaBibliografias(){

    const contenedor = document.getElementById("listaBibliografias");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    let bibliografias = new Set();

    mitologia.forEach(registro => {

        if(
            registro.fuente &&
            registro.fuente.trim() !== ""
        ){
            bibliografias.add(registro.fuente);
        }

    });

    let lista = [...bibliografias].sort();

    if(bibliografiasSeleccionadas.length === 0){
        bibliografiasSeleccionadas = [...lista];
    }

    lista.forEach(bibliografia => {

        const linea = document.createElement("div");

        linea.innerHTML = `
<label>
<input
    type="checkbox"
    value="${bibliografia}"
    ${bibliografiasSeleccionadas.includes(bibliografia) ? "checked" : ""}
>
${bibliografia}
</label>
`;

        contenedor.appendChild(linea);

    });

}



// ======================================
// RESUMEN
// ======================================

function actualizarResumenBibliografias(){

    const boton = document.getElementById("abrirBibliografia");

    const total =
        document.querySelectorAll("#listaBibliografias input").length;

    if(bibliografiasSeleccionadas.length === total){

        boton.textContent = "Toda la bibliografía";

    }else if(bibliografiasSeleccionadas.length === 0){

        boton.textContent = "Ninguna bibliografía";

    }else if(bibliografiasSeleccionadas.length === 1){

        boton.textContent = "1 bibliografía seleccionada";

    }else{

        boton.textContent =
            `${bibliografiasSeleccionadas.length} bibliografías seleccionadas`;

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



// ======================================
// MODAL
// ======================================

const modalBibliografia =
    document.getElementById("modalBibliografia");

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

    bibliografiasSeleccionadas = [];

    document
    .querySelectorAll("#listaBibliografias input[type='checkbox']:checked")
    .forEach(c => {

        bibliografiasSeleccionadas.push(c.value);

    });

    actualizarResumenBibliografias();

    actualizarMapa();

    modalBibliografia.classList.add("oculto");

});


modalBibliografia.addEventListener("click", function(e){

    if(e.target === modalBibliografia){

        modalBibliografia.classList.add("oculto");

    }

});