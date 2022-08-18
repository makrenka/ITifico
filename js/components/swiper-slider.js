const swiper = new Swiper('.main__articles-slider-list', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // slidesPerView: 4,
  // spaceBetween: 30,
  // width: 1230,
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
      width: 768,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 576,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
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
      width: 768,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      width: 576,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
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
  spaceBetween: 30,   
  slidesPerView: 4,     
  grid: {
      fill: 'row',
      rows: 2,
  },
  

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
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