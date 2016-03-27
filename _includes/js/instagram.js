{% raw %}

$(function($) {
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'circumnavigatingCY',
    accessToken: '3067904632.1677ed0.975541eb24274559b5f205cb9a7c3092',
    sortyBy: 'most-recent',
    template: '<div class="item"><a href="{{link}}"><img src="{{image}}" /></a></div>',
    target: 'instagramCarousel',
    resolution: 'low_resolution',
    after: initOwl
  });
  feed.run();

  function initOwl() {
    $("#instagramCarousel").owlCarousel({
      loop: true,
      items: 5,
      margin: 10,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
  }
}($))

{% endraw %}