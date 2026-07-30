const parametros = new URLSearchParams(window.location.search);
const municipio = parametros.get("municipio");

function cargarMunicipio() {

    // Esperar a que termine de cargar el JSON
    if (!mitologia.length) {
        setTimeout(cargarMunicipio, 100);
        return;
    }

    const resultados = buscarMunicipio(municipio);

    const contenido = document.getElementById("contenido");

    if (resultados.length === 0) {

       document.getElementById("tituloCabecera").textContent = municipio;
document.getElementById("subtituloCabecera").textContent =provincia;

document.querySelector(".volver").href = "index.html";
document.querySelector(".volver").textContent = "← Volver";

contenido.innerHTML = "<div class='contenido'></div>";


        return;
    }

    const provincia = resultados[0].provincia;

    // ==========================
    // NÚMENES
    // ==========================

    const numenes = [...new Set(

        resultados
            .filter(r => r.numen && r.numen.trim() !== "")
            .map(r => r.numen.trim())

    )].sort((a, b) => a.localeCompare(b, "es"));

    // ==========================
    // CATEGORÍAS
    // ==========================

    const categorias = [...new Set(

        resultados
            .filter(r => r.Categoria && r.Categoria.trim() !== "")
            .map(r => r.Categoria.trim())

    )].sort((a, b) => a.localeCompare(b, "es"));

    // ==========================
    // BIBLIOGRAFÍA
    // ==========================

    const fuentes = [...new Set(

        resultados
            .filter(r => r.fuente && r.fuente.trim() !== "")
            .map(r => r.fuente.trim())

    )].sort((a, b) => a.localeCompare(b, "es"));
    document.getElementById("tituloCabecera").textContent = municipio;
document.getElementById("subtituloCabecera").textContent = provincia;

const volver = document.querySelector(".volver");

volver.textContent = "← Volver";

volver.onclick = function (e) {

    e.preventDefault();

    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = "index.html";
    }

};
contenido.innerHTML = "<div class='contenido'></div>";
    
    const listaNumenes = numenes.map(numen => `
        <a class="numen"
        href="numen.html?numen=${encodeURIComponent(numen)}"
        >

            ${numen}

        </a>
    `).join("");
    const listaFuentes = fuentes.map(fuente => `
        <li>${fuente}</li>
    `).join("");
    // ==========================
    // HTML
    // ==========================

    contenido.innerHTML = `


<div class="contenido">

    <div class="resumen">

        <div class="tarjeta">
            <div class="numero">${numenes.length}</div>
            <div class="texto">Númenes</div>
        </div>

        <div class="tarjeta">
            <div class="numero">${categorias.length}</div>
            <div class="texto">Categorías</div>
        </div>

        <div class="tarjeta">
            <div class="numero">${fuentes.length}</div>
            <div class="texto">Fuentes</div>
        </div>

    </div>

    <section class="bloque">

        <h3>Númenes documentados</h3>

        <div class="lista-numenes">

            ${listaNumenes}

        </div>

    </section>

    <section class="bloque">

        <h3>Bibliografía</h3>

        <ul class="bibliografia">

            ${listaFuentes}

        </ul>

    </section>

</div>

`;

}

cargarMunicipio();
