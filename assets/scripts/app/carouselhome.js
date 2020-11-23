$(document).ready(function() {
  $('#headerCarousel').carousel({
      interval: 3500
  });
  let totalItems = $('.header_carousel__carousel-item').length;
  let currentIndex = $('.header_carousel__carousel-item.active').index() + 1;
  $('.header_carousel__num-controller').html(''+currentIndex+'/'+totalItems+'');

  $('#headerCarousel').on('slid.bs.carousel', function(e) {
    currentIndex = $('.header_carousel__carousel-item.active').index() + 1;
    $('.header_carousel__num-controller').html(''+currentIndex+'/'+totalItems+'');
  });
});

$(document).ready(function() {
  $('#mainServCarousel').carousel({
      interval: 4000
  });
  let totalItems = $('.main-services__module').length;
  let currentIndex = $('.main-services__module.active').index() + 1;
  $('.main-services__num-controller').html(''+currentIndex+'/'+totalItems+'');

  $('#mainServCarousel').on('slid.bs.carousel', function(e) {
    currentIndex = $('.main-services__module.active').index() + 1;
    $('.main-services__num-controller').html(''+currentIndex+'/'+totalItems+'');
  });
});




