$(function(){
  $('#twitter-open-modal-link').click(function(evt) {
    evt.preventDefault();
    $('#twitter-modal').removeClass('visually-hidden');
    $('body').addClass('no-scroll');
  });

  $('#twitter-close-modal-link').click(function(evt){
    evt.preventDefault();
    $('#twitter-modal').addClass('visually-hidden');
    $('body').addClass('no-scroll');
  });
});