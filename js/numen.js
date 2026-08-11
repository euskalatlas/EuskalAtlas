const parametros = new URLSearchParams(window.location.search);
const nombreNumen = parametros.get("numen");

function cargarNumen() {
    // Esperar a que cargue el JSON
    if (
        !mitologia.length ||
        !fichasNumenes ||
        fichasNumenes.length === 0
    ) {

        setTimeout(cargarNumen,100);
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

    const nombreImagen = ficha
    ? `imagenes/icono_ser_mitologico/${ficha.nombre.es}.webp`
    : "";

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
    "Álava",
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

    const nombreProvincia =
        textos[idioma].provinciasTraducidas[provincia] || provincia;

    htmlMunicipios += `
        <div class="provincia">
            ${nombreProvincia}
        </div>
    `;

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
                           href="municipio.html?municipio=${encodeURIComponent(municipio)}">

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
    // SEO dinámico
    if (ficha) {

        document.title = `${ficha.nombre.es} | EuskalAtlas`;

        const descripcion =
            `${ficha.nombre.es} es un ser de la mitología vasca. Consulta su descripción, distribución geográfica, municipios documentados y bibliografía en EuskalAtlas.`;

        let metaDescripcion = document.querySelector('meta[name="description"]');

        if (!metaDescripcion) {
            metaDescripcion = document.createElement("meta");
            metaDescripcion.name = "description";
            document.head.appendChild(metaDescripcion);
        }

        metaDescripcion.content = descripcion;
        // ==========================
        // SCHEMA.ORG
        // ==========================

        const schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": ficha.nombre.es,
            "description": descripcion,
            "url": window.location.href,
            "mainEntityOfPage": window.location.href,
            "inLanguage": idioma,
            "author": {
                "@type": "Organization",
                "name": "EuskalAtlas"
            },
            "publisher": {
                "@type": "Organization",
                "name": "EuskalAtlas",
                "url": "https://euskalatlas.com"
            }
        };

        document.getElementById("schema-jsonld").textContent =
            JSON.stringify(schema);
    }
    const volver = document.querySelector(".volver-atras");

    volver.textContent = interfaz[idioma].volver;

    volver.setAttribute(
    "aria-label",
    interfaz[idioma].volverAria
    );

    const volverMapa = document.querySelector(".volver-mapa");

    volverMapa.setAttribute(
        "aria-label",
        interfaz[idioma].volverMapaAria
    );

    document.querySelector(".volver").setAttribute(
        "aria-label",
        interfaz[idioma].navegacionFicha
    );
    
    
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

                <div class="contenidoPrincipal">

                <section class="bloque bloqueDescripcion">

                    <h3>${interfaz[idioma].descripcion}</h3>

                    <div class="descripcionSuperior">

    <div class="textoDescripcion">

        <p>${ficha.descripcion[idioma]}</p>

    </div>

    <div class="imagenDescripcion">

        <img
            id="imagenNumen"
            src="${nombreImagen}"
            class="imagenNumen"
            alt="${interfaz[idioma].imagenNumenAlt.replace("{nombre}", ficha.nombre[idioma])}"
        >

    </div>

    </div>

                </section>

                    <section class="bloque bloqueMapa">

                        <h3>${interfaz[idioma].mapaDistribucion}</h3>

                        <p class="subtituloMapa">
                            ${interfaz[idioma].municipiosDocumentados}
                        </p>

                        <div id="mapaNumen"></div>

                    </section>

                    <section class="bloque bloquePresencia">

                        <h3>
                            ${interfaz[idioma].presencia}
                            <span class="contadorMunicipios">
                                · ${municipios.length}
                                ${municipios.length === 1
                                    ? interfaz[idioma].municipio
                                    : interfaz[idioma].municipios}
                            </span>
                        </h3>

                        <p>
                            ${interfaz[idioma].seleccionarMunicipio}
                        </p>

                        ${htmlMunicipios}

                    </section>

                    <section class="bloque bloqueBibliografia">

                        <h3>${interfaz[idioma].bibliografia}</h3>

                        <ul class="bibliografia">

                            ${fuentes.map(fuente => `
                                <li>${fuente}</li>
                            `).join("")}

                        </ul>

                    </section>

                </div>

                ` : ""}

                </div>

        `;
        if(ficha){
            if (typeof gtag === "function") {
                console.log("ENVIANDO EVENTO", ficha.nombre.es);
                gtag("event", "abrir_numen", {
                    numen_nombre: ficha.nombre.es,
                    numen_categoria: ficha.categoria.es,
                    idioma: idioma
                });

            }
            crearMapaNumen(municipios);
            const imagen = document.getElementById("imagenNumen");

        if (imagen) {

            imagen.addEventListener("load", function(){

                this.classList.add("cargada");

            });

            imagen.onerror = function(){

                const descripcion = document.querySelector(".descripcionSuperior");

                this.parentElement.remove();

                descripcion.style.gridTemplateColumns = "1fr";

            };

            if (imagen.complete && imagen.naturalWidth > 0) {

                imagen.classList.add("cargada");

            }

        }  

        }
    }

cargarNumen();

function crearMapaNumen(listaMunicipios){
    Promise.all([

        fetch("mapas/municipios-euskadi.geojson").then(r => r.json()),
        fetch("mapas/Iparralde_municipios.geojson").then(r => r.json()),
        fetch("mapas/Navarra_municipios.geojson").then(r => r.json())

    ]).then(([euskadi, iparralde, navarra]) => {
        euskadi.features.push(...iparralde.features);
        euskadi.features.push(...navarra.features);

        const limites = L.latLngBounds(

            [41.9, -2.75],

            [43.65, -0.70]

        );

        const mapaNumen = L.map("mapaNumen",{
            

            zoomControl:false,

            attributionControl:false,

            dragging:false,

            touchZoom:false,

            doubleClickZoom:false,

            scrollWheelZoom:false,

            boxZoom:false,

            keyboard:false,

            tap:false

        });

        const mapaElemento = document.getElementById("mapaNumen");

        mapaElemento.setAttribute("role", "img");

        mapaElemento.setAttribute(
            "aria-label",
            interfaz[idioma].mapaNumenAria
                .replace("{nombre}", nombreNumen)
                .replace("{cantidad}", listaMunicipios.length)
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapaNumen);

        const capa = L.geoJSON(euskadi,{

        style:function(feature){

            const seleccionado = listaMunicipios.includes(
                feature.properties.iz_ofizial
            );

            return{

                color:"#666",

                weight:1,

                fillColor: seleccionado
                    ? "#6e073b"
                    : "#e8efe3",

                fillOpacity: seleccionado
                    ? 0.85
                    : 1

            };

        }

    }).addTo(mapaNumen);
    setTimeout(() => {

    mapaNumen.invalidateSize();
        mapaNumen.fitBounds([

            [41.9, -2.75],
            [43.65, -1.40]

        ],{

            padding:[25,25]

        });

    });
    },1);

}