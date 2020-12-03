$('form').submit(function() {
    // для читаемости кода
    var $form = $(this);

    // чистим ошибки
    $form.find('.error').remove();

    // проверяем поле с именем пользователя
    if ($form.find('input[name=firstname]').val() === '') {
        // добавляем текст ошибки
        $form.find('input[name=firstname]')
          .before('<div class="error">Введите имя</div>');
        // прерываем дальнейшую обработку
        return false;
    }

    // всё хорошо – отправляем запрос на сервер
    $.post(
        $form.attr('action'), // ссылка куда отправляем данные
        $form.serialize()     // данные формы
    );

    // отключаем действие по умолчанию
    $('#formModal').modal('show');
    $('input[type="text"], textarea').val('')
    $('input[type="tel"], textarea').val('')
    return false;
});
