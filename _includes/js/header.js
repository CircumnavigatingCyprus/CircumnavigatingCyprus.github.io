$(function() {
  $('.dropdown').hover(openDropdown, collapseDropdown);
  $('.menu-icon').click(toggleMobileDropdown);
});

function toggleMobileDropdown(evt) {
  $('.mobile-nav-menu').toggleClass('visually-hidden');
  $('.menu-icon').toggleClass('active');
}

function openDropdown(evt) {
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