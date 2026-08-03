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
                        ${interfaz[idioma].volver}
                    </a>

                    <div class="cabecera-contenido">

                        <h1>${nombreNumen}</h1>

                        <h2>${interfaz[idioma].numenNoEncontrado}</h2>

                    </div>

                </div>
            `;

            return;
    }
    const ficha = fichasNumenes.find(n =>
    n.nombre.es.trim().toLowerCase() === nombreNumen.trim().toLowerCase()
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
document.getElementById("tituloCabecera").textContent =
    ficha ? ficha.nombre.es : nombreNumen;

document.getElementById("subtituloCabecera").textContent =
    ficha ? ficha.categoria[idioma] : "";

const volver = document.querySelector(".volver-atras");

volver.textContent = interfaz[idioma].volver;

volver.onclick = function (e) {

    e.preventDefault();

    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = "index.html";
    }

};

volver.textContent = interfaz[idioma].volver;

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

        <img
            src="imagenes/iconos/municipio.webp"
            class="icono-tarjeta"
            alt="">

        <div>

            <div class="numero">
                ${municipios.length}
            </div>

            <div class="texto">
                ${municipios.length === 1
                    ? interfaz[idioma].municipio
                    : interfaz[idioma].municipios}
            </div>

        </div>

    </div>

    <div class="tarjeta">

        <img
            src="imagenes/iconos/bibliografia.webp"
            class="icono-tarjeta"
            alt="">

        <div>

            <div class="numero">
                ${fuentes.length}
            </div>

            <div class="texto">
                ${fuentes.length === 1
                    ? interfaz[idioma].fuente
                    : interfaz[idioma].fuentes}
            </div>

        </div>

    </div>

</div>
    ${ficha ? `
    <section class="bloque">

        <h3>${interfaz[idioma].descripcion}</h3>

        <p>${ficha.descripcion[idioma]}</p>

    </section>
    ` : ""}
<div class="informacion">

    <section class="bloque">

        <h3>${interfaz[idioma].presencia}</h3>
        <p>
            ${interfaz[idioma].seleccionarMunicipio}
        </p>

        ${htmlMunicipios}

    </section>

    <section class="bloque">

        <h3>${interfaz[idioma].bibliografia}</h3>

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
