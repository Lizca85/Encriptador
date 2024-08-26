
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

const textarea = document.getElementById("textoPegado");
const resultado = document.getElementById("der");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");


function mostrarResultado(texto) {
    resultado.textContent = texto;
}

function copiarAlPortapapeles() {
    navigator.clipboard.writeText(resultado.textContent).then(() => {
        alert("Texto copiado al portapapeles!");
    });
}

btnEncriptar.addEventListener("click", () => {
    const texto = textarea.value.toLowerCase();
    mostrarResultado(encriptarTexto(texto));
});

btnDesencriptar.addEventListener("click", () => {
    const texto = textarea.value.toLowerCase();
    mostrarResultado(desencriptarTexto(texto));
});


