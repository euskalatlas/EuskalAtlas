/// ===============================
// FILTROS DEL MAPA
// ===============================

// Categoria seleccionada actualmente
let categoriasSeleccionadas = [];

// ===============================
// APLICAR TODOS LOS FILTROS
// ===============================

function aplicarFiltros(registros){

    return registros.filter(r => {
// ==========================
// BIBLIOGRAFÍA
// ==========================

if(
    r.fuente &&
    !bibliografiasSeleccionadas.includes(r.fuente)
    
){
    return false;
}
        // ==========================
        // PROVINCIA
        // ==========================

        if(
             r.provincia &&
    !provinciasSeleccionadas.includes(r.provincia)
        ){
            return false;
        }

        // ==========================
        // CATEGORÍA
        // ==========================

        if(
            r.Categoria &&
    !categoriasSeleccionadas.includes(r.Categoria)
        ){
            return false;
        }

        // ==========================
        // NÚMENES
        // ==========================

        if(
            !numenesSeleccionados.includes(r.numen)
        ){
            return false;
        }

        return true;

    });

}

function aplicarFiltrosSinNumenes(registros){

    return registros.filter(r => {

        // Bibliografía
        if(
                r.fuente &&
                !bibliografiasSeleccionadas.includes(r.fuente)

        ){
            return false;
        }

        // Provincia
        if(
             r.provincia &&
    !provinciasSeleccionadas.includes(r.provincia)
        ){
            return false;
        }

        // Categoría
        if(
             r.Categoria &&
    !categoriasSeleccionadas.includes(r.Categoria)
        ){
            return false;
        }

        return true;

    });

}
function colorearCategoria(categoria){
    actualizarLeyenda(categoria);
    if(!capaMunicipios) return;

    capaMunicipios.eachLayer(function(layer){

        const municipio = layer.feature.properties.iz_ofizial;

const registros = aplicarFiltros(
    buscarMunicipio(municipio)
);

        // ==========================================
        // TODAS LAS CATEGORÍAS (VISIÓN GENERAL)
        // ==========================================

        if(categoria === "Todas las Categorias"){

            // Contar númenes distintos del municipio
            let numenesTotales = new Set();

            registros.forEach(r => {

                if(r.numen && r.numen.trim() !== ""){
                    numenesTotales.add(r.numen);
                }

            });

            const cantidadTotal = numenesTotales.size;

            layer.setStyle({

                color:"#666",
                weight:1,
                fillColor:obtenerColorGeneral(cantidadTotal),
                fillOpacity:cantidadTotal === 0 ? 0.45 : 0.8

            });

            return;

        }

        // ==========================================
        // CATEGORÍA SELECCIONADA
        // ==========================================

        const numenes = new Set();

        registros.forEach(r => {

            if(
                r.Categoria === categoria &&
                r.numen &&
                r.numen.trim() !== ""
            ){
                numenes.add(r.numen);
            }

        });

        const cantidad = numenes.size;

        layer.setStyle({

            color:"#666",
            weight:1,
            fillColor:obtenerColor(categoria,cantidad),
            fillOpacity:cantidad===0 ? 0.45 : 0.8

        });

    });

}



// ===============================
// COLORES VISIÓN GENERAL
// ===============================

function obtenerColorGeneral(cantidad){

    if(cantidad === 0) return "#efefef";
    if(cantidad === 1) return "#ee76bc";
    if(cantidad <= 3) return "#d814a7";
    if(cantidad <= 6) return "#6e073b";
    return "#3b0219";

}



// ===============================
// COLORES SEGÚN CATEGORÍA
// ===============================

