$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.main-nav').addClass("sticky");
  }
  else{
    $('.main-nav').removeClass("sticky");
  }
});


