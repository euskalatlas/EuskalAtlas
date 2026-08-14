/// =====================================
// DATOS
// =====================================
let provinciasSeleccionadas = [];
let autoresSeleccionados = [];


// Aquí guardaremos todos los datos de la mitología
let mitologia = [];
let fichasNumenes = [];

Promise.all([

    fetch("datos/mitologia.json").then(r => r.json()),
    fetch("datos/numenes.json").then(r => r.json())

]).then(([mitologiaData, numenesData]) => {

    mitologia = mitologiaData;
    fichasNumenes = numenesData;

    numenesSeleccionados = [
        ...new Set(
            mitologia
                .filter(r => r.numen && r.numen.trim() !== "")
                .map(r => r.numen)
        )
    ].sort();

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

autoresSeleccionados = [
    ...new Set(
        mitologia
            .filter(r => r.autor && r.autor.trim() !== "")
            .map(r => r.autor)
    )
].sort();

    if (typeof actualizarListaNumenes === "function") {
        actualizarListaNumenes("Todas las Categorias");
    }

}).catch(error => console.error(error));

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

