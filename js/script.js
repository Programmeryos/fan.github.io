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

    function deployment(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.reviews-item__user-review').eq(i).toggleClass('reviews-item__user-review_active');
                $('.reviews-item__link').eq(i).toggleClass('reviews-item__link_active');
                $('.reviews-item__back').eq(i).toggleClass('reviews-item__back_active');
            })
        });
    };

    deployment('.reviews-item__link');
    deployment('.reviews-item__back');

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    
    $('.button_catalog-item').on('click', function(){
        $('.overlay, #order').fadeIn();
    });

    $('.button_catalog-item').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        })
    });

    $('form').submit( function () {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type:'POST', 
            url:'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});