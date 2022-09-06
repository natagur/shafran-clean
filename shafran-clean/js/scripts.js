$(function() {
    $("input[type = 'tel']").mask("+7(999) 999-9999");
});
$(document).on('keyup', '.form-text input, textarea', function(event){
    if($(this).val().length > 0){
        $(this).addClass('active');
    }
    else{
        $(this).removeClass('active');
    }
  
    event.preventDefault();
  });

// popup//
$(document).on('click', '.banner-link', function(event){
    $('.popup').show();
    $('body').addClass('body-scroll');
  
    event.preventDefault();
});
$(document).on('click', '.close', function(event){
    $('.popup').hide();
    $('body').removeClass('body-scroll');
  
    event.preventDefault();
});