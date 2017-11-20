(function ($) {
    $(function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        $('.carousel.carousel-slider').carousel({ fullWidth: true, padding: 200 }, setTimeout(autoplay, 10000));
        
        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 5500);
        };
        $('.carousel').carousel({ duration: 35 });
        $('.button-collapse').sideNav();
        
    });

})(jQuery);