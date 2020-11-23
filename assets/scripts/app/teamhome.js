let cur = 1;
  $("#teamCarousel").bind('slide.bs.carousel', function (e) {
    if (cur < 3) {
      $('.team__imgs-container.active')
        .addClass('team__imgs-container_hidden')
        .removeClass('team__imgs-container active')
          .next()
            .removeClass('team__imgs-container_hidden')
            .addClass('team__imgs-container active');
      cur = cur + 1;
    } else {
      $('.team__imgs-container.active')
        .removeClass('team__imgs-container active')
        .addClass('team__imgs-container_hidden');
      $('.team__imgs-container_hidden').eq(0)
        .removeClass('team__imgs-container_hidden')
        .addClass('team__imgs-container active');
      cur = 1;
    }
});
