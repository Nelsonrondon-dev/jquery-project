
/* ------ Botones ------ */

$(document).ready(function () {
    $('#boton-1').click(function () {
        agregar();
    });
    $('#boton-2').click(function () {
        eliminar(id_fila_selected);
    });
    $('#boton-3').click(function () {
        eliminarTodasFilas();
    });

});

/* ------Contador ------ */

var contador = 0;
var id_fila_selected = [];

/* ------Función Agregar Fila ------ */
function agregar() {
    contador++;
    var fila = '<tr class="selected" id="fila' + contador + '" onclick="seleccionar(this.id);"><td>' + contador + '</td><td>Nombre del producto</td><td>0.00 Bss</td></tr>';
    $('#tabla').append(fila);
    reordenar();
}

/* ------Función Seleccionar Filas ------ */
function seleccionar(numero_fila) {
    if ($('#' + numero_fila).hasClass('seleccionada')) {
        $('#' + numero_fila).removeClass('seleccionada');
    }
    else {
        $('#' + numero_fila).addClass('seleccionada');
    }

    id_fila_selected.push(numero_fila);
}
/* ------Función Eliminar  Filas Seleccionadas ------ */

function eliminar(numero_fila) {
 
    for (var x = 0; x < numero_fila.length; x++) {
        $('#' + numero_fila[x]).remove();
    }
    reordenar();
}

/* ------Función Ordenar  Filas ------ */

function reordenar() {
    var contador2 = 1;
    $('#tabla tbody tr').each(function () {
        $(this).find('td').eq(0).text(contador2);
        contador2++;
    });
}

/* ------Función Eliminar Todas las  Filas ------ */

function eliminarTodasFilas() {
    $('#tabla tbody tr').each(function () {
        $(this).remove();
    });

}
