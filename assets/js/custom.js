$(document).ready(function () {
    /*SCROLLING SCRIPTS*/
    $('.scroll-me a').bind('click', function (event) { 
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1900, 'easeInOutExpo');
        event.preventDefault();
    });
    /*SLIDER SCRIPTS*/
    $('#carousel-slider').carousel({
        interval: 3000 
    });
    /*VAGAS SLIDESHOW SCRIPTS*/
    $.vegas('slideshow', {
        backgrounds: [
            { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
            { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
        ]
    })('overlay', {
        src: 'assets/js/vegas/overlays/06.png' 
    });
    /* POPUP IMAGE SCRIPTS*/
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
    /*FILTER FUNCTIONALITY SCRIPTS*/
    $(window).load(function () {
        var $container = $('#work-div');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.caegories a').click(function () {
            $('.caegories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
});
