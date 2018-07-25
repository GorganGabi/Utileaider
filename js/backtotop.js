if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }

        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}

function backToTop1() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
        console.log('Hey man ' + scrollTop);
        window.location.reload(true);
    }else{
        console.log('Bye man ' + scrollTop);
    }
    $("#header").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
}