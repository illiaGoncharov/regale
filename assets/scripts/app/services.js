$(".header_carousel__main_button").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#formServices").offset().top - 50
  }, 800);
});


