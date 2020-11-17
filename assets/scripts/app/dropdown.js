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

function dropdownBaseText() {
  $(".dropdown__pic-title").text("Лечение зубов и десен");
  $(".dropdown__pic-text").text("Высокотехнологичные и полностью безболезненные методы лечения зубов и десен. Восстанавливаем правильную анатомию и функциональность, сохраняя естественную эстетику улыбки.");
}

$('.dropdown__link-item:eq(0)').hover(function() {
  $(".dropdown__pic").addClass("ser-1");
  $(".dropdown__pic-title").text("Лечение зубов и десен");
  $(".dropdown__pic-text").text("Высокотехнологичные и полностью безболезненные методы лечения зубов и десен. Восстанавливаем правильную анатомию и функциональность, сохраняя естественную эстетику улыбки.");
}, function () {
  $(".dropdown__pic").removeClass("ser-1");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(1)').hover(function() {
  $(".dropdown__pic").addClass("ser-2");
  $(".dropdown__pic-title").text("Эстетическая стоматология");
  $(".dropdown__pic-text").text("Устранение дефектов зубов и моделирование идеальной улыбки. Долговечный результат благодаря применению современных материалов и технологии.");
}, function () {
  $(".dropdown__pic").removeClass("ser-2");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(2)').hover(function() {
  $(".dropdown__pic").addClass("ser-3");
  $(".dropdown__pic-title").text("Протезирование зубов");
  $(".dropdown__pic-text").text("Надежные, долговечные и полностью биосовместимые конструкции для восстановления одного зуба или всего зубного ряда. Высокотехнологичная диагностика и моделирование для правильной работы зубочелюстной системы.");
}, function () {
  $(".dropdown__pic").removeClass("ser-3");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(3)').hover(function() {
  $(".dropdown__pic").addClass("ser-4");
  $(".dropdown__pic-title").text("Имплантация и хирургия");
  $(".dropdown__pic-text").text("Полностью безболезненное удаление проблемных зубов и установка имплантов с применением малоинвазивного подхода для максимального облегчения реабилитации.");
}, function () {
  $(".dropdown__pic").removeClass("ser-4");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(4)').hover(function() {
  $(".dropdown__pic").addClass("ser-5");
  $(".dropdown__pic-title").text("Исправление прикуса");
  $(".dropdown__pic-text").text("Исправление нарушений положения зубов и восстановление правильной работы всей зубочелюстной системы. Подбор индивидуального решения для создания идеальной улыбки.");
}, function () {
  $(".dropdown__pic").removeClass("ser-5");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(5)').hover(function() {
  $(".dropdown__pic").addClass("ser-6");
  $(".dropdown__pic-title").text("Гнатология");
  $(".dropdown__pic-text").text("Комплексное исследование функциональных расстройств зубочелюстной системы по протоколу Венской Школы Гнатологии.");
}, function () {
  $(".dropdown__pic").removeClass("ser-6");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(6)').hover(function() {
  $(".dropdown__pic").addClass("ser-7");
  $(".dropdown__pic-title").text("Гигиена и профилактика");
  $(".dropdown__pic-text").text("Профессиональная очистка зубов для снятия зубного налета. Профилактика кариеса и заболеваний десны.");
}, function () {
  $(".dropdown__pic").removeClass("ser-7");
  dropdownBaseText();
});

$('.dropdown__link-item:eq(7)').hover(function() {
  $(".dropdown__pic").addClass("ser-8");
  $(".dropdown__pic-title").text("Детская стоматология");
  $(".dropdown__pic-text").text("Бережное лечение и исправление дефектов зубов у детей без стресса и боли. Индивидуальный подход к исправлению прикуса.");
}, function () {
  $(".dropdown__pic").removeClass("ser-8");
  dropdownBaseText();
});



