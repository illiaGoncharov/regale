let tCar = $('#teamCarousel');
let tIm = $('.team__imgs-container');
function getImage(i) {
  $('.team__imgs-container').eq(i - 1).toggleClass('team__imgs-container_hidden');
  $('.team__imgs-container').eq(i).toggleClass('team__imgs-container_hidden');
}
$(tCar).bind('slid.bs.carousel', function (e) {
  let ci = $('.team__slide.active').index();
  getImage(ci);
});

