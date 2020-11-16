$('#navbarCol-1').on('shown.bs.dropdown', function () {
    $(this).parents('body').addClass('body_state_off');
    $(".content").addClass('zindexminus');
    if ($(".navbar").hasClass("navbar-light")) {
      $('.navbar-light')
        .addClass('navbar-dark')
        .addClass('ohhimark')
        .removeClass('navbar-light');
      } else {};
    $(window).scrollTop(0);
});
$('#navbarCol-1').on('hide.bs.dropdown', function () {
    $(this).parents('body').removeClass('body_state_off');
    $(".content").removeClass('zindexminus');
    if ($(".navbar").hasClass("ohhimark")) {
      $('.navbar-dark')
        .addClass('navbar-light')
        .removeClass('navbar-dark');
      } else {};
    $('.dropdown__column').click(function(e) {
        e.stopPropagation();
    });
});

$('.navbar-toggler_user_Mobile').on('click', function() {
  if ($("body").hasClass("body_state_off")) {
    setTimeout(function() {
      $('body').removeClass('body_state_off');
      $(".content").removeClass('zindexminus');
    }, 500);
  } else {
    $(this).parents('body').addClass('body_state_off');
    $(".content").addClass('zindexminus');
  }
});

$(document).ready(function(){
  $('.dropdown_user_Mobile__link-item a').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    /*e.preventDefault();*/
  });
});


