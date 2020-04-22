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

        
    })
  
   
