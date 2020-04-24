'use script';
$(function () {
/*==== NAVIGATION BAR ====*/
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 200) {
        $("#header").css({
            position: 'fixed',
            top: 0
        });
        $('#header-top').fadeOut();
    } else {
        $("#header").css('position', 'relative');
        $('#header-top').fadeIn(1000);
    }
});

$(document).on('click', '.header-search', function () {
    $(this).toggle();
    $('#header-search-modal').fadeIn();
})
$(document).on('click', '.modal-close', function () {
    $('#header-search-modal').fadeOut();
    $('.header-search').show();
})

$(document).on('click', '.header-cart', function () {
    $('.mini-cart').toggle();
})

/* ==== BUTTON TO TOP ==== */
let ScrolledAmount = 600;
$(window).on("scroll", function () {
    if ($(window).scrollTop() > ScrolledAmount) {
        $('.back-top').addClass('back-top-visible');
    } else {
        $('.back-top').removeClass('back-top-visible');
    }
});
$(document).on("click", '.back-top', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

//     /*== HOME BLOGS CAROUSEL ==*/
// $('.home-blogs').owlCarousel({
//             loop: true,
//             autoplay:true,
//             autoplayTimeout:5000,
//             autoplayHoverPause:true,
//             margin:30,
//             nav: true,
//             dots: true,
//             responsive:{
//                 1200:{
//                     items: 3,
//                 },
//                 991:{
//                     items: 2,
//                 },
//                 813:{
//                     items: 1,
//                 },
//             }
//         })


})