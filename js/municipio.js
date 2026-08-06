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
    // SEO dinámico
    document.title = `${municipio} | EuskalAtlas`;

    const descripcion =
        `${municipio} es un municipio con referencias a la mitología vasca. Consulta los seres mitológicos documentados y la bibliografía disponible en EuskalAtlas.`;

    let metaDescripcion = document.querySelector('meta[name="description"]');

    if (!metaDescripcion) {
        metaDescripcion = document.createElement("meta");
        metaDescripcion.name = "description";
        document.head.appendChild(metaDescripcion);
    }

    metaDescripcion.content = descripcion;
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
    contenido.innerHTML = "<div class='contenido'></div>";
        
        const categoriasOrden = [
        "Figuras mitológicas femeninas",
        "Figuras mitológicas masculinas",
        "Seres zoomorfos",
        "Fenómenos y manifestaciones naturales",
        "Otras entidades y motivos mitológicos"
    ];

    const numenesPorCategoria = {};

    resultados.forEach(r => {

        if(!r.Categoria || !r.numen) return;

        const categoria = r.Categoria.trim();
        const numen = r.numen.trim();

        if(!numenesPorCategoria[categoria]){
            numenesPorCategoria[categoria] = new Set();
        }

        numenesPorCategoria[categoria].add(numen);

    });

    let listaNumenes = "";

    categoriasOrden.forEach(categoria => {

        if(!numenesPorCategoria[categoria]) return;

        const lista = [...numenesPorCategoria[categoria]]
            .sort((a,b)=>a.localeCompare(b,"es"));
        const ficha = fichasNumenes.find(n =>
        n.nombre.es === lista[0]
    );

        const nombreCategoria = ficha
            ? ficha.categoria[idioma]
            : categoria;
        listaNumenes += `

    <div class="categoria-numenes">

    <h4>${nombreCategoria}</h4>


        <div class="lista-numenes">

            ${lista.map(numen=>`

                <a class="numen"
                href="numen.html?numen=${encodeURIComponent(numen)}">

                    ${numen}

                </a>

            `).join("")}

        </div>

    </div>

    `;

    });
        const listaFuentes = fuentes.map(fuente => `
            <li>${fuente}</li>
        `).join("");
        let mensajeSinDatos = "";

        if (numenes.length === 0) {

            contenido.innerHTML = `
                <div class="contenido">

            <div class="sin-datos">

                <h3>ℹ️ ${interfaz[idioma].sinReferencias}</h3>

                <p>
                    ${interfaz[idioma].sinReferenciasTexto1}
                </p>

                <p>
                    ${interfaz[idioma].sinReferenciasTexto2}
                </p>

            </div>

        </div>
            `;

        return;

    }
    // ==========================
    // HTML
    // ==========================

    contenido.innerHTML = `


        <div class="contenido">

            <div class="resumen">

                <div class="tarjeta">

                    <img
                        src="imagenes/iconos/ser-mitologico.webp"
                        class="icono-tarjeta"
                        alt="">

                    <div>

                        <div class="numero">${numenes.length}</div>

                        <div class="texto">
                            ${numenes.length === 1
                                ? interfaz[idioma].serMitologico
                                : interfaz[idioma].seresMitologicos}
                        </div>

                    </div>

                </div>

                <div class="tarjeta">

                    <img
                        src="imagenes/iconos/bibliografia.webp"
                        class="icono-tarjeta"
                        alt="">

                    <div>

                        <div class="numero">${fuentes.length}</div>

                        <div class="texto">
                            ${fuentes.length === 1
                                ? interfaz[idioma].fuente
                                : interfaz[idioma].fuentes}
                        </div>

                    </div>

                </div>

            </div>

            <div class="informacion">
            ${mensajeSinDatos}

            <section class="bloque">

            <h3>${interfaz[idioma].seresDocumentados}</h3>
                <p>
                    ${interfaz[idioma].seleccionarSer}
                </p>

                ${listaNumenes}

            </section>

            <section class="bloque">

                <h3>${interfaz[idioma].bibliografia}</h3>

                <ul class="bibliografia">

                    ${listaFuentes}

                </ul>

            </section>

        </div>

        </div>

    `;
    gtag("event", "abrir_municipio", {
        municipio_nombre: municipio,
        municipio_provincia: provincia,
        idioma: idioma
    });

}


cargarMunicipio();
