{% raw %}

$(function($) {
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'circumnavigatingCY',
    userId: '3052314434.1677ed0',
    accessToken: '3052314434.1677ed0.1609f26296c34ccca0d38cb563b986cc',
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