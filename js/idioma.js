let idioma = localStorage.getItem("idioma") || "es";

const textos = {
    es: {
        provincias: "Provincias",
        categorias: "Categorías",
        bibliografia: "Bibliografía",
        escala: "Referencias",
        registros: "Registros",
        municipios: "Municipios",
        seres: "Seres mitológicos",
        restablecer: "Restablecer filtros",
        subtitulo: "Atlas digital del patrimonio cultural vasco",

        btnProvincias: "Seleccionar provincias",
        btnCategorias: "Seleccionar categorías",
        btnSeres: "Seleccionar seres mitológicos",
        btnBibliografia: "Seleccionar bibliografía",

        abrirMunicipio: "📄 Abrir ficha de municipio",
        abrirSer: "✨ Abrir ficha de ser mitológico",

        infoFiltros: "El mapa y el panel de resultados se actualizan automáticamente según los filtros seleccionados.",

        ayudaMunicipios: "Haz clic en un municipio para verlo en detalle. El número entre paréntesis indica los seres mitológicos documentados.",

        sinResultados: "⚠ Sin resultados",
        sinResultadosTexto: "No se han encontrado registros con los filtros seleccionados.",

        modalProvincias: "Seleccionar provincias",
        modalCategorias: "Seleccionar categorías",
        modalSeres: "Seleccionar seres mitológicos",
        modalBibliografia: "Seleccionar bibliografía",
        modalMunicipios: "Abrir ficha de municipio",
        modalFichaNumenes: "Seleccionar ser mitológico",

        seleccionarTodas: "Seleccionar todas",
        deseleccionarTodas: "Deseleccionar todas",
        aceptar: "Aceptar",

        copyright: "© 2026 Euskal Atlas. Todos los derechos reservados.",

        buscarProvincia: "Buscar provincia...",
        buscarCategoria: "Buscar categoría...",
        buscarSer: "Buscar seres mitológicos...",
        buscarBibliografia: "Buscar bibliografía...",
        buscarMunicipio: "Buscar municipio...",
        buscarFichaNumen: "Buscar ser mitológico...",
        volver: "← Volver",
        volverMapa: "Página de inicio",
        catFemeninas: "Figuras mitológicas femeninas",
        catMasculinas: "Figuras mitológicas masculinas",
        catZoomorfos: "Seres zoomorfos",
        catFenomenos: "Fenómenos y manifestaciones naturales",
        catOtras: "Otras entidades y motivos mitológicos",
        todasProvincias: "Todas las provincias",
        ningunaProvincia: "Ninguna provincia",
        unaProvincia: "1 provincia",
        variasProvincias: "provincias",

        todasCategorias: "Todas las categorías",
        ningunaCategoria: "Ninguna categoría",
        unaCategoria: "1 categoría",
        variasCategorias: "categorías",

        todosNumenes: "Todos los seres",
        ningunNumen: "Ningún ser",
        unNumen: "1 ser",
        variosNumenes: "seres",

        todaBibliografia: "Toda la bibliografía",
        ningunaBibliografia: "Ninguna bibliografía",
        unaBibliografia: "1 fuente",
        variasBibliografias: "fuentes",

        fichaMunicipio: "Ficha de municipio",
        fichaSer: "Ficha de ser mitológico",
        abrirMunicipio: "Abrir una ficha",
        abrirSer: "Abrir una ficha",

        descripcionProvincias: "Elige una o varias provincias para filtrar el mapa.",
        descripcionCategorias: "Selecciona una o varias categorías.",
        descripcionBibliografia: "Selecciona una o varias referencias bibliográficas.",
        descripcionNumenes: "Selecciona uno o varios seres mitológicos.",
        descripcionNumen: "Selecciona un ser mitológico para abrir su ficha completa.",
        descripcionMunicipios: "Selecciona un municipio para abrir su ficha completa.",

        footerDescripcion: "Atlas interactivo del patrimonio mitológico vasco.",

        contacto: "Contacto",

        metodologia: "Metodología",

        avisoLegal: "Aviso legal",

        privacidad: "Política de privacidad",
        
        avisoLegal: "Aviso legal",

        legalIntro:
        "Información relativa a las condiciones de uso, propiedad intelectual y protección de datos de Euskal Atlas.",

        titularWeb: "Titular del sitio web",

        titularWebTexto:
        "Euskal Atlas es un proyecto digital de investigación y divulgación dedicado al estudio, recopilación y difusión del patrimonio cultural y mitológico vasco mediante un atlas interactivo de acceso público.",

        finalidad: "Finalidad del sitio web",

        finalidadTexto:
        "El objetivo de Euskal Atlas es facilitar el acceso a información geográfica, bibliográfica y documental relacionada con la mitología vasca con fines divulgativos, educativos y de investigación. Los contenidos podrán ampliarse, actualizarse o corregirse conforme avance el proyecto.",

        propiedadIntelectual: "Propiedad intelectual",

        propiedadTexto:
        "Los textos, bases de datos, diseños, iconografía, mapas, desarrollos informáticos y demás contenidos originales de Euskal Atlas están protegidos por la legislación vigente sobre propiedad intelectual. Se permite su consulta y utilización con fines personales, educativos y de investigación, siempre que se cite adecuadamente la fuente. Queda prohibida su reproducción o utilización con fines comerciales sin autorización expresa.",

        fuentes: "Fuentes de información",

        fuentesTexto:
        "La información publicada procede de obras bibliográficas, investigaciones y documentación especializada. Siempre que es posible, las fuentes utilizadas se indican en las fichas correspondientes para facilitar su consulta y verificación.",

        responsabilidad: "Limitación de responsabilidad",

        responsabilidadTexto:
        "Euskal Atlas realiza un esfuerzo continuo para garantizar la calidad y exactitud de la información publicada. No obstante, no se garantiza la ausencia de errores u omisiones, por lo que los contenidos tienen carácter informativo y podrán modificarse o actualizarse sin previo aviso.",

        proteccionDatos: "Protección de datos",

        proteccionDatosTexto:
        "En la actualidad Euskal Atlas no solicita ni almacena datos personales de los visitantes mediante formularios de registro o contacto. Si en el futuro se incorporasen servicios que impliquen el tratamiento de datos personales, estos se gestionarán conforme al Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos - RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",

        contacto: "Contacto",

        provinciasTraducidas: {

            "Álava": "Álava",
            "Bizkaia": "Bizkaia",
            "Gipuzkoa": "Gipuzkoa",
            "Navarra": "Navarra",
            "Lapurdi": "Lapurdi",
            "Baja Navarra": "Baja Navarra",
            "Zuberoa": "Zuberoa"

        },
        mapaDistribucion: "Distribución geográfica",
        municipiosDocumentados: "Municipios con referencias documentadas.",

        imagenNumenAlt:"Ilustración de {nombre} según la tradición mitológica vasca",

        avisoActualizacionTitulo: "Proyecto en actualización continua",

        avisoActualizacionTexto:"EuskalAtlas es un proyecto en constante desarrollo. La información y las referencias documentales se amplían y revisan progresivamente. Si detectas algún error, omisión o información que deba corregirse, puedes escribirnos a euskalatlas@gmail.com.",
    
    },

    eu: {

        avisoActualizacionTitulo: "Proiektu etengabe eguneratzen",

        avisoActualizacionTexto:"EuskalAtlas etengabe garatzen ari den proiektua da. Informazioa eta erreferentzia dokumentalak pixkanaka zabaltzen eta berrikusten dira. Akatsen, hutsuneen edo zuzendu beharreko informazioren bat antzematen baduzu, idatzi euskalatlas@gmail.com helbidera.",

        provincias: "Probintziak",
        categorias: "Kategoriak",
        bibliografia: "Bibliografia",
        escala: "Referentziak",
        registros: "Erregistroak",
        municipios: "Udalerriak",
        seres: "Izaki mitologikoak",
        restablecer: "Filtroak berrezarri",
        subtitulo: "Euskal kultur ondarearen atlas digitala",

        btnProvincias: "Probintziak hautatu",
        btnCategorias: "Kategoriak hautatu",
        btnSeres: "Izaki mitologikoak hautatu",
        btnBibliografia: "Bibliografia hautatu",

        abrirMunicipio: "📄 Udalerriaren fitxa ireki",
        abrirSer: "✨ Izaki mitologikoaren fitxa ireki",

        infoFiltros: "Mapa eta emaitzen panela automatikoki eguneratzen dira hautatutako filtroen arabera.",

        ayudaMunicipios: "Aukeratu udalerri bat haren fitxa osoa ikusteko. Parentesi arteko zenbakiak dokumentatutako izaki mitologikoen kopurua adierazten du.",

        sinResultados: "⚠ Emaitzarik ez",
        sinResultadosTexto: "Ez da erregistrorik aurkitu hautatutako filtroekin.",

        modalProvincias: "Probintziak hautatu",
        modalCategorias: "Kategoriak hautatu",
        modalSeres: "Izaki mitologikoak hautatu",
        modalBibliografia: "Bibliografia hautatu",
        modalMunicipios: "Udalerria hautatu",
        modalFichaNumenes: "Izaki mitologikoa hautatu",

        seleccionarTodas: "Denak hautatu",
        deseleccionarTodas: "Hautapena kendu",
        aceptar: "Onartu",

        copyright: "© 2026 Euskal Atlas. Eskubide guztiak erreserbatuta.",

        buscarProvincia: "Bilatu probintzia...",
        buscarCategoria: "Bilatu kategoria...",
        buscarSer: "Bilatu izaki mitologikoak...",
        buscarBibliografia: "Bilatu bibliografia...",
        buscarMunicipio: "Bilatu udalerria...",
        buscarFichaNumen: "Bilatu izaki mitologikoa...",
        volver: "← Itzuli",
        volverMapa: "Hasiera-orria",
        catFemeninas: "Irudi mitologiko femeninoak",
        catMasculinas: "Irudi mitologiko maskulinoak",
        catZoomorfos: "Izaki zoomorfoak",
        catFenomenos: "Fenomeno eta agerpen naturalak",
        catOtras: "Beste izaki eta motibo mitologikoak",
        todasProvincias: "Probintzia guztiak",
        ningunaProvincia: "Probintziarik ez",
        unaProvincia: "Probintzia bakarra",
        variasProvincias: "probintzia",

        todasCategorias: "Kategoria guztiak",
        ningunaCategoria: "Kategoriarik ez",
        unaCategoria: "Kategoria bakarra",
        variasCategorias: "kategoria",

        todosNumenes: "Izaki mitologiko guztiak",
        ningunNumen: "Izakirik ez",
        unNumen: "Izaki mitologiko bakarra",
        variosNumenes: "izaki",

        todaBibliografia: "Bibliografia guztia",
        ningunaBibliografia: "Bibliografiarik ez",
        unaBibliografia: "Iturri bibliografiko bakarra",
        variasBibliografias: "Iturri bibliografiko",

        fichaMunicipio: "Udalerriaren fitxa",
        fichaSer: "Izaki mitologikoaren fitxa",
        abrirMunicipio: "Fitxa ireki",
        abrirSer: "Fitxa ireki",

        descripcionProvincias:
        "Hautatu probintzia bat edo gehiago mapa iragazteko.",

        descripcionCategorias:
        "Hautatu kategoria bat edo gehiago.",

        descripcionBibliografia:
        "Hautatu erreferentzia bibliografiko bat edo gehiago.",

        descripcionNumenes:
        "Hautatu izaki mitologiko bat edo gehiago.",

        descripcionMunicipios:
        "Hautatu udalerri bat haren fitxa osoa irekitzeko.",

        descripcionNumen:
        "Hautatu izaki mitologiko bat haren fitxa osoa irekitzeko.",
        
        footerDescripcion: "Euskal ondare mitologikoaren atlas interaktiboa.",

        contacto: "Kontaktua",

        metodologia: "Metodologia",

        avisoLegal: "Lege oharra",

        privacidad: "Pribatutasun politika",
        
        avisoLegal: "Lege-oharra",

        legalIntro:
        "Euskal Atlasen erabilera-baldintzei, jabetza intelektualari eta datu pertsonalen babesari buruzko informazioa.",
        
        titularWebTexto:
        "Euskal Atlas ikerketa- eta dibulgazio-proiektu digitala da, eta euskal kultura-ondarea eta mitologia aztertu, bildu eta zabaltzen ditu, sarbide publikoko atlas interaktibo baten bidez.",

        finalidadTexto:
        "Euskal Atlasen helburua euskal mitologiari buruzko informazio geografikoa, bibliografikoa eta dokumentala eskuragarri jartzea da, dibulgazio-, hezkuntza- eta ikerketa-helburuekin. Edukiak etengabe eguneratu, zabaldu edo zuzendu ahal izango dira proiektuak aurrera egin ahala.",

        propiedadTexto:
        "Euskal Atlaseko testuak, datu-baseak, diseinuak, ikonografia, mapak, garapen digitalak eta gainerako jatorrizko edukiak indarrean dagoen jabetza intelektualaren araudiak babesten ditu. Eduki horiek helburu pertsonal, hezitzaile edo ikerketakoetarako erabiltzea baimentzen da, betiere iturria behar bezala aipatuz. Debekatuta dago eduki horien erreprodukzioa edo erabilera komertziala, berariazko baimenik gabe.",

        fuentesTexto:
        "Argitaratutako informazioa bibliografia espezializatuan, ikerketetan eta dokumentazio-iturrietan oinarritzen da. Ahal den guztietan, erabilitako iturriak dagokion fitxan adierazten dira, kontsulta eta egiaztapena errazteko.",

        responsabilidadTexto:
        "Euskal Atlasek etengabeko ahalegina egiten du argitaratutako informazioa zehatza eta eguneratua izan dadin. Hala ere, ezin da bermatu akatsik edo omisiorik ez dagoela; horrenbestez, edukiak informazio-izaerakoak dira eta aldez aurretik jakinarazi gabe eguneratu edo aldatu ahal izango dira.",

        proteccionDatosTexto:
        "Gaur egun Euskal Atlasek ez du bisitarien datu pertsonalik biltzen edo gordetzen erregistro edo harremanetarako formularioen bidez. Etorkizunean datu pertsonalen tratamendua eskatzen duten zerbitzuak gehitzen badira, tratamendu hori Europako Parlamentuaren eta Kontseiluaren 2016/679 (EB) Erregelamendu Orokorraren (DBEO) eta Datu Pertsonalak Babesteko eta Eskubide Digitalak Bermatzeko 3/2018 Lege Organikoaren arabera egingo da.",
        contacto: "Kontaktua",

        provinciasTraducidas: {

            "Álava": "Araba",
            "Bizkaia": "Bizkaia",
            "Gipuzkoa": "Gipuzkoa",
            "Navarra": "Nafarroa",
            "Lapurdi": "Lapurdi",
            "Baja Navarra": "Nafarroa Beherea",
            "Zuberoa": "Zuberoa"

        },

        mapaDistribucion: "Banaketa geografikoa",
        municipiosDocumentados: "Erreferentzia dokumentatuak dituzten udalerriak.",

        imagenNumenAlt:"{nombre} euskal mitologiaren araberako ilustrazioa"
    }
};
const interfaz = {

    es: {

        // Númenes
        descripcion: "Descripción",
        presencia: "Presencia geográfica",
        bibliografia: "Bibliografía",
        escala: "Referencias",

        // Tarjetas
        municipio: "Municipio",
        municipios: "Municipios",

        serMitologico: "Ser mitológico",
        seresMitologicos: "Seres mitológicos",

        fuente: "Fuente",
        fuentes: "Fuentes",

        copyright: "© 2026 Euskal Atlas. Todos los derechos reservados.",

        // Textos
        seleccionarMunicipio:
            "Selecciona cualquier municipio para acceder a su ficha completa.",

        seleccionarSer:
            "Selecciona cualquier ser mitológico para acceder a su ficha completa.",

        seresDocumentados:
            "Seres mitológicos documentados",

        // Errores
        numenNoEncontrado:
            "Ser mitológico no encontrado",

        sinReferencias:
            "Sin referencias documentadas",

        sinReferenciasTexto1:
            "Actualmente no se han documentado referencias mitológicas para este municipio en Euskal Atlas.",

        sinReferenciasTexto2:
            "Esta ficha podrá ampliarse en futuras actualizaciones a medida que se incorporen nuevas investigaciones y fuentes.",

        // Navegación
        volver: "← Volver",
        volverMapa: "Página de inicio",

        volverAria: "Volver a la página anterior",
        volverMapaAria: "Volver al mapa principal",
        verFicha: "Ver ficha completa",
        sinInformacionCategoria: "No hay información para esta categoría.",
        catFemeninas: "Figuras mitológicas femeninas",
        catMasculinas: "Figuras mitológicas masculinas",
        catZoomorfos: "Seres zoomorfos",
        catFenomenos: "Fenómenos y manifestaciones naturales",
        catOtras: "Otras entidades y motivos mitológicos",
        todasProvincias: "Todas las provincias",
        ningunaProvincia: "Ninguna provincia",
        unaProvincia: "1 provincia",
        variasProvincias: "provincias",

        todasCategorias: "Todas las categorías",
        ningunaCategoria: "Ninguna categoría",
        unaCategoria: "1 categoría",
        variasCategorias: "categorías",

        todosNumenes: "Todos los seres",
        ningunNumen: "Ningún ser",
        unNumen: "1 ser",
        variosNumenes: "seres",

        todaBibliografia: "Toda la bibliografía",
        ningunaBibliografia: "Ninguna bibliografía",
        unaBibliografia: "1 fuente",
        variasBibliografias: "fuentes",

        fichaMunicipio: "Ficha de municipio",
        fichaSer: "Ficha de ser mitológico",
        abrirMunicipio: "Abrir una ficha",
        abrirSer: "Abrir una ficha",

        modalProvincias: "Seleccionar provincias",
        modalCategorias: "Seleccionar categorías",
        modalSeres: "Seleccionar seres mitológicos",
        modalBibliografia: "Seleccionar bibliografía",
        modalMunicipios: "Abrir ficha de municipio",
        modalFichaNumenes: "Seleccionar ser mitológico",

        mapaDistribucion: "Distribución geográfica",
        municipiosDocumentados: "Municipios con referencias documentadas.",

        mapaNumenAria:"Mapa de distribución geográfica de {nombre}. Se han documentado referencias en {cantidad} municipios. Los municipios resaltados indican las localidades donde existen referencias documentadas de este ser mitológico.",
    
        zoomMas: "Acercar",
        zoomMenos: "Alejar",
        centrarMapa: "Centrar mapa",
        leyendaMapaAria:"Escala de colores del mapa. Cuanto más oscuro es el color, mayor es el número de seres mitológicos registrados en cada municipio.",
    
        imagenNumenAlt:"Ilustración de {nombre} según la tradición mitológica vasca",
        navegacionFicha: "Navegación de la ficha"
    },

    eu: {

        // Númenes
        descripcion: "Deskribapena",
        presencia: "Presentzia geografikoa",
        bibliografia: "Bibliografia",
        escala: "Referentziak",   

        // Tarjetas
        municipio: "Udalerria",
        municipios: "Udalerriak",

        serMitologico: "Izaki mitologikoa",
        seresMitologicos: "Izaki mitologikoak",

        fuente: "Iturri bibliografikoa",
        fuentes: "Iturri bibliografikoak",

        copyright: "© 2026 Euskal Atlas. Eskubide guztiak erreserbatuta.",

        // Textos
        seleccionarMunicipio:
        "Aukeratu udalerri bat haren fitxa osoa ikusteko.",

        seleccionarSer:
        "Aukeratu izaki mitologiko bat haren fitxa osoa ikusteko.",

        seresDocumentados:
            "Dokumentatutako izaki mitologikoak",

        // Errores
        numenNoEncontrado:
            "Ez da izaki mitologikoa aurkitu",

        sinReferencias:
            "Ez dago dokumentatutako erreferentziarik",

        sinReferenciasTexto1:
            "Une honetan ez dago udalerri honetarako dokumentatutako erreferentzia mitologikorik Euskal Atlasen.",

        sinReferenciasTexto2:
            "Fitxa hau etorkizuneko eguneraketetan osatuko da, ikerketa eta iturri berriak gehitu ahala.",

        // Navegación
        volver: "← Itzuli",
        volverMapa: "Hasiera-orria",
        volverAria: "Aurreko orrialdera itzuli",
        volverMapaAria: "Mapa nagusira itzuli",
        verFicha: "Fitxa osoa ikusi",
        navegacionFicha: "Fitxaren nabigazioa",
        sinInformacionCategoria: "Ez dago informaziorik kategoria honetarako.",
        catFemeninas: "Irudi mitologiko femeninoak",
        catMasculinas: "Irudi mitologiko maskulinoak",
        catZoomorfos: "Izaki zoomorfoak",
        catFenomenos: "Fenomeno eta agerpen naturalak",
        catOtras: "Beste izaki eta motibo mitologikoak",
        todasProvincias: "Probintzia guztiak",
        ningunaProvincia: "Probintziarik ez",
        unaProvincia: "Probintzia 1",
        variasProvincias: "probintzia",

        todasCategorias: "Kategoria guztiak",
        ningunaCategoria: "Kategoriarik ez",
        unaCategoria: "Kategoria 1",
        variasCategorias: "kategoria",

        todosNumenes: "Izaki guztiak",
        ningunNumen: "Izakirik ez",
        unNumen: "Izaki mitologiko bakarra",
        variosNumenes: "izaki",

        todaBibliografia: "Bibliografia guztia",
        ningunaBibliografia: "Bibliografiarik ez",
        unaBibliografia: "Iturri bibliografiko bakarra",
        variasBibliografias: "Iturri bibliografiko",

        fichaMunicipio: "Udalerriaren fitxa",
        fichaSer: "Izaki mitologikoaren fitxa",
        abrirMunicipio: "Fitxa ireki",
        abrirSer: "Fitxa ireki",

        modalProvincias: "Probintziak hautatu",
        modalCategorias: "Kategoriak hautatu",
        modalSeres: "Izaki mitologikoak hautatu",
        modalBibliografia: "Bibliografia hautatu",
        modalMunicipios: "Udalerria hautatu",
        modalFichaNumenes: "Izaki mitologikoa hautatu",

        mapaDistribucion: "Banaketa geografikoa",
        municipiosDocumentados: "Erreferentzia dokumentatuak dituzten udalerriak.",
        
        catFemeninas: "Irudi mitologiko femeninoak",
        catMasculinas: "Irudi mitologiko maskulinoak",
        catZoomorfos: "Izaki zoomorfoak",
        catFenomenos: "Fenomeno eta agerpen naturalak",
        catOtras: "Beste izaki eta motibo mitologikoak",
    
        mapaNumenAria:"{nombre} izaki mitologikoaren banaketa geografikoaren mapa. Erreferentziak {cantidad} udalerritan dokumentatu dira. Nabarmendutako udalerriek izaki mitologiko honen erreferentzia dokumentatuak dituzten tokiak adierazten dituzte.",
        zoomMas: "Handitu",
        zoomMenos: "Txikitu",
        centrarMapa: "Mapa erdiratu",
        leyendaMapaAria:"Maparen kolore-eskala. Kolorea zenbat eta ilunagoa izan, orduan eta izaki mitologiko gehiago dokumentatu dira udalerri horretan.",
    
        imagenNumenAlt:"{nombre} euskal mitologiaren araberako ilustrazioa"

    }

};

