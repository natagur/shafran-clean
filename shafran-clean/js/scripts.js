$(function() {
    $("#tel").mask("+7(999) 999-9999");
});
$(document).on('keyup', '.form-text input', function(event){
    if($(this).val().length > 0){
        $(this).addClass('active');
    }
    else{
        $(this).removeClass('active');
    }
  
    event.preventDefault();
  });