'use script';
$(function () {


$('.zero').counterUp({
    delay: 10,
    time: 1000
})







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

$(document).on('mouseenter', '.static-nav .nav-link', function () {
    $(this).next().show();
    // $(this).next().css('visibility', 'visible');
    $(this).next().css('top', '101px');
})
$(document).on('mouseleave', '.sub-menu', function () {
    $(this).hide();
    // $(this).css('visibility', 'hidden');
    $(this).css('top', '200px');
})


$(document).on('keyup', '.search-field', function () {
    let inputValue = $(this).val().toLowerCase();
    $(".crud-body tr").children().eq(1).filter(function() {
        $(this).parents('html').toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
      });
})
/*==== NAVIGATION BAR MOBILE====*/

$(document).on('click', '.red-toggle', function () {
    let sub = $(this).next();
    
    $(this).next().toggle();
    
})





/* ==== HOME MAIN SLIDER ==== */
let sliderCount = 0;
let timer;
function setTimer() {
    if (sliderCount == ($("#home-slider li").length - 1)) {
        sliderCount = 0;
    } else {
        sliderCount++;
    }
    $('.overlay-dark').fadeIn(1000).fadeOut(600);
    $("#home-slider li.active-main").removeClass("active-main");
    $("#home-slider li").eq(sliderCount).addClass("active-main");
    $('.layers-div').eq(sliderCount).fadeIn(1000);
    $('.layer-1').eq(sliderCount).slideDown(700);
    $('.layer-2').eq(sliderCount).slideDown(750);
    $('.layer-3-button').eq(sliderCount).fadeIn(750);
    $('.tp-bullet.selected').removeClass('selected');
    $('.tp-bullet').eq(sliderCount).addClass('selected');
};
timer = setInterval(setTimer, 8000);
setTimer();

$(document).on('click', '.tp-bullet', function () {
    $('.tp-bullet.selected').removeClass('selected');
    $(this).addClass('selected');
    let index = $('.tp-bullet.selected').attr('data-index');
    let activeSlide = $(`#home-slider li[data-index="${index}"]`);
    $("#home-slider li.active-main").removeClass("active-main");
    activeSlide.addClass('active-main');
    $('.layers-div').eq(sliderCount).fadeIn(1000);
    $('.layer-1').eq(sliderCount).slideDown(700);
    $('.layer-2').eq(sliderCount).slideDown(750);
    $('.layer-3-button').eq(sliderCount).fadeIn(750);
})

/* ==== VIDEO MODAL ==== */
$(document).on('click', '.cms-video-popup', function () {
    $('.video-modal').show(1000);
    $(document).on('click', '.video-close', function () {
    $('.video-modal').hide();
    })
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




})