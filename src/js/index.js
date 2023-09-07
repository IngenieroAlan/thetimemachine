document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de las palabras ingresadas por el usuario
    var palabra1 = document.getElementById("palabra1").value;
    var palabra2 = document.getElementById("palabra2").value;

    // Verificar si las palabras coinciden
    if (palabra1 === 'hola') {
        if(palabra2 === 'hola')
        window.location.href = "escrito.html";
    } else {
        alert("Las palabras no coinciden. Intenta de nuevo.");
    }
});