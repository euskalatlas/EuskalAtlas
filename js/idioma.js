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
        municipios: "Udalerri",
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
    },    en: {

        provincias: "Provinces",
        categorias: "Categories",
        bibliografia: "Bibliography",
        escala: "References",
        registros: "Records",
        municipios: "Towns",
        seres: "Mythological beings",
        restablecer: "Reset filters",
        subtitulo: "Digital atlas of Basque cultural heritage",

        btnProvincias: "Select provinces",
        btnCategorias: "Select categories",
        btnSeres: "Select mythological beings",
        btnBibliografia: "Select bibliography",

        abrirMunicipio: "📄 Open town profile",
        abrirSer: "✨ Open mythological being profile",

        infoFiltros: "The map and results panel are automatically updated according to the selected filters.",

        ayudaMunicipios: "Click on a town to view it in detail. The number in parentheses indicates the documented mythological beings.",

        sinResultados: "⚠ No results",
        sinResultadosTexto: "No records were found with the selected filters.",

        modalProvincias: "Select provinces",
        modalCategorias: "Select categories",
        modalSeres: "Select mythological beings",
        modalBibliografia: "Select bibliography",
        modalMunicipios: "Open town profile",
        modalFichaNumenes: "Select mythological being",

        seleccionarTodas: "Select all",
        deseleccionarTodas: "Deselect all",
        aceptar: "Accept",

        copyright: "© 2026 Euskal Atlas. All rights reserved.",

        buscarProvincia: "Search province...",
        buscarCategoria: "Search category...",
        buscarSer: "Search mythological beings...",
        buscarBibliografia: "Search bibliography...",
        buscarMunicipio: "Search town...",
        buscarFichaNumen: "Search mythological being...",
        volver: "← Back",
        volverMapa: "Home",

        catFemeninas: "Female mythological figures",
        catMasculinas: "Male mythological figures",
        catZoomorfos: "Zoomorphic beings",
        catFenomenos: "Natural phenomena and manifestations",
        catOtras: "Other mythological entities and motifs",

        todasProvincias: "All provinces",
        ningunaProvincia: "No province",
        unaProvincia: "1 province",
        variasProvincias: "provinces",

        todasCategorias: "All categories",
        ningunaCategoria: "No category",
        unaCategoria: "1 category",
        variasCategorias: "categories",

        todosNumenes: "All beings",
        ningunNumen: "No being",
        unNumen: "1 being",
        variosNumenes: "beings",

        todaBibliografia: "All bibliography",
        ningunaBibliografia: "No bibliography",
        unaBibliografia: "1 source",
        variasBibliografias: "sources",

        fichaMunicipio: "Town profile",
        fichaSer: "Mythological being profile",
        abrirMunicipio: "Open a profile",
        abrirSer: "Open a profile",

        descripcionProvincias: "Choose one or more provinces to filter the map.",
        descripcionCategorias: "Select one or more categories.",
        descripcionBibliografia: "Select one or more bibliographic references.",
        descripcionNumenes: "Select one or more mythological beings.",
        descripcionNumen: "Select a mythological being to open its complete profile.",
        descripcionMunicipios: "Select a town to open its complete profile.",

        footerDescripcion: "Interactive atlas of Basque mythological heritage.",

        contacto: "Contact",
        metodologia: "Methodology",
        avisoLegal: "Legal notice",
        privacidad: "Privacy policy",

        legalIntro:
        "Information about the terms of use, intellectual property and data protection of Euskal Atlas.",

        titularWeb: "Website owner",

        titularWebTexto:
        "Euskal Atlas is a digital research and outreach project dedicated to the study, collection and dissemination of Basque cultural and mythological heritage through a publicly accessible interactive atlas.",

        finalidad: "Purpose of the website",

        finalidadTexto:
        "The aim of Euskal Atlas is to provide access to geographical, bibliographic and documentary information related to Basque mythology for outreach, educational and research purposes. The contents may be expanded, updated or corrected as the project progresses.",

        propiedadIntelectual: "Intellectual property",

        propiedadTexto:
        "The texts, databases, designs, iconography, maps, software developments and other original contents of Euskal Atlas are protected by applicable intellectual property legislation. Their consultation and use for personal, educational and research purposes is permitted, provided that the source is properly cited. Reproduction or commercial use without express authorization is prohibited.",

        fuentes: "Information sources",

        fuentesTexto:
        "The published information comes from bibliographic works, research and specialized documentation. Whenever possible, the sources used are indicated in the corresponding profiles to facilitate consultation and verification.",

        responsabilidad: "Limitation of liability",

        responsabilidadTexto:
        "Euskal Atlas makes continuous efforts to ensure the quality and accuracy of the published information. However, the absence of errors or omissions cannot be guaranteed; the contents are therefore for informational purposes and may be modified or updated without prior notice.",

        proteccionDatos: "Data protection",

        proteccionDatosTexto:
        "At present, Euskal Atlas does not request or store visitors' personal data through registration or contact forms. If services involving the processing of personal data are introduced in the future, they will be managed in accordance with Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR) and Organic Law 3/2018 on the Protection of Personal Data and Guarantee of Digital Rights.",

        provinciasTraducidas: {

            "Álava": "Álava",
            "Bizkaia": "Bizkaia",
            "Gipuzkoa": "Gipuzkoa",
            "Navarra": "Navarre",
            "Lapurdi": "Lapurdi",
            "Baja Navarra": "Lower Navarre",
            "Zuberoa": "Soule"

        },

        mapaDistribucion: "Geographical distribution",
        municipiosDocumentados: "towns with documented references.",

        imagenNumenAlt:
        "Illustration of {nombre} according to Basque mythological tradition",

        avisoActualizacionTitulo:
        "Project under continuous development",

        avisoActualizacionTexto:
        "EuskalAtlas is a project in continuous development. Information and documentary references are progressively expanded and reviewed. If you detect an error, omission or information that should be corrected, you can contact us at euskalatlas@gmail.com."

    },    fr: {

        provincias: "Provinces",
        categorias: "Catégories",
        bibliografia: "Bibliographie",
        escala: "Références",
        registros: "Enregistrements",
        municipios: "Communes",
        seres: "Êtres mythologiques",
        restablecer: "Réinitialiser les filtres",
        subtitulo: "Atlas numérique du patrimoine culturel basque",

        btnProvincias: "Sélectionner les provinces",
        btnCategorias: "Sélectionner les catégories",
        btnSeres: "Sélectionner les êtres mythologiques",
        btnBibliografia: "Sélectionner la bibliographie",

        abrirMunicipio: "📄 Ouvrir la fiche de la commune",
        abrirSer: "✨ Ouvrir la fiche de l'être mythologique",

        infoFiltros: "La carte et le panneau de résultats sont automatiquement mis à jour selon les filtres sélectionnés.",

        ayudaMunicipios: "Cliquez sur une commune pour voir sa fiche détaillée. Le nombre entre parenthèses indique les êtres mythologiques documentés.",

        sinResultados: "⚠ Aucun résultat",
        sinResultadosTexto: "Aucun enregistrement ne correspond aux filtres sélectionnés.",

        modalProvincias: "Sélectionner les provinces",
        modalCategorias: "Sélectionner les catégories",
        modalSeres: "Sélectionner les êtres mythologiques",
        modalBibliografia: "Sélectionner la bibliographie",
        modalMunicipios: "Ouvrir la fiche de la commune",
        modalFichaNumenes: "Sélectionner un être mythologique",

        seleccionarTodas: "Tout sélectionner",
        deseleccionarTodas: "Tout désélectionner",
        aceptar: "Accepter",

        copyright: "© 2026 Euskal Atlas. Tous droits réservés.",

        buscarProvincia: "Rechercher une province...",
        buscarCategoria: "Rechercher une catégorie...",
        buscarSer: "Rechercher des êtres mythologiques...",
        buscarBibliografia: "Rechercher dans la bibliographie...",
        buscarMunicipio: "Rechercher une commune...",
        buscarFichaNumen: "Rechercher un être mythologique...",

        volver: "← Retour",
        volverMapa: "Accueil",

        catFemeninas: "Figures mythologiques féminines",
        catMasculinas: "Figures mythologiques masculines",
        catZoomorfos: "Êtres zoomorphes",
        catFenomenos: "Phénomènes et manifestations naturels",
        catOtras: "Autres entités et motifs mythologiques",

        todasProvincias: "Toutes les provinces",
        ningunaProvincia: "Aucune province",
        unaProvincia: "1 province",
        variasProvincias: "provinces",

        todasCategorias: "Toutes les catégories",
        ningunaCategoria: "Aucune catégorie",
        unaCategoria: "1 catégorie",
        variasCategorias: "catégories",

        todosNumenes: "Tous les êtres",
        ningunNumen: "Aucun être",
        unNumen: "1 être",
        variosNumenes: "êtres",

        todaBibliografia: "Toute la bibliographie",
        ningunaBibliografia: "Aucune bibliographie",
        unaBibliografia: "1 source",
        variasBibliografias: "sources",

        fichaMunicipio: "Fiche de la commune",
        fichaSer: "Fiche de l'être mythologique",
        abrirMunicipio: "Ouvrir une fiche",
        abrirSer: "Ouvrir une fiche",

        descripcionProvincias: "Choisissez une ou plusieurs provinces pour filtrer la carte.",
        descripcionCategorias: "Sélectionnez une ou plusieurs catégories.",
        descripcionBibliografia: "Sélectionnez une ou plusieurs références bibliographiques.",
        descripcionNumenes: "Sélectionnez un ou plusieurs êtres mythologiques.",
        descripcionNumen: "Sélectionnez un être mythologique pour ouvrir sa fiche complète.",
        descripcionMunicipios: "Sélectionnez une commune pour ouvrir sa fiche complète.",

        footerDescripcion: "Atlas interactif du patrimoine mythologique basque.",

        contacto: "Contact",
        metodologia: "Méthodologie",
        avisoLegal: "Mentions légales",
        privacidad: "Politique de confidentialité",

        legalIntro:
        "Informations relatives aux conditions d'utilisation, à la propriété intellectuelle et à la protection des données d'Euskal Atlas.",

        titularWeb: "Propriétaire du site",

        titularWebTexto:
        "Euskal Atlas est un projet numérique de recherche et de diffusion consacré à l'étude, à la collecte et à la diffusion du patrimoine culturel et mythologique basque au moyen d'un atlas interactif accessible au public.",

        finalidad: "Finalité du site",

        finalidadTexto:
        "L'objectif d'Euskal Atlas est de faciliter l'accès aux informations géographiques, bibliographiques et documentaires relatives à la mythologie basque à des fins de diffusion, d'éducation et de recherche. Les contenus pourront être complétés, mis à jour ou corrigés au fur et à mesure de l'avancement du projet.",

        propiedadIntelectual: "Propriété intellectuelle",

        propiedadTexto:
        "Les textes, bases de données, designs, éléments iconographiques, cartes, développements informatiques et autres contenus originaux d'Euskal Atlas sont protégés par la législation en vigueur sur la propriété intellectuelle. Leur consultation et leur utilisation à des fins personnelles, éducatives et de recherche sont autorisées, à condition de citer correctement la source. Toute reproduction ou utilisation commerciale sans autorisation expresse est interdite.",

        fuentes: "Sources d'information",

        fuentesTexto:
        "Les informations publiées proviennent d'ouvrages bibliographiques, de recherches et de documentation spécialisée. Dans la mesure du possible, les sources utilisées sont indiquées dans les fiches correspondantes afin de faciliter leur consultation et leur vérification.",

        responsabilidad: "Limitation de responsabilité",

        responsabilidadTexto:
        "Euskal Atlas s'efforce en permanence de garantir la qualité et l'exactitude des informations publiées. Toutefois, l'absence d'erreurs ou d'omissions ne peut être garantie ; les contenus sont donc fournis à titre informatif et peuvent être modifiés ou mis à jour sans préavis.",

        proteccionDatos: "Protection des données",

        proteccionDatosTexto:
        "Actuellement, Euskal Atlas ne demande ni ne stocke de données personnelles des visiteurs au moyen de formulaires d'inscription ou de contact. Si des services impliquant le traitement de données personnelles sont ajoutés à l'avenir, ceux-ci seront gérés conformément au règlement (UE) 2016/679 (Règlement général sur la protection des données - RGPD) et à la loi organique 3/2018 relative à la protection des données personnelles et à la garantie des droits numériques.",

        provinciasTraducidas: {

            "Álava": "Álava",
            "Bizkaia": "Bizkaia",
            "Gipuzkoa": "Guipuscoa",
            "Navarra": "Navarre",
            "Lapurdi": "Labourd",
            "Baja Navarra": "Basse-Navarre",
            "Zuberoa": "Soule"

        },

        mapaDistribucion: "Distribution géographique",
        municipiosDocumentados: "Communes avec des références documentées.",

        imagenNumenAlt:
        "Illustration de {nombre} selon la tradition mythologique basque",

        avisoActualizacionTitulo:
        "Projet en mise à jour continue",

        avisoActualizacionTexto:
        "EuskalAtlas est un projet en développement continu. Les informations et les références documentaires sont progressivement complétées et révisées. Si vous détectez une erreur, une omission ou une information à corriger, vous pouvez nous écrire à euskalatlas@gmail.com."

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
        municipios: "Udalerri",

        serMitologico: "Izaki mitologiko",
        seresMitologicos: "Izaki mitologiko",

        fuente: "Iturri bibliografikoa",
        fuentes: "Iturri bibliografikoak",

        copyright: "© 2026 Euskal Atlas. Eskubide guztiak erreserbatuta.",

        // Textos
        seleccionarMunicipio:
        "Aukeratu udalerri bat haren fitxa osoa ikusteko.",

        seleccionarSer:
        "Aukeratu izaki mitologiko bat haren fitxa osoa ikusteko.",

        seresDocumentados:
            "Dokumentatutako izaki mitologiko",

        // Errores
        numenNoEncontrado:
            "Ez da izaki mitologikorik aurkitu",

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

    },    en: {

        descripcion: "Description",
        presencia: "Geographical presence",
        bibliografia: "Bibliography",
        escala: "References",

        municipio: "town",
        municipios: "towns",

        serMitologico: "Mythological being",
        seresMitologicos: "Mythological beings",

        fuente: "Source",
        fuentes: "Sources",

        copyright: "© 2026 Euskal Atlas. All rights reserved.",

        seleccionarMunicipio:
            "Select any town to access its complete profile.",

        seleccionarSer:
            "Select any mythological being to access its complete profile.",

        seresDocumentados:
            "Documented mythological beings",

        numenNoEncontrado:
            "Mythological being not found",

        sinReferencias:
            "No documented references",

        sinReferenciasTexto1:
            "There are currently no documented mythological references for this town in Euskal Atlas.",

        sinReferenciasTexto2:
            "This profile may be expanded in future updates as new research and sources are incorporated.",

        volver: "← Back",
        volverMapa: "Home",

        volverAria: "Go back to the previous page",
        volverMapaAria: "Return to the main map",
        verFicha: "View complete profile",

        navegacionFicha: "Profile navigation",

        sinInformacionCategoria:
            "There is no information for this category.",

        catFemeninas: "Female mythological figures",
        catMasculinas: "Male mythological figures",
        catZoomorfos: "Zoomorphic beings",
        catFenomenos: "Natural phenomena and manifestations",
        catOtras: "Other mythological entities and motifs",

        todasProvincias: "All provinces",
        ningunaProvincia: "No province",
        unaProvincia: "1 province",
        variasProvincias: "provinces",

        todasCategorias: "All categories",
        ningunaCategoria: "No category",
        unaCategoria: "1 category",
        variasCategorias: "categories",

        todosNumenes: "All beings",
        ningunNumen: "No being",
        unNumen: "1 being",
        variosNumenes: "beings",

        todaBibliografia: "All bibliography",
        ningunaBibliografia: "No bibliography",
        unaBibliografia: "1 source",
        variasBibliografias: "sources",

        fichaMunicipio: "town profile",
        fichaSer: "Mythological being profile",
        abrirMunicipio: "Open a profile",
        abrirSer: "Open a profile",

        modalProvincias: "Select provinces",
        modalCategorias: "Select categories",
        modalSeres: "Select mythological beings",
        modalBibliografia: "Select bibliography",
        modalMunicipios: "Open town profile",
        modalFichaNumenes: "Select mythological being",

        mapaDistribucion: "Geographical distribution",

        municipiosDocumentados:
            "towns with documented references.",

        mapaNumenAria:
            "Geographical distribution map of {nombre}. References have been documented in {cantidad} towns. Highlighted towns indicate locations where documented references to this mythological being exist.",

        zoomMas: "Zoom in",
        zoomMenos: "Zoom out",
        centrarMapa: "Center map",

        leyendaMapaAria:
            "Map colour scale. The darker the colour, the greater the number of mythological beings recorded in each town.",

        imagenNumenAlt:
            "Illustration of {nombre} according to Basque mythological tradition"

    },
        fr: {

        descripcion: "Description",
        presencia: "Présence géographique",
        bibliografia: "Bibliographie",
        escala: "Références",

        municipio: "Commune",
        municipios: "Communes",

        serMitologico: "Être mythologique",
        seresMitologicos: "Êtres mythologiques",

        fuente: "Source",
        fuentes: "Sources",

        copyright: "© 2026 Euskal Atlas. Tous droits réservés.",

        seleccionarMunicipio:
            "Sélectionnez une commune pour accéder à sa fiche complète.",

        seleccionarSer:
            "Sélectionnez un être mythologique pour accéder à sa fiche complète.",

        seresDocumentados:
            "Êtres mythologiques documentés",

        numenNoEncontrado:
            "Être mythologique introuvable",

        sinReferencias:
            "Aucune référence documentée",

        sinReferenciasTexto1:
            "Aucune référence mythologique documentée n'est actuellement disponible pour cette commune dans Euskal Atlas.",

        sinReferenciasTexto2:
            "Cette fiche pourra être complétée lors de futures mises à jour au fur et à mesure de l'intégration de nouvelles recherches et sources.",

        volver: "← Retour",
        volverMapa: "Accueil",

        volverAria:
            "Retourner à la page précédente",

        volverMapaAria:
            "Retourner à la carte principale",

        verFicha:
            "Voir la fiche complète",

        navegacionFicha:
            "Navigation de la fiche",

        sinInformacionCategoria:
            "Aucune information pour cette catégorie.",

        catFemeninas:
            "Figures mythologiques féminines",

        catMasculinas:
            "Figures mythologiques masculines",

        catZoomorfos:
            "Êtres zoomorphes",

        catFenomenos:
            "Phénomènes et manifestations naturels",

        catOtras:
            "Autres entités et motifs mythologiques",

        todasProvincias:
            "Toutes les provinces",

        ningunaProvincia:
            "Aucune province",

        unaProvincia:
            "1 province",

        variasProvincias:
            "provinces",

        todasCategorias:
            "Toutes les catégories",

        ningunaCategoria:
            "Aucune catégorie",

        unaCategoria:
            "1 catégorie",

        variasCategorias:
            "catégories",

        todosNumenes:
            "Tous les êtres",

        ningunNumen:
            "Aucun être",

        unNumen:
            "1 être",

        variosNumenes:
            "êtres",

        todaBibliografia:
            "Toute la bibliographie",

        ningunaBibliografia:
            "Aucune bibliographie",

        unaBibliografia:
            "1 source",

        variasBibliografias:
            "sources",

        fichaMunicipio:
            "Fiche de la commune",

        fichaSer:
            "Fiche de l'être mythologique",

        abrirMunicipio:
            "Ouvrir une fiche",

        abrirSer:
            "Ouvrir une fiche",

        modalProvincias:
            "Sélectionner les provinces",

        modalCategorias:
            "Sélectionner les catégories",

        modalSeres:
            "Sélectionner les êtres mythologiques",

        modalBibliografia:
            "Sélectionner la bibliographie",

        modalMunicipios:
            "Ouvrir la fiche de la commune",

        modalFichaNumenes:
            "Sélectionner un être mythologique",

        mapaDistribucion:
            "Distribution géographique",

        municipiosDocumentados:
            "Communes avec des références documentées.",

        mapaNumenAria:
            "Carte de distribution géographique de {nombre}. Des références ont été documentées dans {cantidad} communes. Les communes mises en évidence indiquent les localités où des références documentées à cet être mythologique existent.",

        zoomMas:
            "Zoom avant",

        zoomMenos:
            "Zoom arrière",

        centrarMapa:
            "Centrer la carte",

        leyendaMapaAria:
            "Échelle de couleurs de la carte. Plus la couleur est foncée, plus le nombre d'êtres mythologiques enregistrés dans chaque commune est élevé.",

        imagenNumenAlt:
            "Illustration de {nombre} selon la tradition mythologique basque"

    }

};

