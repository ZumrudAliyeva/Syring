
$(function () {
  let ulItem = $(".list");
  let liItem = $(".list-unstyled ");
  let panelTag = $(".vc_tta-panel")

$(document).on("click",".list-unstyled",function (params) {
    $(".list-unstyled.active_c").removeClass("active_c");
    $(this).addClass("active_c");


    $('.vc_tta-panel').slideUp();
    let index = $('.list-unstyled.active_c').attr("data-index");
    let connectTab = $(`.vc_tta-panel[data-index="${index}"]`);
    connectTab.slideDown()
   
   
    
  })
  // ACCORDION


  let panel =$(".panel")
  let acc = $(".accordion")

$('.opened2').hide();
$(".panel").hide()


   $(document).on("click",".closed2",function (params) {
    $('.opened2').hide();
    $('.closed2').show();
    $(this).hide();
    $(this).next().show();
    $(".accordion.active").removeClass("active");
    $(this).parents(".accordion").addClass("active");
    $(".panel").hide()
    $(this).parents(".accordion").next().slideToggle();
   })
   $('.closed').show();

$(document).on('click', '.opened2', function () {
    $(this).parents(".accordion").next().slideToggle();
    $('.opened2').hide();
    $('.closed2').show();
    $(".accordion.active").removeClass("active");

})

});
