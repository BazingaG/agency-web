// $('.slick-slider').slick({
//     prevArrow: '<div class="slick-prev"><i class="fa fa-circle-chevron-left fa-xl" aria-hidden="true"></i></div>',
//     nextArrow: '<div class="slick-next"><i class="fa fa-circle-chevron-right fa-xl" aria-hidden="true"></i></div>',
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     centerMode: false,
//     variableWidth: true
//   });
(function ($) {
    Drupal.behaviors.slick_slider = {
        attach: function (context, settings) {
            console.log('Hi poonam');
            console.log(context);
            $('.slick-slider').slick({
                prevArrow: '<div class="slick-prev"><i class="fa fa-circle-chevron-left fa-xl" aria-hidden="true"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-circle-chevron-right fa-xl" aria-hidden="true"></i></div>',
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                centerMode: false,
                variableWidth: true,
                arrows: true
            });
        }
    }
})(jQuery);