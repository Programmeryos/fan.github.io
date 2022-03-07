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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    function togglSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.reviews-item__user-review').eq(i).toggleClass('reviews-item__user-review_active');
                $('.reviews-item__link').eq(i).toggleClass('reviews-item__link_active');
                $('.reviews-item__back').eq(i).toggleClass('reviews-item__back_active');
            })
        });
    };

    togglSlide('.reviews-item__link');
    togglSlide('.reviews-item__back');
});