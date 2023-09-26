function openNav() {
  document.getElementById("mySidenav").style.transform = "translateX( 0 )";
  document.body.style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.transform = "translateX(100%)";
  document.body.style.overflow = "scroll";
  document.querySelector("html").style.overflow = "scroll";
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

var swiper = new Swiper(".courses-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
$(document).ready(function () {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    autoSize: true,
    closeClick: false,
    // openEffect: "none",
    // closeEffect: "none",
  });
});
