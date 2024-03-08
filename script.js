$(document).ready(function(){
    // Función para controlar el menú hamburguesa en pantallas pequeñas
    function toggleMenuByScreenSize() {
        var menuToggle = $('.menu-toggle');
        var menuContainer = $('.menu-container');

        menuToggle.click(function() {
            menuContainer.toggle();
        });
    }

    // Inicializar el carrusel Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        touchDrag: true,
        touchDragThreshold: 0.1
    });

    // Llamar a la función para controlar el menú hamburguesa
    toggleMenuByScreenSize();
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Mostrar solo una diapositiva a la vez
        loop: true, // Repetir el carrusel infinitamente
        autoplay: true, // Activar la reproducción automática
        autoplayTimeout: 5000, // Tiempo de espera entre diapositivas (en milisegundos)
        autoplayHoverPause: true, // Pausar la reproducción automática al pasar el cursor sobre el carrusel
        nav: false, // Desactivar la navegación previa/siguiente
        dots: false // Desactivar los indicadores de puntos
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        const label = input.previousElementSibling;

        input.addEventListener('input', () => {
            label.style.display = 'none';
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.display = 'block';
            }
        });
    });
});

  
