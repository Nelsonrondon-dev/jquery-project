

$( document ).ready(function() {


  $("#consultar").click(function(){
        
    // Valores Introducidos

        var valordia = $("#dia").val();  
        var valormes = $("#mes").val();  
        var valorano = $("#ano").val();  
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var year = d.getFullYear();

    // Si es año actual es menor que el año introducido
    if (valorano < year) {

        //  años de edad
        if (valormes > month ) {
            var edad = year - valorano -1 ;
            $('#parrafo').text(  "Tiene " + edad + " años de Edad");
        }

        //  años de edad
        else if (valormes == month ) {
        
                if (valordia > day ) {
                    var edad = year - valorano -1;
                    $('#parrafo').text(  "Tiene " + edad + " años de Edad");
                }
                else if ( valordia == day) {
                    var edad = year - valorano;
                    $('#parrafo').text(  "Tiene " + edad + " años de Edad");
                }
                else {
                    var edad = year - valorano;
                    $('#parrafo').text(  "Tiene " + edad + " años de Edad");
                }
        }
     
        //  años de edad
        else {
        var edad = year - valorano;
        $('#parrafo').text(  "Tiene " + edad + " años de Edad");
        }
    }


    // Si es año actual es igual que el año introducido
    else if (valorano == year) {


        // Meses de Edad
        if (valormes < month ) {
            var edad = 12 - valormes;
            $('#parrafo').text(  "Tiene " + edad + " meses de Nacido")  
        }

        // dias  de Edad

        else if (valormes == month ) {

                if (day > valordia ) {
                    var edad = day - valordia;
                    $('#parrafo').text(  "Tiene " + edad + " dias de Nacido");
                }
                
                else if (day == valordia){
                    $('#parrafo').text(" Naciste Hoy");
                }
                else if (day < valordia){
                    $('#parrafo').text("No has nacido o no es valor valido  de dia");
                }
                else {
                    $('#parrafo').text("coloque un valor valido en el dia");
                }
        }
        // dias  de Edad
        else {
            $('#parrafo').text("te faltan unos dias para nacer");

        }

    }

    // Si es año actual es mayor  que el  año introducido
    else if (valorano >  year) {
    $('#parrafo').text("Upss aun no has nacido, Ingrese una fecha valdiad");
    }

    // Si es año el valor del año tiene un error

    else {
        $('#parrafo').text("el valor del año esta mal, Ingrese una fecha valida");
    } 

    });
});
