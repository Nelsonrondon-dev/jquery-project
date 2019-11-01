$("#boton-1").click(function(){
 //Cambio si el el parrafo 1 tiene la clase 1 a 2
        if ($('#parrafo1').hasClass('parrafo-1')) {
            $('#parrafo1').removeClass('parrafo-1');
            $('#parrafo1').addClass('parrafo-2');
        }
        else if ($('#parrafo1').hasClass('parrafo-2')){
            $('#parrafo1').removeClass('parrafo-2');
            $('#parrafo1').addClass('parrafo-1');
        }
        
  //Cambio si el el parrafo 2 tiene la clase 2 a 1
       
        if ($('#parrafo2').hasClass('parrafo-1')) {
            $('#parrafo2').removeClass('parrafo-1');
            $('#parrafo2').addClass('parrafo-2');
        }
        else if ($('#parrafo2').hasClass('parrafo-2')){
            $('#parrafo2').removeClass('parrafo-2');
            $('#parrafo2').addClass('parrafo-1');
        }
    
 });
