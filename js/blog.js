'use strict';
$(function () {
    
$(document).on('click', 'input#submit', function () {
    let userName = $('#author').val();
    let userEmail = $('#email').val();
    let comment = $('#comment').val();

    if(userName && userEmail && comment){
        let fullBox = `
        <div class="comment main-comment new-comment">
                                <div class="comment-inner clearfix">
                                    <div class="comment-content">
                                        <div class="comment-author-image">
                                            <img alt="" src="images/9b53c1806cba99025d98d9a90fc1aac7.png"
                                                class="avatar avatar-100 photo" height="100" width="100"> </div>
                                        <div class="comment-content-main">
                                            <div class="comment-header">
                                                <span class="author-name">${userName}</span>
                                                <div class="comment-text">
                                                    <p>${comment}</p>
                                                </div>
                                            </div>
                                            <div class="comment-date-reply">
                                                <span class="comment-date">March 13, 2019 at 2:20 am</span>
                                                <a rel="nofollow" class="comment-reply-link" href = "#">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        `

        $(fullBox).appendTo('.comment-list');
    }
    $('#author').val('');
    $('#email').val('');
    $('#comment').val('');
})

})