'use strict'
$(function () {
    
    
    $(document).on('click', '.submit', function () {
        let userName = $('.name').val();
        let userEmail = $('.email').val();
        let userPhone = $('.telephone').val();
        let userInterest = $('.interest').val();
        let userMessage = $('.message').val();

        if (userName && userEmail && userPhone && userInterest && userMessage) {
            $('.response-output-succes').show();
        }
        
        if (userName === "") {
                $('.name').after('<span class="required">The field is required.</span>');
                $('.response-output-error').show();
            }
            if (userEmail === "") {
                $('.email').after('<span class="required">The field is required.</span>');
                $('.response-output-error').show();
                }
                if (userPhone === "") {
                        $('.telephone').after('<span class="required">The field is required.</span>');
                        $('.response-output-error').show();
        }
        if(userInterest === "") {
                $('.interest').after('<span class="required">The field is required.</span>');
                $('.response-output-error').show();
            }
            if(userMessage === "") {
                    $('.message').after('<span class="required">The field is required.</span>');
                    $('.response-output-error').show();
                }

                $('.name').val('');
                $('.email').val('');
                $('.telephone').val('');
                $('.interest').val('');
                $('.message').val('');

        })





})