function obtenerColor(categoria,cantidad){

    if(cantidad===0) return "#e8e8e8";

    switch(categoria){

        // Granate
        case "Figuras mitológicas femeninas":

            if(cantidad===1) return "#f38b94";
            if(cantidad<=3) return "#b23a48";
            return "#6a040f";


        // Naranja
        case "Figuras mitológicas masculinas":

            if(cantidad===1) return "#f19710";
            if(cantidad<=3) return "#a3660a";
            return "#6e4d04";


        // Azul
        case "Seres zoomorfos":

            if(cantidad===1) return "#1432da";
            if(cantidad<=3) return "#09288f";
            return "#11035e";


        // Morado
        case "Fenómenos y manifestaciones naturales":

            if(cantidad===1) return "#9417ce";
            if(cantidad<=3) return "#660f7c";
            return "#330346";


        // Amarillo
        case "Otras entidades y motivos mitológicos":

            if(cantidad===1) return "#f0c92d";
            if(cantidad<=3) return "#af8c18";
            return "#75540b";


        default:
            return "#e8e8e8";

    }

}



// ===============================
// EVENTO DEL DESPLEGABLE
// ===============================



function actualizarResultados(){

    let totalRegistros = 0;

    let municipios = [];

    capaMunicipios.eachLayer(function(layer){

        const nombre = layer.feature.properties.iz_ofizial;

        const registros = aplicarFiltros(
            buscarMunicipio(nombre)
        );

        if(registros.length > 0){

            municipios.push({

                nombre:nombre,
                registros:registros.length

            });

            totalRegistros += registros.length;

        }

    });
    document.getElementById("totalRegistros").textContent =
        totalRegistros;

    document.getElementById("totalMunicipios").textContent =
        municipios.length;
        
    municipios.sort((a, b) => {

    // Primero por número de registros (de mayor a menor)
    if (b.registros !== a.registros) {
        return b.registros - a.registros;
    }

    // Si empatan, ordenar alfabéticamente
    return a.nombre.localeCompare(b.nombre, "es");

});

const lista = document.getElementById("listaMunicipios");
const aviso = document.getElementById("sinResultados");

// Mostrar u ocultar el mensaje de "Sin resultados"
if(municipios.length === 0){

    lista.style.display = "none";
    aviso.classList.remove("oculto");

}else{

    lista.style.display = "";
    aviso.classList.add("oculto");

}

lista.innerHTML = "";

    municipios.forEach(m=>{
const fila = document.createElement("div");

fila.textContent = `${m.nombre} (${m.registros})`;

fila.style.cursor = "pointer";

fila.addEventListener("click", function(){

    // Si había un popup abierto, no volver a la vista inicial
    moviendoDesdeLista = false;
    mapa.closePopup();

    capaMunicipios.eachLayer(function(layer){

        if(layer.feature.properties.iz_ofizial === m.nombre){

            moviendoDesdeLista = true;

            const centro = layer.getBounds().getCenter();

// Desplazar un poco el mapa hacia la izquierda
const punto = mapa.project(centro, 11);
punto.y -= 180;

const nuevoCentro = mapa.unproject(punto, 11);

mapa.setView(nuevoCentro, 11);

            layer.fire("click");

        }

    });

});

lista.appendChild(fila);


    });

const numenesVisibles = new Set();

aplicarFiltros(mitologia).forEach(registro => {

    if(registro.numen && registro.numen.trim() !== ""){
        numenesVisibles.add(registro.numen.trim());
    }

});

document.getElementById("totalNumenes").textContent =
    numenesVisibles.size;

}



function actualizarMapa(){

    colorearCategoria("Todas las Categorias");

    actualizarResultados();

}

document
.getElementById("restablecerFiltros")
.addEventListener("click", restablecerFiltros);


function restablecerFiltros(){

    // Vaciar selecciones
    provinciasSeleccionadas = [];
    categoriasSeleccionadas = [];
    bibliografiasSeleccionadas = [];
    numenesSeleccionados = [];

    // Reconstruir las listas (al estar vacías se seleccionará todo)
    actualizarListaProvincias();
    actualizarListaCategorias();
    actualizarListaBibliografias();
    actualizarListaNumenes("Todas las Categorias");

    // Actualizar los textos de los botones
    actualizarResumenProvincias();
    actualizarResumenCategorias();
    actualizarResumenBibliografias();
    actualizarResumenNumenes();

    // Actualizar mapa y resultados
    actualizarMapa();

}
