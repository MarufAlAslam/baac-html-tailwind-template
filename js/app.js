const hero = document.getElementById("hero");

// change hero background in every 5 seconds
setInterval(() => {
  const random = Math.floor(Math.random() * 2) + 1;
  hero.style.backgroundImage = `linear-gradient(#003E80, rgba(0,0,0,0.5)), url(../img/hero${random}.jpg)`;

  //   add fade in animation
  hero.classList.add("fade-in");
  setTimeout(() => {
    hero.classList.remove("fade-in");
  }, 5000);
}, 5000);

$(".slider").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".menu-btn, .menu-overlay").click(function () {
  $(".main-menu").toggleClass("active");
  $(".menu-overlay").toggleClass("active");
});
