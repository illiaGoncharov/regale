let mCar = $('#mainServCarousel');
$(mCar).bind('slid.bs.carousel', function (e) {
  var randomNum = Math.floor((Math.random()*10)+1);
  $('.main-services__img').attr('src', 'images/img-' + randomNum + '.jpg');
});
