$(document).ready(function () {
    $('.product-slider__wrapper').slick({
        autoplay: false,
        arrows: true,
        appendArrows: $('.arrows-wrap'),
        prevArrow: '<button type="button" class="product-btn juliet-prev"></button>',
        nextArrow: '<button type="button" class="product-btn juliet-next"></button>'
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true
    });

    $('.follower-slider__inner').slick({
        appendArrows: $('.arrows-box'),
        nextArrow: '<button type="button" class="follower-btn follower-next"></button>',
        prevArrow: '<button type="button" class="follower-btn follower-prev"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,  
    });

    $('.feedback-slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn feedback-next"></button>',
        prevArrow: '<button type="button" class="slick-btn feedback-prev"></button>',
        slidesToShow: 2,
        slidesToScroll: 1
    });

    var mixer = mixitup('.products__inner-box');
});