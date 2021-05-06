'use strict';
$(function () {
    $(document).on('click', '.appoinment-form', function () {
        $('.appointment-modal').show();
        // $('.container').slideUp(1000);

        $(window).on('click', function (event) {
            if (event.target.id == 'myModal') {
                $('#myModal').css({
                    display: "none"
                });
            }
        });
    })
    /*************** search doctor ****************/
    $(document).on('click', 'input.dr-search-submit', function (e) {
        e.preventDefault();
        let drBox = $('.dr-info-box');
        let searchNameVal = $('input.dr-search-field').val().toLowerCase().trim();
        let searchDepartmentVal = $('select.department-search').children('option:selected').val().toLowerCase().trim();
        // let drName = $('.dr-info-box').find('a.drName').text().toLowerCase();
        // let drDepartment = $('.dr-info-box').find('.skill').text().toLowerCase();
        console.log(`${searchNameVal} - ${searchDepartmentVal}`);

        $(drBox).find('a.drName').filter(function () {
            $(this).parents('.dr-info-box').toggle($(this).text().toLowerCase().indexOf(searchNameVal) > -1)
        });

        $(drBox).find('.skill').filter(function () {
            $(this).parents('.dr-info-box').toggle($(this).text().toLowerCase().indexOf(searchDepartmentVal) > -1)
        });



        // let nameToShow = $(drName.includes(searchNameVal));
        // let departmentToShow = $(drDepartment.includes(searchDepartmentVal));
        // console.log(`${nameToShow} - ${departmentToShow}`);

        // if ($(drName).includes(searchNameVal) || $(drDepartment).includes(searchDepartmentVal)) {
        // console.log(`${drName} - ${drDepartment}`);

        //     $('.dr-info-box').removeClass('active');
        //     $(this).parents('.dr-info-box').addClass('active');
        //     console.log($(this));
        // }

        // for (let i = 0; i < drBox.length; i++) {
        // let drName = $(this).find('a.drName').text().toLowerCase();
        // let drDepartment = $(this).find('.skill').text().toLowerCase();
        // if ($(drName).search(searchNameVal) || $(drDepartment).search(searchDepartmentVal)) {
        //     console.log(`${drName} - ${drDepartment}`);
        //         $('.dr-info-box').removeClass('active');
        //         $(this).addClass('active');
        //         console.log($(this));
        //     }

        // }



        // $("#search").on("keyup", function() {
        //     var inputValue = $(this).val().toLowerCase();
        //     $(".crud-body tr").children().eq(1).filter(function() {
        //       $(this).parent().toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        //     });
        //   });










    })









})