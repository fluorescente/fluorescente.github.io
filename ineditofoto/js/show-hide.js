$(document).ready(function(){ /* para que se ejecute despues de que el contenido este cargado*/
  $('.thank-you').click(function(e){ /* evento dentro de la función */
    /* e.preventDefault(); /* esto es para que el evento no se ejecute. O sea para que el link no vaya a ningun lado */
    $(this).parent().find('.hidden-content').slideToggle(); /* Coge al papa de this o sea el div articulo, busca la clase hidden content y le hace slidetoggle. o sea slide de para abajo si esta escondido y de para arriba si esta visible */
  });
})