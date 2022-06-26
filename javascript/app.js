document
  .getElementsByClassName("toggle")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("links_div")[0].classList.toggle("show");
  });

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".second-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let on_hover_display = document.getElementsByClassName("on_hover_display");
for (let i = 0; i < on_hover_display.length; i++) {
  on_hover_display[i].id = `on_hover_display${i}`;

  // $(document).ready(function () {
  //   $(`#swiper2-slide${i}`).mouseover(function () {
  //     $(`#on_hover_display${i}`).fadeIn();
  //   });
  //   $(`#swiper2-slide${i}`).mouseleave(function () {
  //     $(`#on_hover_display${i}`).fadeOut();
  //   });
  // });
}

// THE CODE BELOW IS RESPONSIBLE FOR THE HOVERS ON THE SECOND LAYER OR SWIPER 2

let noOfSwiperTwoDivs = document.getElementsByClassName(
  "second-swiper-slide"
).length;
// alert(noOfSwiperTwoDivs);

for (let i = 0; i < noOfSwiperTwoDivs; i++) {
  let currentSlide = document.getElementsByClassName("second-swiper-slide")[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("on_hover_display")[i].style.display =
      "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("on_hover_display")[i].style.display =
      "none";
  });
}
