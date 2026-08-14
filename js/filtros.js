/// ===============================
// FILTROS DEL MAPA
// ===============================
// Categoria seleccionada actualmente
let categoriasSeleccionadas = [];

// ===============================
// APLICAR TODOS LOS FILTROS
// ===============================
const TODAS = "__TODAS__";
// ======================================
// REGISTROS COMPATIBLES PARA CADA FILTRO
// ======================================

// ======================================
// REGISTROS COMPATIBLES PARA CADA FILTRO
// ======================================

function obtenerRegistrosCompatibles(ignorar){

    const autorRestringido =
        filtroEstaRestringido(
            autoresSeleccionados,
            "autor"
        );

    const provinciaRestringida =
        filtroEstaRestringido(
            provinciasSeleccionadas,
            "provincia"
        );

    const categoriaRestringida =
        filtroEstaRestringido(
            categoriasSeleccionadas,
            "Categoria"
        );

    const numenRestringido =
        filtroEstaRestringido(
            numenesSeleccionados,
            "numen"
        );


    return mitologia.filter(r => {

        // ==========================
        // AUTOR
        // ==========================

        if(
            ignorar !== "autor" &&
            autorRestringido &&
            !autoresSeleccionados.includes(r.autor)
        ){
            return false;
        }


        // ==========================
        // PROVINCIA
        // ==========================

        if(
            ignorar !== "provincia" &&
            provinciaRestringida &&
            !provinciasSeleccionadas.includes(r.provincia)
        ){
            return false;
        }


        // ==========================
        // CATEGORÍA
        // ==========================

        if(
            ignorar !== "categoria" &&
            categoriaRestringida &&
            !categoriasSeleccionadas.includes(r.Categoria)
        ){
            return false;
        }


        // ==========================
        // NÚMEN
        // ==========================

        if(
            ignorar !== "numen" &&
            numenRestringido &&
            !numenesSeleccionados.includes(r.numen)
        ){
            return false;
        }


        return true;

    });

}

// ======================================
// ELIMINAR SELECCIONES QUE HAN DEJADO
// DE SER COMPATIBLES
// ======================================

function limpiarSeleccionesIncompatibles(){

    // ----------------------------------
    // CATEGORÍAS
    // ----------------------------------

    const registrosCategorias =
        obtenerRegistrosCompatibles("categoria");

    const categoriasCompatibles = new Set();

    registrosCategorias.forEach(r => {

        if(r.Categoria && r.Categoria.trim() !== ""){
            categoriasCompatibles.add(r.Categoria);
        }

    });

    categoriasSeleccionadas =
        categoriasSeleccionadas.filter(categoria =>
            categoriasCompatibles.has(categoria)
        );


    // ----------------------------------
    // AUTORES
    // ----------------------------------

    const registrosAutores =
        obtenerRegistrosCompatibles("autor");

    const autoresCompatibles = new Set();

    registrosAutores.forEach(r => {

        if(r.autor && r.autor.trim() !== ""){
            autoresCompatibles.add(r.autor);
        }

    });

    autoresSeleccionados =
        autoresSeleccionados.filter(autor =>
            autoresCompatibles.has(autor)
        );


    // ----------------------------------
    // PROVINCIAS
    // ----------------------------------

    const registrosProvincias =
        obtenerRegistrosCompatibles("provincia");

    const provinciasCompatibles = new Set();

    registrosProvincias.forEach(r => {

        if(r.provincia && r.provincia.trim() !== ""){
            provinciasCompatibles.add(r.provincia);
        }

    });

    provinciasSeleccionadas =
        provinciasSeleccionadas.filter(provincia =>
            provinciasCompatibles.has(provincia)
        );


    // ----------------------------------
    // NÚMENES
    // ----------------------------------

    const registrosNumenes =
        obtenerRegistrosCompatibles("numen");

    const numenesCompatibles = new Set();

    registrosNumenes.forEach(r => {

        if(r.numen && r.numen.trim() !== ""){
            numenesCompatibles.add(r.numen);
        }

    });

    numenesSeleccionados =
        numenesSeleccionados.filter(numen =>
            numenesCompatibles.has(numen)
        );

}
// ======================================
// COMPROBAR SI UN FILTRO ESTÁ REALMENTE
// RESTRINGIDO POR EL USUARIO
// ======================================

function filtroEstaRestringido(seleccionados, campo){

    const valores = new Set();

    mitologia.forEach(registro => {

        let valor = registro[campo];

        if(
            valor !== undefined &&
            valor !== null &&
            String(valor).trim() !== ""
        ){
            valores.add(String(valor).trim());
        }

    });

    // Ninguna selección = no hay resultados
    if(seleccionados.length === 0){
        return true;
    }

    // Si están seleccionadas todas las opciones,
    // el filtro no está restringiendo nada.
    return seleccionados.length < valores.size;

}

