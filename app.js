var swiper = new Swiper(".card_slider", {
  loop: true,
  slidesPerView: 4,
  speed: 1000,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev"
      },
        breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
      var swiper = new Swiper(".review-slider",{
        loop:true,
        spaceBetween:40,
        autoplay: {
          delay: 7500,
          diableOnInteraction: false,
        },

        breakpoints:{
          0:{
            slidesPerView: 1,
          },
          768:{
            slidesPerView:2,
          },
          1020:{
            slidesPerView:2,
          },
        },
      });