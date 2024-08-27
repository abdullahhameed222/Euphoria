import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  cssMode: true,
  loop:true,  
  navigation: {
    nextEl: '.mySwiper1 .swiper-button-next',
    prevEl: '.mySwiper1 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper1 .swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  cssMode: true,
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
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 23,
  slidesPerView: 1,
  centeredSlides: true,
  loop:true,
  cssMode: true,

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 23,
   },

    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
      centeredSlides: true,
  },
    500: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
      centeredSlides: true,

  }
},
  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true
  },
});



