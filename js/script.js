$(window).on("load", function() {
    $(".loader .inner").fadeOut(2500, function() {
        $(".loader").fadeOut(2500);
    });
});

$(document).ready(function() {
    $('#slides').superslides({
        play: 3300,
        animation: 'fade',
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: [
            "^2500",
            "I am an Engineering Student",
            "I am ^650 a Programmer",
            "I am ^650 an Analyst",
            "^500 Welcome to my portfolio website! ^5000"
        ],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true,
        startDelay: 0,
        backDelay: 500,
        showCursor: false,
        smartBackspace: true,
    });

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset1 = $(".skillsSection1").offset().top;
    var skillsTopOffset2 = $(".skillsSection2").offset().top;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset1 - $(window).innerHeight() + 200) {
            $('.chart1').easyPieChart({
                easing: 'easeInOut',
                barColor: '#C9ADA7',
                trackColor: false,
                scaleColor: false,
                lineWidth: 6,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(window.pageYOffset > skillsTopOffset2 - $(window).innerHeight() + 200) {
            $('.chart2').easyPieChart({
                easing: 'easeInOut',
                barColor: '#9498B3',
                trackColor: false,
                scaleColor: false,
                lineWidth: 6,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});