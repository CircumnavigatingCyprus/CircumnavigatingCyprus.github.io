{% raw %}

$(function($) {
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'circumnavigatingCY',
    clientId: '05613cb4e3f34e36b44e826c09edb51f',
    accessToken: '189275376.05613cb.b323b87212b0454b9bf88c636ea50889',
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