const btnES = document.getElementById("btnES");
const btnEU = document.getElementById("btnEU");
const btnEN = document.getElementById("btnEN");
const btnFR = document.getElementById("btnFR");

function actualizarBotones() {

    if (btnES) {
        btnES.classList.toggle("activo", idioma === "es");
    }

    if (btnEU) {
        btnEU.classList.toggle("activo", idioma === "eu");
    }

    if (btnEN) {
        btnEN.classList.toggle("activo", idioma === "en");
    }

    if (btnFR) {
        btnFR.classList.toggle("activo", idioma === "fr");
    }

}

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

function cambiarIdioma(nuevoIdioma) {

    idioma = nuevoIdioma;
    localStorage.setItem("idioma", idioma);

    actualizarBotones();
    aplicarIdioma();

    // Actualizar ficha de ser mitológico
    if (typeof cargarNumen === "function") {
        cargarNumen();
    }

    // Actualizar ficha de municipio
    if (typeof cargarMunicipio === "function") {
        cargarMunicipio();
    }

    // Actualizar elementos del mapa
    if (typeof actualizarMapa === "function") {
        actualizarMapa();
    }

    if (typeof actualizarTextosMapa === "function") {
        actualizarTextosMapa();
    }

}


if (btnES) {
    btnES.addEventListener("click", () => {
        cambiarIdioma("es");
    });
}

if (btnEU) {
    btnEU.addEventListener("click", () => {
        cambiarIdioma("eu");
    });
}

if (btnEN) {
    btnEN.addEventListener("click", () => {
        cambiarIdioma("en");
    });
}

if (btnFR) {
    btnFR.addEventListener("click", () => {
        cambiarIdioma("fr");
    });
}

actualizarBotones();

document.addEventListener("DOMContentLoaded", function () {

    aplicarIdioma();

    if (typeof actualizarTextosMapa === "function") {
        actualizarTextosMapa();
    }

});