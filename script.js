function sanitizeInput() {
    let input = document.getElementById("inputHtml").value;

    // Expresión regular para eliminar <script> y su contenido
    let cleanHtml = input.replace(/<script\b[^<]*>.*?<\/script>/gi, "");

    // Mostrar el resultado
    document.getElementById("outputHtml").innerText = cleanHtml;
}
