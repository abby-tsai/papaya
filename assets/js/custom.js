// loading
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".spinner-loader").style.visibility = "visible";
  } else {
    document.querySelector(".spinner-loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// Master Slider
var slider = new MasterSlider();
slider.setup('masterslider', {
  width: 1920,
  height: 1080,
  minHeight: 450,
  space: 0,
  start: 1,
  grabCursor: false,
  layout: "fillwidth",
  wheel: false,
  autoplay: false,
  instantStartLayers: true,
  loop: true,
  view: "basic",
  responsive: true
});
slider.control('arrows');

//swiper-items-5
var swiper2 = new Swiper(".swiper-items-5", {
  slidesPerView: 2,
  spaceBetween: 15,
  centerSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },
});
//swiper-items-3
var swiper2 = new Swiper(".swiper-items-3", {
  slidesPerView: 1,
  spaceBetween: 8,
  centerSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  },
});


// 首頁banner不要疊在header下面
$(document).ready(function () {
  $(".mt-headerHeight-js").css("margin-top", $(".header").height());
});


$(document).ready(function () {
  /* This is basic - uses default settings */
  $("a.iframe").fancybox();
});