 import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

var swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  cssMode: false,
  loop:true,
  draggable:true,
  navigation: {
    nextEl: '.mySwiper1 .swiper-button-next',
    prevEl: '.mySwiper1 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper1 .swiper-pagination',
  },
  mousewheel: false,
  keyboard: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  cssMode: false,
  loop:true,  
  
  navigation: {
    nextEl: '.new-arrivals .swiper-button-next',
    prevEl: '.new-arrivals .swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 38,
      centeredSlides: false,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    }
},
  mousewheel: false,
  keyboard: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 23,
  loop: true,
  cssMode: false,
  slidesPerView: 1,
  draggable:true,

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 10,
    },

    700: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
  },
    500: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
  },
},

  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
    draggable: true,
  },
  mousewheel: false,
  keyboard: true,
});

var swiper5 = new Swiper(".mySwiper5", {
  spaceBetween: 22,
  speed: 700,
  slidesPerView: 3,
  cssMode: true,
  freeMode: true,

  watchSlidesProgress: true,
  direction: 'vertical',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  thumbs: {
    swiper: swiper5
  },
});

