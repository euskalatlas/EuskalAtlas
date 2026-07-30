// ======================================
// CREAR MAPA
// ======================================

var mapa = L.map("mapa").setView([42.6, -2.25], 8);

const leyenda = L.control({ position: "bottomright" });

leyenda.onAdd = function () {

    this._div = L.DomUtil.create("div", "info legend");

    return this._div;

};

leyenda.addTo(mapa);

const vistaInicial = {
    center: mapa.getCenter(),
    zoom: mapa.getZoom()
};

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

Promise.all([

    fetch("mapas/municipios-euskadi.geojson").then(r => r.json()),
    fetch("mapas/Iparralde_municipios.geojson").then(r => r.json()),
    fetch("mapas/Navarra_municipios.geojson").then(r => r.json())

]).then(([euskadi, iparralde, navarra]) => {

    euskadi.features.push(...iparralde.features);
    euskadi.features.push(...navarra.features);

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

                        weight: 3,
                        color: "#000",
                        fillOpacity: 0.9

                    });

                },

                // ==========================
                // QUITAR RATÓN
                // ==========================

                mouseout: function () {

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

                            <div class="popup-titulo">${municipio}</div>

                            <div class="popup-provincia">${provincia}</div>

                            <div class="popup-separador"></div>
                    `;

                    if (resultados.length === 0) {

                        texto += `
                            <p><i>No hay información para esta categoría.</i></p>
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
                            <div class="popup-dato">
                                Númenes documentados: <strong>${numenes.length}</strong>
                            </div>

                            <div class="popup-dato">
                                Fuentes bibliográficas: <strong>${fuentes.length}</strong>
                            </div>

                            <div class="popup-separador"></div>

                            <a class="popup-ficha"
                            href="municipio.html?municipio=${encodeURIComponent(municipio)}"
                            >
                                Ver ficha completa →
                            </a>

                            <div class="popup-separador"></div>

                            <div class="popup-lista">
                        `;

                        numenes.forEach(numen => {

    texto += `
        <a class="popup-numen"
           href="numen.html?numen=${encodeURIComponent(numen)}"
           >

            ${numen}

        </a>
    `;

});

                        texto += `
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

        console.log("popupclose", moviendoDesdeLista);

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

    let html = "";

    if(categoria === "Todas las Categorias"){

        html = `
        <h4>Númenes</h4>

        <div><span style="background:#efefef"></span>0</div>
        <div><span style="background:#f169b9"></span>1</div>
        <div><span style="background:#c52e81"></span>2–3</div>
        <div><span style="background:#6e073b"></span>4–6</div>
        <div><span style="background:#3b0219"></span>7+</div>
        `;

    }else{

        html = `
        <h4>${categoria}</h4>

        <div><span style="background:#e8e8e8"></span>Sin registros</div>
        <div><span style="background:#6a040f"></span>Con registros</div>
        `;

    }

    leyenda.getContainer().innerHTML = html;

}

