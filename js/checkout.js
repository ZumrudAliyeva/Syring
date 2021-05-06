
$(function () {
    $(".additional-fields").addClass("act");

    $(document).on("click", ".shipping-fields",function () {
  
        $(".additional-fields").toggleClass("act");
        $(".shipping-adress").toggleClass("act");
        
    })
 
    let divTag =$(".privacyText")
    $(".radio-1").attr('checked', true);
   $("input[type='radio']").click(function () {
       if ($(this).is(":checked")) {
           $(".privacyText.show").removeClass("show");
           $(this).next().next().addClass("show")
           
       }
      
       
   })
   $(document).on("click",".paypass",function () {
       
    
    //    let surname = $(".surname").val();
    //    let postcode = $(".code").val();
    //    let city = $(".city").val();
    //    let country = $(".country").val();
    //    let email = $(".email").val();
    //    let phone = $(".tel").val();
    //    let company = $(".company").val();
    //    let street = $(".street").val();
    //    let apartment = $(".apartment").val();
    //    let state = $(".state").val();
    //    if ( surname && postcode && city && company && country && email && phone && street && apartment && state )  {
           $(".check-main").hide()
           $(".third-main").show()
    //    }
   })
   
  

        
    })