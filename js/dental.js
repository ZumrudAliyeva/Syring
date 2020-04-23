$( function() {
  $( "#datepicker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });
  
  $(document).on("click", ".hasDatepicker",function () {
    $(".date").css("display","block");
    
  })

 
  // $(document).on("click", ".btn1",function () {
    
  // $('input[type="button"]').attr('disabled', true);

  
  //     var text_value = $('input[name="textField"]').val();
  //     if ( text_value != '') {
  //         $('input[type="button"]').attr('disabled', false);
  //     } else {
  //         $('input[type="button"]').attr('disabled', true);
  //     }
  

      
     
   
    
  // })
  $(document).on("click", ".btn1",function () {

    $(".wait").css("display","block");
    
  })

} );