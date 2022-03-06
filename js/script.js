$(document).ready(function(){
    $('.caruosel__iner').slick({
        speed:1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel-img/previos.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel-img/next.png"></button>',
        responsive: [
            {
                breakpoint: 922,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});