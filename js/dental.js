$( function() {
  $( "#datepicker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });
  
  $(document).on("click", ".hasDatepicker",function () {
    $(".date").css("display","block");
    
  })
 
  
  
  // $('.btn1').attr('disabled',true);
  $('.btn1').click(function(){
    let name = $(".name").val();
    let email = $(".email").val();
    let phone = $(".phone").val();
    let date = $(".Date").val();
    if (name && email && phone && date ) {
     $(".wait").css("display" , "block")
  }

  $('.name').val('');
  $('.email').val('');
  $('.phone').val('');
  $('.Date').val('');


      })
      
          /* =====================================
             Fancy Box Image viewer
      ====================================== */
    $('[data-fancybox]').fancybox({
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 600,
      'speedOut': 200,
      buttons: [
          'slideShow',
          'fullScreen',
          'thumbs',
          'share',
          // 'download',
          'zoom',
          'close'
      ],
  });


  

      
     
   
    

} );