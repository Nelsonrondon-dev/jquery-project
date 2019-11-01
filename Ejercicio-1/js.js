
// Boton 1 Cambio de Fondo y color de Letras al azar entre 10 modelos

$('#boton-1').on("click", function () {

    var colors = ["#e74c3c", "#a3e4d7 ", "#bb8fce ", "#f7dc6f ", "#138d75 ", "#ff33c4", "#ff3333", "#334cff", "#a26f27", "#0e0d0c", "#d1d0ce"];
    var rand = Math.floor(Math.random() * colors.length);
    $('#parrafo').css({ "font-size": "1.3em", "background": "#ffe0b2 " });
    $('#parrafo').css("color", colors[rand]);

});

// Boton 2 Cambio de Fondo y color de Letras al azar entre 10 modelos

$('#boton-2').on("click", function () {
    var colors = ["#e74c3c", "#a3e4d7 ", "#bb8fce ", "#f7dc6f ", "#138d75 ", "#ff33c4", "#ff3333", "#334cff", "#a26f27", "#0e0d0c", "#d1d0ce"];
    var rand = Math.floor(Math.random() * colors.length);
    $('#parrafo').css({ "font-size": "1.3em", "background": "#90caf9" });
    $('#parrafo').css("color", colors[rand]);

});

// Boton 3 Ocultar y Aparecer

$('#boton-3').on("click", function () {
    $('#parrafo').toggle()
    if ($('#boton-3').hasClass('activo')) {
        $('#boton-3').removeClass("activo");
        $('#boton-3').text("Oculta Parrafo");
    }
    else {
        $('#boton-3').addClass("activo");
        $('#boton-3').text("Hacer Visible");

    }
});



