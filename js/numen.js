const parametros = new URLSearchParams(window.location.search);
const nombreNumen = parametros.get("numen");

function cargarNumen() {

    // Esperar a que cargue el JSON
    if (!mitologia.length) {
        setTimeout(cargarNumen, 100);
        return;
    }

    // Buscar el númen
    const resultados = mitologia.filter(r =>
        r.numen &&
        r.numen.trim().toLowerCase() === nombreNumen.trim().toLowerCase()
    );

    const contenido = document.getElementById("contenido");

        // Si no existe
        if (resultados.length === 0) {

            contenido.innerHTML = `
                <div class="cabecera">

                    <a class="volver" href="javascript:history.back()">
                        ← Volver
                    </a>

                    <div class="cabecera-contenido">

                        <h1>${nombreNumen}</h1>

                        <h2>Númen no encontrado</h2>

                    </div>

                </div>
            `;

            return;
    }
    const ficha = fichasNumenes.find(n =>
        n.nombre.trim().toLowerCase() === nombreNumen.trim().toLowerCase()
    );

    // ==========================
    // MUNICIPIOS
    // ==========================

    const municipios = [...new Set(

        resultados
            .filter(r => r.municipio && r.municipio.trim() !== "")
            .map(r => r.municipio.trim())

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
    // FUENTES
    // ==========================

    const fuentes = [...new Set(

        resultados
            .filter(r => r.fuente && r.fuente.trim() !== "")
            .map(r => r.fuente.trim())

    )].sort((a, b) => a.localeCompare(b, "es"));

    // ==========================
    // MUNICIPIOS POR PROVINCIA
    // ==========================

   const provinciasOrden = [
    "Alava",
    "Bizkaia",
    "Gipuzkoa",
    "Lapurdi",
    "Navarra",
    "Baja Navarra",
    "Zuberoa"
];

    const municipiosPorProvincia = {};

    resultados.forEach(r => {

        if (!r.provincia || !r.municipio) return;

        const provincia = r.provincia.trim();
        const municipio = r.municipio.trim();

        if (!municipiosPorProvincia[provincia]) {
            municipiosPorProvincia[provincia] = new Set();
        }

        municipiosPorProvincia[provincia].add(municipio);

    });

   let htmlMunicipios = "";

provinciasOrden.forEach(provincia => {

    htmlMunicipios += `<div class="provincia">${provincia}</div>`;

    if (!municipiosPorProvincia[provincia]) {

        htmlMunicipios += `
            <div class="sin-municipios">
                —
            </div>
        `;

        return;
    }

    const lista = [...municipiosPorProvincia[provincia]]
        .sort((a, b) => a.localeCompare(b, "es"));

    htmlMunicipios += `
        <div class="lista-municipios">
            <ul>

                ${lista.map(municipio => `
                    <li>
                        <a class="municipio-link"
                           href="municipio.html?municipio=${encodeURIComponent(municipio)}"
                           >

                            ${municipio}

                        </a>
                    </li>
                `).join("")}

            </ul>
        </div>
    `;
});

    // ==========================
    // HTML
    // ==========================
document.getElementById("tituloCabecera").textContent = nombreNumen;

document.getElementById("subtituloCabecera").textContent =
    categorias[0] ?? "";

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
    
    contenido.innerHTML = `



<div class="contenido">

    <div class="resumen">

        <div class="tarjeta">
            <div class="numero">${municipios.length}</div>
            <div class="texto">Municipios</div>
        </div>

        <div class="tarjeta">
            <div class="numero">${fuentes.length}</div>
            <div class="texto">
                ${fuentes.length === 1 ? "Fuente" : "Fuentes"}
            </div>
        </div>

    </div>
    ${ficha ? `
    <section class="bloque">

        <h3>Descripción</h3>

        <p>${ficha.descripcion}</p>

    </section>
    ` : ""}
<div class="informacion">

    <section class="bloque">

        <h3>Presencia geográfica</h3>

        ${htmlMunicipios}

    </section>

    <section class="bloque">

        <h3>Bibliografía</h3>

        <ul class="bibliografia">

            ${fuentes.map(fuente => `
                <li>${fuente}</li>
            `).join("")}

        </ul>

    </section>

</div>

</div>

`;

}

cargarNumen();
