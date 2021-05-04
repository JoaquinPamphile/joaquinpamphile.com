$(document).ready(function(){
    //Funcion para navbar sticky
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); // si se desplaza, se queda pegado con color de fondo crimson
        }else{
            $('.navbar').removeClass("sticky"); // si vuelve a la posicion inicial, vuelve a ser transparente
        }
    });
    
    //Funcion para mostrar el menu una vez clickeada las 3 barritas
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        //una vez que se muestra el menu, las 3 barritas se convierten en x
        $('.menu-btn i').toggleClass("active");
    });
    
});