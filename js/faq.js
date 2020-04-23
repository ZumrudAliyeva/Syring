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
   


})
