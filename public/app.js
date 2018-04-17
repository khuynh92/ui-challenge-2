'use strict';

$(document).ready(function () {
  var $textInput = $('#text-input');
  var $checkbox1 = $('#checkbox-1')

  $textInput.on('focusout', () => {
    $textInput.css({'border':'1px solid lightgray',});
    if (!$textInput.val()) {
      $textInput.css({'border-color':'red'});
      $('#error').removeClass('hidden');
    } else $('#error').addClass('hidden');
  });

  $("input[type=checkbox]").on('click', function() {
    ($(this).next().toggleClass('unchecked-box'));
  })

  $("input[type=radio").on('click', function() {
    if($(this).next().hasClass('circle') && ($(this).next().attr('id') === 'radio-1')) {
      console.log($(this).next().attr('id'));
    $(this).next().addClass('checked-circle');
    $(this).parent().parent().find('#radio-2').removeClass('checked-circle');
    } else {
      $(this).next().addClass('checked-circle');
      $(this).parent().parent().find('#radio-1').removeClass('checked-circle');
    }
  });
});