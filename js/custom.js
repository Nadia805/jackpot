$(function () {



    $('.flow_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true
                }
    },
            {
                breakpoint: 321,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true

                }
    }
  ]

    });


    $('.game-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true
                }
    },
            {
                breakpoint: 321,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true

                }
    }
  ]
    });


    $(".faq_tournament .card-header").on('click', function () {
        $(".card").removeClass("addBorder");
        $(this).parent().toggleClass("addBorder");
    });

    //
    //     Coundown js
    //    $('.coun_down').countdown('', function (event) {
    //        $(this).html(event.strftime('%H'));
    //    });
    //    $('.coun_down2').countdown('2030/01/01', function (event) {
    //        $(this).html(event.strftime('%M'));
    //    });
    //    $('.coun_down3').countdown('2030/01/01', function (event) {
    //        $(this).html(event.strftime('%S'));
    //    });



    $(".country_bet").niceScroll();









});
