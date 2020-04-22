$(function () {
    $(".additional-fields").addClass("act");

    $(document).on("click", ".shipping-fields",function () {
  
        $(".additional-fields").toggleClass("act");
        $(".shipping-adress").toggleClass("act");
        
    })
 
    let divTag =$(".privacyText")
    $(".radio-1").attr('checked', true);
    $(document).on("click",".transfer",function (params) {
        $(".privacyText").eq(0).removeClass("show");
        $(".privacyText").eq(1).addClass("show");
        $(".radio-1").attr('checked', false);
        
        $(document).on("click",".transfer",function (params) {
            $(".privacyText").eq(0).removeClass("show");
            $(".privacyText").eq(1).removeClass("show");
            $(".privacyText").eq(2).addClass("show");
            $(".radio-2").attr('checked', false);
            $(".radio-1").attr('checked', false);
            
            
            
        })
        
        
    })
  
   
})