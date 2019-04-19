$(function() {
  $('#lastName, #firstName').focus(function() {
    $(this).css('border','3px solid green');
    $('#lastName, #firstName').focusout(function() {
      $(this).css('border','3px solid red');

    });
  });
});
