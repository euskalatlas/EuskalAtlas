// ======================================
// CREAR MAPA
// ======================================

const limites = L.latLngBounds(

    [41.9, -2.75],   // esquina suroeste

    [43.65, -0.70]    // esquina noreste

);

var mapa = L.map("mapa",{
    minZoom:4,
    maxZoom:15,
    // maxBounds:limites,
    // maxBoundsViscosity:1.0,
    zoomAnimation:false,
    fadeAnimation:false,
    markerZoomAnimation:false
});

mapa.fitBounds(limites, {
    padding:[15,15]
});

window.addEventListener("load", () => {
    setTimeout(() => {
        mapa.invalidateSize();
        mapa.fitBounds(limites, {
            padding:[15,15]
        });
    },400);
});


const leyenda = L.control({ position: "topright" });

leyenda.onAdd = function () {

    this._div = L.DomUtil.create("div", "info legend");

    return this._div;

};

leyenda.addTo(mapa);


const vistaInicial = {
    center: mapa.getCenter(),
    zoom: mapa.getZoom()
};

function centrarMapa() {

    mapa.closePopup();

    mapa.fitBounds(limites,{
        padding:[15,15]
    });

}

const botonCentrar = L.control({ position: "topleft" });


botonCentrar.onAdd = function () {

    const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");

    div.innerHTML = `
        <a
            href="#"
            id="botonCentrarMapa"
            title="Centrar mapa"
            aria-label="Centrar mapa">

            <img
                src="imagenes/iconos/centrar-mapa.webp"
                alt=""
                width="20"
                height="20">

        </a>
    `;

    L.DomEvent.disableClickPropagation(div);

    div.onclick = function (e) {

        L.DomEvent.preventDefault(e);

        centrarMapa();

    };

    return div;

};

botonCentrar.addTo(mapa);

// Mapa base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(mapa);

// Variable global
let capaMunicipios;
let moviendoDesdeLista = false;

// ======================================
// CARGAR GEOJSON
// ======================================

let geojsonMunicipios = null;

Promise.all([

    fetch("mapas/municipios-euskadi.geojson").then(r => r.json()),
    fetch("mapas/Iparralde_municipios.geojson").then(r => r.json()),
    fetch("mapas/Navarra_municipios.geojson").then(r => r.json())

]).then(([euskadi, iparralde, navarra]) => {

    euskadi.features.push(...iparralde.features);
    euskadi.features.push(...navarra.features);

    geojsonMunicipios = euskadi;


    capaMunicipios = L.geoJSON(euskadi, {

        style: function () {

            return {
                color: "#8c8c8c",
                weight: 1,
                fillColor: "#f0f0f0",
                fillOpacity: 0.7
            };

        },

        onEachFeature: function (feature, layer) {

            layer.on({

                // ==========================
                // PASAR RATÓN
                // ==========================

                mouseover: function (e) {

                    e.target.setStyle({

                        weight:3,
                        color:"#1b4332",
                        fillOpacity:0.9

                    });

                    layer.bindTooltip(

                        feature.properties.iz_ofizial,

                        {

                            direction:"top",

                            sticky:true,

                            opacity:1,

                            className:"tooltipMunicipio"

                        }

                    ).openTooltip();

                },

                // ==========================
                // QUITAR RATÓN
                // ==========================

                mouseout: function () {

                    layer.closeTooltip();   
                    actualizarMapa();

                },

               // ==========================
                // POPUP
                // ==========================

                click: function () {

                    const municipio = feature.properties.iz_ofizial;

                    const resultados = aplicarFiltros(
                        buscarMunicipio(municipio)
                    );

                    const provincia = resultados.length > 0
                        ? resultados[0].provincia
                        : "";

                    const fuentes = [...new Set(
                        resultados
                            .filter(r => r.fuente && r.fuente.trim() !== "")
                            .map(r => r.fuente.trim())
                    )].sort((a, b) =>
                        a.localeCompare(b, "es", { sensitivity: "base" })
                    );

                    let texto = `
                        <div class="popup-municipio">

                            <div class="popup-header">

                                <img
                                    src="imagenes/iconos/municipio.webp"
                                    class="popup-icono"
                                    alt="">

                                <div class="popup-info">

                                    <div class="popup-titulo">
                                        ${municipio}
                                    </div>

                                    <div class="popup-provincia">
                                        ${provincia}
                                    </div>

                                </div>

                            </div>

                            <div class="popup-separador"></div>
                        `;

                        if (resultados.length === 0) {

                            texto += `
                                ${interfaz[idioma].sinInformacionCategoria}
                            `;

                        } else {

                            const numenes = [...new Set(
                                resultados
                                    .filter(r => r.numen && r.numen.trim() !== "")
                                    .map(r => r.numen.trim())
                            )].sort((a, b) =>
                                a.localeCompare(b, "es", { sensitivity: "base" })
                            );

                            texto += `

                                <div class="popup-estadisticas">

                                <div class="popup-card">

                                    <img
                                        src="imagenes/iconos/ser-mitologico.webp"
                                        class="popup-card-icono"
                                        alt="">

                                    <div>

                                        <span class="popup-numero">
                                            ${numenes.length}
                                        </span>

                                        <small>
                                            ${interfaz[idioma].seresDocumentados}
                                        </small>

                                    </div>

                                </div>

                                <div class="popup-card">

                                    <img
                                        src="imagenes/iconos/bibliografia.webp"
                                        class="popup-card-icono"
                                        alt="">

                                    <div>

                                        <span class="popup-numero">
                                            ${fuentes.length}
                                        </span>

                                        <small>
                                            ${interfaz[idioma].bibliografia}
                                        </small>

                                    </div>

                                </div>

                            </div>

                            <a
                                class="popup-ficha"
                                href="municipio.html?municipio=${encodeURIComponent(municipio)}">

                                ${interfaz[idioma].verFicha} →

                            </a>

                            <div class="popup-separador"></div>

                            <div class="popup-lista-contenedor">

                                <div class="popup-subtitulo">

                                    ${interfaz[idioma].seresDocumentados}

                                </div>

                                <div class="popup-lista">
                        `;

               numenes.forEach(numen => {

                    texto += `
                        <a
                            class="popup-numen"
                            href="numen.html?numen=${encodeURIComponent(numen)}">

                            ${numen}

                        </a>
                    `;

                });

                texto += `

                        </div>

                    </div>

                `;

                                                }

                                                texto += `
                                                </div>
                                                `;

                    layer.bindPopup(texto, {
                    autoPan: true,
                    autoPanPaddingTopLeft: [20, 20],
                    autoPanPaddingBottomRight: [20, 10]
                }).openPopup();

                }
            });

        }

    }).addTo(mapa);

    // categoriaSeleccionada = "Todas las Categorias";

    actualizarMapa();

    mapa.on("popupclose", function () {



        if (moviendoDesdeLista) {

            mapa.setView(vistaInicial.center, vistaInicial.zoom);

            moviendoDesdeLista = false;

        }

    });

});
mapa.on("zoomend", function () {

    const popup = mapa._popup;

    if (popup) {
        popup.update();
    }

});

