// Una vez que se habra el documento se ejecute todo el codigo
$(document).ready(function(){
    // Cuando hagamos scroll se ejecutara el codigo
    $(window).on('scroll', function(){
        // Le indicamos que si se hace un scroll hacia arriba
        var scrollTop = $(this).scrollTop();
        // Este if es para que cuando se llegue a unos px se aplica mi animacion y que no se aplique si no haga un scroll de 700
        if(scrollTop > 700){
            $('.menu-item img').animate({
                bottom: 0,
                opacity: 1,
                transition: '0.2s'
            });
        }
    })
    // Quise intentarlo con un :nth-child() para seleccionar cada uno de los elementos y que vaya apareciendo uno por uno 
    //(no me funcionaba)

    // A si que recorremops todos los elementos de la clase nav-item de navegacion
    var items = $('.navegacion .nav-item');
    for(var i = 0; i < items.length; i++){
        // Aqui escogi todos los elementos con el items[i] y aplique unos estilos
        // Primero aplico estilos para hacer desaparecer el menu
        $(items[i]).css({
            'opacity': 0,
        });
        // Aplicamos un retraso de 0.5 (500) de la animacion en cada elemento
        // Es decir cada elemento aparecera con un retraso de 0.5segundo comenzando por el primer elemento
        $(items[i]).delay(i * 500).animate({
            'opacity': 1,
            'transition': '3s'
        }, 500);
    }
})