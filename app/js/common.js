$(function() {

	// Пользовательские функции
    $('.sl').slick();

    $('.sl-carousel').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true, // делает слайды по центру по бокам видны кусочки других слайдов
        centerPadding: '100px', // делаем ширину отступов
        responsive: [{
            breakpoint: 1055,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: '50px'

            }

        }, {
            breakpoint: 675,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                centerPadding: '30px'

            }
        }]
    });

    $('.sl-carousel-item-zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.accordion').accordion();

});