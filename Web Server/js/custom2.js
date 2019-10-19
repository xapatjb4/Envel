"use strict";

jQuery(document).ready(function() {

    /*------------------------
    1 Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");
    /*------------------------
    Back To Top
    --------------------------*/
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    jQuery('#top').on('click', function() {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $(".popup-with-form1").hover(function() {
        $('.box-1 .box-block').toggleClass("hover-box");
    });
    $(".popup-with-form2").hover(function() {
        $('.box-2 .box-block').toggleClass("hover-box");
    });
    $(".popup-with-form3").hover(function() {
        $('.box-3 .box-block').toggleClass("hover-box");
    });
    $(".popup-with-form4").hover(function() {
        $('.box-4 .box-block').toggleClass("hover-box");
    });

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();


    jQuery('.center').slick({
        centerMode: true,
        arrows: true,
        prevArrow: "<a href='#'><i class='fas fa-angle-left'></i></a>",
        nextArrow: "<a href='#'><i class='fas fa-angle-right'></i></a>",
        centerPadding: '0px',
        vertical: true,
        slidesToShow: 2,
    });


    skrollr.init();




    jQuery('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });
    jQuery('.popup-with-form1,.popup-with-form2,.popup-with-form3,.popup-with-form4').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if (jQuery(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });



    /*------------------------
    Accordion
    --------------------------*/
    $('.iq-accordion .iq-ad-block .ad-details').hide();
    $('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
    $('.iq-accordion .iq-ad-block').on("click", function() {
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
            $(this).toggleClass('ad-active').children('div').slideDown('slow');
        }
    });

    /*------------------------
        
    --------------------------*/
    jQuery('.navbar-nav li a').on('click', function(e) {
        var anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor.attr('href')).offset().top - 0
        }, 1500);
        e.preventDefault();
    });
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('header').addClass('menu-sticky');
        } else {
            jQuery('header').removeClass('menu-sticky');
        }
    });

});

jQuery(document).ready(function() {




    /*------------------------
    9 Owl Carousel
    --------------------------*/
    jQuery('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });


});