/// =====================================
// DATOS
// =====================================
let provinciasSeleccionadas = [];
let bibliografiasSeleccionadas = [];


// Aquí guardaremos todos los datos de la mitología
let mitologia = [];
let fichasNumenes = [];

// Cargar el archivo JSON
fetch("datos/mitologia.json")
    .then(response => response.json())
    .then(data => {

        mitologia = data;

numenesSeleccionados = [
    ...new Set(
        mitologia
            .filter(r => r.numen && r.numen.trim() !== "")
            .map(r => r.numen)
    )
].sort();
fetch("datos/numenes.json")
    .then(response => response.json())
    .then(data => {

        fichasNumenes = data;

    })
    .catch(error => console.error(error));
    

// NUEVO
provinciasSeleccionadas = [
    ...new Set(
        mitologia
            .filter(r => r.provincia)
            .map(r => r.provincia)
    )
].sort();

categoriasSeleccionadas = [
    ...new Set(
        mitologia
            .filter(r => r.Categoria)
            .map(r => r.Categoria)
    )
].sort();

bibliografiasSeleccionadas = [
    ...new Set(
        mitologia
            .filter(r => r.fuente)
            .map(r => r.fuente)
    )
].sort();



if (typeof actualizarListaNumenes === "function") {
    actualizarListaNumenes("Todas las Categorias");
}
    })
    .catch(error => console.error(error));


// =====================================
// BUSCAR MUNICIPIO
// =====================================

function buscarMunicipio(nombreMunicipio){


    if(!nombreMunicipio) return [];

    return mitologia.filter(registro => {

        if(!registro.municipio) return false;

        return registro.municipio.trim().toLowerCase() === nombreMunicipio.trim().toLowerCase();

    });

}


// =====================================
// VER MUNICIPIOS (para pruebas)
// =====================================

function verMunicipios(nombreMunicipio){

    console.log(

        mitologia.filter(r =>
            r.municipio &&
            r.municipio.toLowerCase().includes(nombreMunicipio.toLowerCase())
        )

    );

}

