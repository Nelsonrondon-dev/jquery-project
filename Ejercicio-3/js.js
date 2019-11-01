$(document).ready(function () {
    $("body").mousedown(function (x) {
        // has hecho click izquierdo
        if (x.which == 1) {
            alert("has hecho click izquierdo");

        }
        // has hecho click derecho     
        else if (x.which == 3) {
            alert("has hecho click derecho");
        }
        // has hecho click scroll 
        else if (x.which == 2) {
            alert("has hecho click en el scroll");
        }

    });
});