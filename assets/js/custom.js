$(window).scroll(function() {
    if ($(this).scrollTop() > 73){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
});
// current date in input field value
// $(document).ready(function(){
//   const d = new Date();
//   $('#start-date').attr('placeholder',  d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear()  );
// })

// calcution flexible amount 
$(document).on('input', '#flexible-amount', function() {
  $('.calculation-amount span').html( $(this).val() );
});

// testimonial owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }
})