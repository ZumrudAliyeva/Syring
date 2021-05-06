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

$(document).on('mouseenter', '.static-nav .nav-link', function () {
    $('.static-nav .sub_menu').hide();
    $(this).next().show();

})
$(document).on('mouseleave', '.static-nav', function () {
    $('.static-nav .sub_menu').hide();
})

$(document).on('keyup', '.search-field', function () {
    let inputValue = $(this).val().toLowerCase();
    $(".crud-body tr").children().eq(1).filter(function() {
        $(this).parents('html').toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
      });
})
/*==== NAVIGATION BAR MOBILE====*/
$(document).on('click', '#menu-mobile', function () {
    $('#navigation-mobile').slideToggle();
})
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
        $("#header").css({
            position: 'fixed',
            top: 0
        });
        $("#navigation-mobile").css({
            position: 'fixed'
        });
    } else {
        $("#header").css('position', 'relative');
        $("#navigation-mobile").css('position', 'relative');
    }
});

$(document).on('click', '.closed', function () {
    $('.opened').hide();
    $('.closed').show();
    $(this).hide();
    $(this).next().show();
    $('#navigation-mobile .sub_menu_mobile').hide();
    $(this).parent().next().slideToggle();
})
$('.closed').show();
$(document).on('click', '.opened', function () {
    $(this).parent().next().slideToggle();
    $('.opened').hide();
    $('.closed').show();
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
    $('.layer-3-button').eq(sliderCount).show(750);
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
    $('.video-modal').fadeIn();
    $(document).on('click', '.video-close', function () {
    $('.video-modal').fadeOut(300);
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