let mCar = $('#mainServCarousel');
$(mCar).bind('slid.bs.carousel', function (e) {
  var randomNum = Math.floor((Math.random()*6)+1);
  $('.main-services__img').attr('src', 'blocks/main-services/__img/main-services-img-' + randomNum + '.jpg');
});
