// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade bounce in
    $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('bounceInRight').css("opacity", "1");
            }
        });

        $('.scroll-animations-slow .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('bounceInRight');
                $('.nav-parent').css("cssText", "opacity: 1 !important;");
            }
        });

        $('.fadein-animations .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeIn').css("opacity", "1");
                $('#social').css("cssText", "opacity: 1 !important;");
            }
        });

        $('.fadeindown-animations .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInDown').css("opacity", "1");
            }
        });

        $('.fadeinup-animations .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInUp').css("opacity", "1");
            }
        });
    });
});