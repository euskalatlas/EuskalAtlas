const btnContraste = document.getElementById("btnContraste");
const btnTexto = document.getElementById("btnTexto");
    // =============================
// AVISOS PARA LECTORES DE PANTALLA
// =============================

const avisoAccesibilidad = document.createElement("div");

avisoAccesibilidad.setAttribute("role", "status");
avisoAccesibilidad.setAttribute("aria-live", "assertive");
avisoAccesibilidad.setAttribute("aria-atomic", "true");
avisoAccesibilidad.className = "sr-only";

document.body.appendChild(avisoAccesibilidad);

// =============================
// CARGAR PREFERENCIAS
// =============================

if (localStorage.getItem("contraste") === "on") {

    document.body.classList.add("alto-contraste");

    if (btnContraste && typeof textos !== "undefined") {
        btnContraste.classList.add("activo");

        btnContraste.setAttribute(
            "aria-label",
            textos[idioma].desactivarContraste
        );
    }


} else {

    if (btnContraste && typeof textos !== "undefined") {

        btnContraste.setAttribute(
            "aria-label",
            textos[idioma].activarContraste
        );

    }

}

if (localStorage.getItem("texto") === "on") {

    document.body.classList.add("texto-grande");

    if (btnTexto && typeof textos !== "undefined") {
        btnTexto.classList.add("activo");

        btnTexto.setAttribute(
            "aria-label",
            textos[idioma].restablecerTexto
        );
    }

}


/// =============================
// BOTÓN CONTRASTE
// =============================

if (btnContraste) {

    btnContraste.addEventListener("click", () => {

        btnContraste.classList.toggle("activo");

        document.body.classList.toggle("alto-contraste");

        if (document.body.classList.contains("alto-contraste")) {

            localStorage.setItem("contraste", "on");

            btnContraste.setAttribute(
                "aria-label",
                textos[idioma].desactivarContraste
            );

            avisoAccesibilidad.textContent = "";

            setTimeout(() => {
                avisoAccesibilidad.textContent =
                    textos[idioma].contrasteActivado;
            }, 50);

        } else {

            localStorage.removeItem("contraste");

            btnContraste.setAttribute(
                "aria-label",
                textos[idioma].activarContraste
            );

            avisoAccesibilidad.textContent = "";

            setTimeout(() => {
                avisoAccesibilidad.textContent =
                    textos[idioma].contrasteDesactivado;
            }, 50);

        }

    });

}
// =============================
// BOTÓN TEXTO
// =============================

if (btnTexto) {

    btnTexto.addEventListener("click", () => {

        btnTexto.classList.toggle("activo");

        const textoGrande = btnTexto.classList.contains("activo");

        if (textoGrande) {

            document.body.classList.add("texto-grande");

            localStorage.setItem("texto", "on");

            if (btnTexto && typeof textos !== "undefined") {
                btnTexto.setAttribute(
                    "aria-label",
                    textos[idioma].restablecerTexto
                );
            }

        } else {

            document.body.classList.remove("texto-grande");

            localStorage.removeItem("texto");

            if (btnTexto && typeof textos !== "undefined") {
                btnTexto.setAttribute(
                    "aria-label",
                    textos[idioma].aumentarTexto
                );
            }

        }

    });

}

// =============================
// ACCESIBILIDAD DE LOS FILTROS
// =============================
// Las tarjetas siguen siendo <div> para conservar exactamente
// el diseño visual, pero se comportan como controles accesibles.

const filtrosAccesibles = [
    {
        boton: "abrirProvincias",
        modal: "modalProvincias"
    },
    {
        boton: "abrirCategorias",
        modal: "modalCategorias"
    },
    {
        boton: "abrirNumenes",
        modal: "modalNumenes"
    },
    {
        boton: "abrirBibliografia",
        modal: "modalBibliografia"
    },  
    {
        boton: "abrirMunicipios",
        modal: "modalMunicipios"
    },
    {
        boton: "abrirFichaNumenes",
        modal: "modalFichaNumenes"
    }
];

filtrosAccesibles.forEach(({ boton, modal }) => {

    const elemento = document.getElementById(boton);
    const ventana = document.getElementById(modal);

    if (!elemento || !ventana) return;
        ventana.setAttribute("tabindex", "-1");
        ventana.setAttribute("role", "dialog");
        ventana.setAttribute("aria-modal", "true");

        const tituloModal = ventana.querySelector("h3");

        if (tituloModal) {

            if (!tituloModal.id) {
                tituloModal.id = modal + "-titulo";
            }

            ventana.setAttribute(
                "aria-labelledby",
                tituloModal.id
            );
        }

    elemento.setAttribute("role", "button");
    elemento.setAttribute("tabindex", "0");
    elemento.setAttribute("aria-haspopup", "true");
    elemento.setAttribute("aria-controls", modal);
    elemento.setAttribute("aria-expanded", "false");

    elemento.addEventListener("keydown", function(e) {

        if (e.key === "Enter" || e.key === " ") {

            e.preventDefault();
            elemento.click();

        }

    });

        let modalEstabaAbierto = false;

            const observer = new MutationObserver(() => {

                const abierto = !ventana.classList.contains("oculto");

                elemento.setAttribute(
                    "aria-expanded",
                    abierto ? "true" : "false"
                );

                if (abierto && !modalEstabaAbierto) {

                    setTimeout(() => {
                        ventana.focus();
                    }, 100);

                } else if (!abierto && modalEstabaAbierto) {

                    elemento.focus();

                }

                modalEstabaAbierto = abierto;

            });

            observer.observe(ventana, {
                attributes: true,
                attributeFilter: ["class"]
            });

});

// =============================
// SALTO ACCESIBLE AL RESUMEN
// =============================

const enlaceSalto = document.querySelector(".skip-link");
const resumen = document.getElementById("resumen");

if (enlaceSalto && resumen) {

    // Enter → saltar directamente al resumen
    enlaceSalto.addEventListener("click", function(e) {

        e.preventDefault();

        resumen.focus();

    });
}