const btnES = document.getElementById("btnES");
const btnEU = document.getElementById("btnEU");

function traducirCategoria(categoria) {

    const traducciones = {

        "Figuras mitológicas femeninas": textos[idioma].catFemeninas,
        "Figuras mitológicas masculinas": textos[idioma].catMasculinas,
        "Seres zoomorfos": textos[idioma].catZoomorfos,
        "Fenómenos y manifestaciones naturales": textos[idioma].catFenomenos,
        "Otras entidades y motivos mitológicos": textos[idioma].catOtras

    };

    return traducciones[categoria] || categoria;

}

function aplicarIdioma() {

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.dataset.i18n;

        if (textos[idioma][clave]) {
            elemento.textContent = textos[idioma][clave];
        }

    });

    document.querySelectorAll("[data-placeholder]").forEach(elemento => {

        const clave = elemento.dataset.placeholder;

        if (textos[idioma][clave]) {
            elemento.placeholder = textos[idioma][clave];
        }

    });

}

if (btnES && btnEU) {

    function actualizarBotones() {

        btnES.classList.toggle("activo", idioma === "es");
        btnEU.classList.toggle("activo", idioma === "eu");

    }

    btnES.addEventListener("click", () => {

        idioma = "es";
        localStorage.setItem("idioma", idioma);
        

        actualizarBotones();
        aplicarIdioma();
        actualizarMapa();
        actualizarTextosMapa();

    });

    btnEU.addEventListener("click", () => {

        idioma = "eu";
        localStorage.setItem("idioma", idioma);
        
        actualizarBotones();
        aplicarIdioma();
        actualizarMapa();
        actualizarTextosMapa();

    });

    actualizarBotones();

}
document.addEventListener("DOMContentLoaded", function () {

    aplicarIdioma();

    if (typeof actualizarTextosMapa === "function") {
        actualizarTextosMapa();
    }

});