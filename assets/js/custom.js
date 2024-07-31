

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
});