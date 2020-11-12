$(document).ready(function(){
  $('.dropdown__link-item:eq(0)').hover(function(){
    $(".dropdown__pic").addClass("ser-1");
  }, function () {
    $(".dropdown__pic").removeClass("ser-1");
  });
  $('.dropdown__link-item:eq(1)').hover(function(){
   $(".dropdown__pic").addClass("ser-2");
  }, function () {
    $(".dropdown__pic").removeClass("ser-2");
  });
});
