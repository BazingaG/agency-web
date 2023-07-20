(function ($) {
    Drupal.behaviors.slick_slider_work = {
        attach: function (context, settings) {
            $('.slick-slider-work').slick({
                prevArrow: '<div class="slick-prev"><i class="fa fa-circle-chevron-left fa-2xl" aria-hidden="true"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-circle-chevron-right fa-2xl" aria-hidden="true"></i></div>',
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            swipeToSlide: true
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipeToSlide: true
                        }
                    }
                ]
            });
        }
    }
})(jQuery);