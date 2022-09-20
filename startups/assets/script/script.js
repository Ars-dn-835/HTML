$("#gamburger").click(function (){
   $('.header_nav').slideToggle().toggleClass('open');
   $('.header_nav').hasClass('open') ? $(this).html('x') : $(this).html('&equiv;');
});