$('#navbarCol-1, #navbarCol-2').on('shown.bs.dropdown', function () {
    $(this).parents('body').addClass('body_state_off');
    $(".content").addClass('zindexminus');
    if ($(".navbar").hasClass("navbar-light")) {
      $('.navbar-light')
        .addClass('navbar-dark')
        .addClass('ohhimark')
        .removeClass('navbar-light');
      } else {

      };
    $(window).scrollTop(0);
});

 $('#navbarCol-1, #navbarCol-2').on('hide.bs.dropdown', function () {
    $(this).parents('body').removeClass('body_state_off');
    $(".content").removeClass('zindexminus');
    if ($(".navbar").hasClass("ohhimark")) {
      $('.navbar-dark')
        .addClass('navbar-light')
        .removeClass('navbar-dark');
      } else {

      };
});
