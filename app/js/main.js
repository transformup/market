$(document).ready(function () {
    $('.product-slider__wrapper').slick({
        autoplay: false,
        arrows: true,
        appendArrows: $('.arrows-wrap'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>'
    });

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true
    });
});