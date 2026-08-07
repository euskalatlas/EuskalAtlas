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

    const resumen = document.getElementById("textoBibliografia");

    const total =
        document.querySelectorAll("#listaBibliografias input").length;

    if(bibliografiasSeleccionadas.length === total){

        resumen.textContent = textos[idioma].todaBibliografia;

    }else if(bibliografiasSeleccionadas.length === 0){

        resumen.textContent = textos[idioma].ningunaBibliografia;

    }else if(bibliografiasSeleccionadas.length === 1){

        resumen.textContent = textos[idioma].unaBibliografia;

    }else{

        resumen.textContent =
            `${bibliografiasSeleccionadas.length} ${textos[idioma].variasBibliografias}`;

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