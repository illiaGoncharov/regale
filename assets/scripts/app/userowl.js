$("#carousel").owlCarousel({
      autoplay: true,
      lazyLoad: true,
      loop: true,
      margin: 24,
      /*animateOut: 'fadeOut',
      animateIn: 'fadeIn',*/
      /*responsiveClass: true,*/
      autoHeight: false,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      responsive: {
        0: {
          items: 1
        },

        600: {
          items: 1
        },

        1024: {
          items: 3
        },

        1366: {
          items: 3
        }
      }
    });