window.addEventListener("resize", function () {

    setTimeout(function () {
        mapa.invalidateSize();
    }, 100);

});

function actualizarLeyenda(categoria){
    //alert(categoria);
    
        let html = "";

        if(categoria === TODAS){

        html = `
        <h4>${textos[idioma].escala}</h4>

        <div aria-label="Sin registros">
            <span style="background:#efefef"></span>0
        </div>

        <div aria-label="Un ser mitológico">
            <span style="background:#f169b9"></span>1
        </div>

        <div aria-label="Entre dos y tres seres mitológicos">
            <span style="background:#c52e81"></span>2–3
        </div>

        <div aria-label="Entre cuatro y seis seres mitológicos">
            <span style="background:#6e073b"></span>4–6
        </div>

        <div aria-label="Siete o más seres mitológicos">
            <span style="background:#3b0219"></span>7+
        </div>
        `;

    }else{

    let color1, color2, color3;

    switch(categoria){

        case "Figuras mitológicas femeninas":
            //alert("ENTRA");
            color1 = "#f38b94";
            color2 = "#b23a48";
            color3 = "#6a040f";
            break;

        case "Figuras mitológicas masculinas":
            color1 = "#f19710";
            color2 = "#a3660a";
            color3 = "#6e4d04";
            break;

        case "Seres zoomorfos":
            color1 = "#1432da";
            color2 = "#09288f";
            color3 = "#11035e";
            break;

        case "Fenómenos y manifestaciones naturales":
            color1 = "#9417ce";
            color2 = "#660f7c";
            color3 = "#330346";
            break;

        case "Otras entidades y motivos mitológicos":
            color1 = "#f0ed53";
            color2 = "#e9db15";
            color3 = "#abad0d";
            break;
    }

    html = `
    <h4>${textos[idioma].escala}</h4>

    <div aria-label="Sin registros">
        <span style="background:#e8e8e8"></span>0
    </div>

    <div aria-label="Un ser mitológico">
        <span style="background:${color1}"></span>1
    </div>

    <div aria-label="Entre dos y tres seres mitológicos">
        <span style="background:${color2}"></span>2–3
    </div>

    <div aria-label="Cuatro o más seres mitológicos">
        <span style="background:${color3}"></span>4+
    </div>
    `;

        }
        
        leyenda.getContainer().innerHTML = html;
        const leyendaMapa = leyenda.getContainer();

        leyendaMapa.setAttribute("role", "img");

        leyendaMapa.setAttribute(
            "aria-label",
            "Escala de colores del mapa. Cuanto más oscuro es el color, mayor es el número de seres mitológicos registrados en cada municipio."
        );

}

