(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
        $('#Carousel').carousel({
                interval: 10000,
                item: 2
            })

    });

    $.localScroll();


    jQuery(window).load(function () {


    });



}(jQuery));

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
