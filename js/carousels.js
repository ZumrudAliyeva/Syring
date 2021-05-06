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
    responsiveClass:true,
    responsive:{
        1200:{
            items: 3,
        },
        768:{
            items: 2,
        },
        375:{
            items: 1,
        },
    }
})

/*== HOME TESTIMONIALS CAROUSEL ==*/
$('.testimonials-carousel').owlCarousel({
    center: true,
    loop: true,
    items: 2,
    autoplay:false,
    margin:30,
    nav: false,
    dots: false,
    responsiveClass:true,
    responsive:{
        1200:{
            items: 4,
        },
        991:{
            items: 3,
            center: false,
        },
        768:{
            items: 2,
            center: true,
        },
        375:{
            items: 1,
            center: false,
            stagePadding: 15,
            autoplay: true,
        }
    }
})


    /*== PRICING CAROUSEL ==*/
    $('.pricing-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 15,
        dots: false,
        responsiveClass:true,
        responsive:{
            1200:{
                items: 3,
            },
            768:{
                items: 2,
            },
            375:{
                items: 1,
            },
        }
    })
$(document).on('click', '.pricing-item',function () {
    $('.pricing-item.selected').removeClass('selected');
    $(this).addClass('selected');
})

})