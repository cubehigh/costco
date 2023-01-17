const visualSwiper = new Swiper(".visual", {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visual .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".visual .swiper-button-next",
    prevEl: ".visual .swiper-button-prev",
  },
  speed: 1000,
  loop: true,
});

const whatAboutSwiper = new Swiper("#what_about .swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: ".outer .bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".outer .swiper-button-next",
    prevEl: ".outer .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  loop: true,
});

const flexSwiper = new Swiper("#luxury_flex .swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: "#luxury_flex .bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#luxury_flex .swiper-button-next",
    prevEl: "#luxury_flex .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  loop: true,
});

const brandSwiper = new Swiper("#brand .outer .slider1", {
  navigation: {
    nextEl: "#brand .outer .swiper-button-next",
    prevEl: "#brand .outer .swiper-button-prev",
  },
  pagination: {
    el: "#brand .outer .slider1 .bullets",
    clickable: true,
  },
  spaceBetween: 1,
});

const brandSaleSwiper = new Swiper("#brand_sale .swiper", {
  navigation: {
    nextEl: "#brand_sale .container .slide_control .swiper-button-next",
    prevEl: "#brand_sale .container .slide_control .swiper-button-prev",
  },
  pagination: {
    el: "#brand_sale .container .slide_control .swiper-pagination",
    type: "fraction",
  },
});

const todaysHotSwiper = new Swiper("#today_hot .todays_hot_slide", {
  navigation: {
    nextEl: "#today_hot .todays_hot_container .swiper-button-next",
    prevEl: "#today_hot .todays_hot_container .swiper-button-prev",
  },
  pagination: {
    el: "#today_hot .todays_hot_slide .bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const costcoHereSwiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
const costcoHereSwiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: costcoHereSwiper,
  },
});
