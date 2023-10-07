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

window.addEventListener("load", function () {
  var input = document.querySelector(".country");
  window.intlTelInput(input, {
    separateDialCode: true,
  });
});

document.getElementById("button").addEventListener("click", function () {
  const input = document.getElementById("input");
  const popover = document.getElementById("popover");

  const textToCopy = input.value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      popover.style.display = "block";

      setTimeout(() => {
        popover.style.display = "none";
      }, 3000);
    })
    .catch((error) => {
      console.error("فشل نسخ النص: ", error);
    });
});
// function move() {
//   var elem = document.getElementById("myBar");
//   var label = document.getElementById("demo");
//   var width = 20;
//   var id = setInterval(frame, 10);

//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + "%";
//       if (document.dir == "rtl") {
//         label.style.right = width - 60 + "%";
//       } else {
//         label.style.left = width - 60 + "%";
//       }
//       label.innerHTML = width * 1 + "%";
//     }
//   }
// }
