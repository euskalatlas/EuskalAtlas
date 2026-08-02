document.addEventListener("DOMContentLoaded", () => {

    aplicarIdioma(localStorage.getItem("idioma") || "es");

    document.querySelector(".volver-atras").addEventListener("click", e => {

        e.preventDefault();

        if (history.length > 1) {
            history.back();
        } else {
            location.href = "index.html";
        }

    });

});