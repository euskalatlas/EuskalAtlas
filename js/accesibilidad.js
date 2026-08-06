const btnContraste = document.getElementById("btnContraste");
const btnTexto = document.getElementById("btnTexto");


// =============================
// CARGAR PREFERENCIAS
// =============================

if (localStorage.getItem("contraste") === "on") {

    document.body.classList.add("alto-contraste");

    if (btnContraste) {
        btnContraste.classList.add("activo");
    }

}

if (localStorage.getItem("texto") === "on") {

    document.body.classList.add("texto-grande");

    if (btnTexto) {
        btnTexto.classList.add("activo");
    }

}


// =============================
// BOTÓN CONTRASTE
// =============================

if (btnContraste) {

    btnContraste.addEventListener("click", () => {

        btnContraste.classList.toggle("activo");

        document.body.classList.toggle("alto-contraste");

        if (document.body.classList.contains("alto-contraste")) {

            localStorage.setItem("contraste", "on");

        } else {

            localStorage.removeItem("contraste");

        }

    });

}


// =============================
// BOTÓN TEXTO
// =============================

if (btnTexto) {

    btnTexto.addEventListener("click", () => {

        btnTexto.classList.toggle("activo");

        document.body.classList.toggle("texto-grande");

        if (document.body.classList.contains("texto-grande")) {

            localStorage.setItem("texto", "on");

        } else {

            localStorage.removeItem("texto");

        }

    });

}

