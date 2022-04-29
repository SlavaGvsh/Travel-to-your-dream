jQuery(function(){
    $(".menu-btn").click(function() {
        // $(this).toggleClass("active");
        $("#header").toggleClass('open-menu');
    });

    $(".accordion-items span").click(function() {
        // $(this).toggleClass("active");
        $(this).parent().toggleClass('open');
    });

    $('.slider-main').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-prev"><span class="material-icons">arrow_back</span></span>',
        nextArrow: '<span class="slick-next"><span class="material-icons">arrow_forward</span></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});