let totalItems = $('.header_carousel__carousel-item').length;
let currentIndex = $('.header_carousel__carousel-item.active').index() + 1;
$('.header_carousel__num-controller').html(''+currentIndex+'/'+totalItems+'');

$('#headerCarousel').carousel({
    interval: 3500
});

$('#headerCarousel').on('slide.bs.carousel', function() {
  currentIndex = $('.header_carousel__carousel-item.active').index() + 1;
 $('.header_carousel__num-controller').html(''+currentIndex+'/'+totalItems+'');
});
