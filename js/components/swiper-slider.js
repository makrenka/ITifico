const swiper = new Swiper('.main__articles-slider-list', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,  
  
  breakpoints: {
    1255: {
      slidesPerView: 4,
      spaceBetween: 30,
      width: 1230,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 30,
      width: 1080,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 992,
    },
    828: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 828,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 770,
    },
    690: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 690,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 546,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 390,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 330,
    },
    310: {
      slidesPerView: 1,
      spaceBetween: 10,
      width: 260,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 4,
    clickable: true,    
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

new Swiper('.main__courses-slider-list', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    1255: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 1230,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 1080,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 992,
    },
    828: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 828,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 770,
    },
    690: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 690,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 546,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 390,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 330,
    },
    310: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 290,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 4,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});


new Swiper('.main__swiper-blog', {
  // Optional parameters  

  breakpoints: {
    1255: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },      
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },      
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },     
    },
    828: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },      
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 4,
      },     
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 4,
      },      
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        fill: 'row',
        rows: 3,
      },      
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',    
    clickable: true,
    renderBullet: function (index, className) {      
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
});


new Swiper('.main__rubric-slider-320', {
  // Optional parameters    
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-4',
    prevEl: '.swiper-button-prev-4',
  },


});