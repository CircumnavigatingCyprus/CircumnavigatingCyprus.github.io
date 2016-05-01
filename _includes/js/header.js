$(function() {
  $('.dropdown').hover(openDropdown, collapseDropdown);
  $('.dropdown').focus(openDropdown);
  $('.dropdown').focusout(function(evt) {
    setTimeout(function() {
      if (!$.contains(evt.currentTarget, document.activeElement)) {
        collapseDropdown(evt);
      }
    }, 0);
  });
  $('.menu-icon').click(toggleMobileDropdown);
});

function toggleMobileDropdown(evt) {
  $('.mobile-nav-menu').toggleClass('visually-hidden');
  $('.menu-icon').toggleClass('active');
}

function openDropdown(evt) {
  if ($('.highlight').length > 0 && evt.type === 'focus') {
    console.log($('.highlight'), "SLIIIIIIDE");
    $('.highlight').slideUp(150).promise().done(function() {
      $(this).addClass('visually-hidden');
      $(this).removeClass('highlight');
    });
  }
  var $elem = $(evt.currentTarget).find('ul');
  $elem.hide();
  $elem.removeClass('visually-hidden');
  $elem.slideDown(150);
  $elem.addClass('highlight');
}

function collapseDropdown(evt) {
  var $elem = $(evt.currentTarget).find('ul');
   $elem.slideUp(150).promise().done(function(){
      $elem.addClass('visually-hidden');
      $elem.removeClass('highlight');
    });
}