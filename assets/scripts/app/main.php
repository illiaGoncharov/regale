<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {
      $name = $_POST['name'];
    }

    if (isset($_POST['tel'])) {
      $tel = $_POST['tel'];
    }

    if (isset($_POST['price'])) {
      $price = $_POST['price'];
    }

    if (isset($_POST['square'])) {
      $square= $_POST['square'];
    }

    if (isset($_POST['type'])) {
      $type = $_POST['type'];
    }

    $to = "ilia.m.goncharov@gmail.com";
    $subject = "Заявка с сайта";
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";

    $message = sprintf("Заявка с сайта\r\n
      Имя отправителя: %s\r\n
      Телефон: %s\r\n
      Тип: %s", $name, $tel);

    $headers = 'From: https://regale.clinic/';
    $headers =. "\r\nContent-Type: text/html; charset=utf-8";

    if(mail($to, $subject, $message, $headers)){
      exit('Спасибо за заказ');
    }
  }
?>
