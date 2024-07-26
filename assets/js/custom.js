$( document ).ready(function() {
    $('#register').modal('show');
});
$( document ).ready(function() {
    $('#login').modal('show');
});
let isShowpassword = false;
const togglePassword = document
        .querySelector('.togglePassword');
    const password = document.querySelector('.myPassword');
    togglePassword.addEventListener('click', () => {
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
    });