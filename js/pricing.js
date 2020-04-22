$(function () {
        /*==== OWL CAROUSELS ==== */
    /*== PRICING CAROUSEL ==*/
    $('.pricing-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        dots: false,
        responsive:{
            1200:{
                items: 3,
            },
            991:{
                items: 2,
            },
            813:{
                items: 1,
            },
        }
    })
$(document).on('click', '.pricing-item',function () {
    $('.pricing-item.selected').removeClass('selected');
    $(this).addClass('selected');
})
})