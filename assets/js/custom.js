

let isShowpassword = false;
const password = document.querySelector('.myPassword');

$('.togglePassword').click(
    () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type = password
        .getAttribute('type') === 'password' ? 
        'text' : 'password';
        isShowpassword = type === 'password' ?
        false : true;
    password.setAttribute('type', type);
    // Toggle the custom-fa-eye-slash class
    isShowpassword ?
    $(".togglePassword").addClass("custom-fa-eye-slash") : $(".togglePassword").removeClass("custom-fa-eye-slash");
}
);

// calcution flexible amount 
$(document).on('input', '#flexible-amount', function() {
    $('#flexible-amount-field').val( $(this).val() );
});

$("#calcPremium").click(function(){
    $(".annual-premium-list-item").css("background-color", "#D0EDFF");
    $(".annual-premium-list-item h3").css("color", "#253B6A");
    $(".adjust-detail-transfer-deposit-section").show()
});
// scroll down
$(document).ready(function() {
    $(".scroll-btn").click(function(event){
        $('.firtees-cards-section-scrollable').animate({scrollTop: '+=500px'}, 800);
    });
    if ($(window).width() < 767) {
    $(".custom-tab-list-view-detail-btn a").html("View");
    }
    $(".conversation-list-item").click(function(event){
        if ($(window).width() < 1400) {
            $ (".conversation-list-block").hide();
            $(".conversation-card-messages-block").show();
            console.log("abc")
        }
    });
    $(".chat-back-arrow .back-arrow").click(function(event) {
        $(".conversation-card-messages-block").hide();
        $ (".conversation-list-block").show();
    })

});
