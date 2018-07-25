(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
        $('#Carousel').carousel({
                interval: 10000,
                item: 2
            })

    });

    $.localScroll();



}(jQuery));

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

jQuery(document).ready(function(){
    jQuery('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            jQuerytarget = jQuery(target);

        jQuery('html, body').stop().animate({
            'scrollTop': jQuerytarget.offset().top-80
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