function actualizarListasDependientes(origen){

    // ======================================
    // RECONSTRUIR LISTAS
    // ======================================

    actualizarListaProvincias();

    actualizarListaCategorias();

    actualizarListaBibliografias();

    actualizarListaNumenes(
        categoriasSeleccionadas.length === 1
            ? categoriasSeleccionadas[0]
            : TODAS
    );

}


function aplicarFiltros(registros){

    return registros.filter(r => {
// ==========================
// AUTOR
// ==========================

if(
    r.autor &&
    !autoresSeleccionados.includes(r.autor)
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

    // ==========================
    // AUTOR
    // ==========================

    if(
        r.autor &&
        !autoresSeleccionados.includes(r.autor)
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

        if(categoria === TODAS){

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

    municipios.forEach(m => {

        const fila = document.createElement("div");

        // Enlace visible (igual que ahora)
        const enlaceMapa = document.createElement("span");
        enlaceMapa.textContent = `${m.nombre} (${m.registros})`;
        enlaceMapa.style.cursor = "pointer";

        enlaceMapa.addEventListener("click", function(){

            moviendoDesdeLista = false;
            mapa.closePopup();

            capaMunicipios.eachLayer(function(layer){

                if(layer.feature.properties.iz_ofizial === m.nombre){

                    moviendoDesdeLista = true;

                    const centro = layer.getBounds().getCenter();

                    const punto = mapa.project(centro,11);
                    punto.y -= 180;

                    const nuevoCentro = mapa.unproject(punto,11);

                    mapa.setView(nuevoCentro,11);

                    layer.fire("click");

                }

            });

        });

        fila.appendChild(enlaceMapa);

        // Enlace SOLO para lectores de pantalla
        const enlaceFicha = document.createElement("a");

        enlaceFicha.href =
            `municipio.html?municipio=${encodeURIComponent(m.nombre)}`;
        
        enlaceFicha.className = "sr-only";

        enlaceFicha.textContent =
            `Abrir la ficha completa del municipio ${m.nombre}`;

        fila.appendChild(enlaceFicha);

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
    if(categoriasSeleccionadas.length === 1){

        colorearCategoria(categoriasSeleccionadas[0]);

    }else{

        colorearCategoria(TODAS);

    }

    actualizarResultados();

}

document
.getElementById("restablecerFiltros")
.addEventListener("click", restablecerFiltros);


function restablecerFiltros(){

    // ======================================
    // RESTABLECER TODAS LAS SELECCIONES
    // ======================================

    provinciasSeleccionadas = [
        ...new Set(
            mitologia
                .filter(r => r.provincia && r.provincia.trim() !== "")
                .map(r => r.provincia)
        )
    ].sort();


    categoriasSeleccionadas = [
        ...new Set(
            mitologia
                .filter(r => r.Categoria && r.Categoria.trim() !== "")
                .map(r => r.Categoria)
        )
    ].sort();


    autoresSeleccionados = [
        ...new Set(
            mitologia
                .filter(r => r.autor && r.autor.trim() !== "")
                .map(r => r.autor)
        )
    ].sort();


    numenesSeleccionados = [
        ...new Set(
            mitologia
                .filter(r => r.numen && r.numen.trim() !== "")
                .map(r => r.numen)
        )
    ].sort();


    // ======================================
    // RECONSTRUIR LAS LISTAS
    // ======================================

    actualizarListaProvincias();
    actualizarListaCategorias();
    actualizarListaBibliografias();
    actualizarListaNumenes(TODAS);


    // ======================================
    // ACTUALIZAR RESÚMENES
    // ======================================

    actualizarResumenProvincias();
    actualizarResumenCategorias();
    actualizarResumenBibliografias();
    actualizarResumenNumenes();


    // ======================================
    // ACTUALIZAR MAPA Y RESULTADOS
    // ======================================

    actualizarMapa();

    centrarMapa();

}

function prepararBuscador(inputId, listaId, botonAceptarId){

    const input = document.getElementById(inputId);

    if(!input) return;

    input.addEventListener("input", function(){

        const texto = this.value.trim().toLowerCase();

        const filas = document.querySelectorAll(`#${listaId} > div`);

        let visibles = [];

        filas.forEach(fila =>{

            if(fila.textContent.toLowerCase().includes(texto)){

                fila.style.display = "";
                visibles.push(fila);

            }else{

                fila.style.display = "none";

            }

        });

        // Si el usuario usa el buscador,
        // desmarcamos todo
        if(texto !== ""){

            document
                .querySelectorAll(`#${listaId} input[type="checkbox"]`)
                .forEach(c=>c.checked=false);

            visibles.forEach(fila=>{

                fila.querySelector("input").checked = true;

            });

        }

    });

    input.addEventListener("keydown", function(e){

        if(e.key==="Enter"){

            e.preventDefault();

            document
                .getElementById(botonAceptarId)
                .click();

        }

    });

}