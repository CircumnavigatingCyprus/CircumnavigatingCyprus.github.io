$("#recent-post-tiles").owlCarousel({
  loop: true,
  items: 3,
  margin: 10,
  dots: false,
  nav: true,
  navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 3,
      nav: true
    }
  }
});