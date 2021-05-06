$( function() {

  /* =====================================
     Fancy Box Image viewer
  ====================================== */
  
  $('[data-fancybox = "images"]').fancybox({
  
  loop: true,
  'transitionIn': 'elastic',
  'transitionOut': 'elastic',
  'speedIn': 600,
  'speedOut': 200,
  buttons: [
   'slideShow',
   'fullScreen',
   'thumbs',
     'zoom',
     'close'
  ]
  })


  $( "#datepicker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });
  
  $(document).on("click", ".hasDatepicker",function () {
    $(".date").css("display","block");
    
  })
 
  
  

  $('.btn1').click(function(){
    let name = $(".name").val();
    let email = $(".email").val();
    let phone = $(".phone").val();
    let date = $(".Date").val();
    let department =$( ".department" ).val();
    let time =$( ".time" ).val();
    if (name && email && phone && date  ) {
     $(".wait").css("display" , "block")
     $(".overlay").css("opacity","1");
     $(".md-content").css("display","block");
     $(".fsb-modal").css("display","block");
  }

  
    
  
  $('.name').val('');
  $('.email').val('');
  $('.phone').val('');
  $('.Date').val('');
  $( ".department" ).val('');
  $( ".time" ).val('');
  
  
})
$(document).on("click",".md-close",function () {
  
  $(".overlay").css("opacity","0");
  $(".md-content").css("display","none");
  $(".wait").css("display" , "none")
  $(".fsb-modal").css("display","none");
  
})


      
     
 
    

} );