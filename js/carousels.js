'use script';
$(function () {
 /*==== OWL CAROUSELS ==== */

// HOME //
/*== HOME BLOGS CAROUSEL ==*/
$('.home-blogs').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin:30,
    nav: false,
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

/*== HOME TESTIMONIALS CAROUSEL ==*/
$('.testimonials-carousel').owlCarousel({
    loop: true,
    autoplay:false,
    margin:30,
    nav: false,
    dots: false,
    responsive:{
        1200:{
            items: 4,
        },
        991:{
            items: 2,
        },
        813:{
            items: 1,
        },
    }
})


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