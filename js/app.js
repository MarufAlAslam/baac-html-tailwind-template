const hero = document.getElementById("hero");

// change hero background in every 5 seconds
setInterval(() => {
  const random = Math.floor(Math.random() * 3) + 1;
  hero.style.backgroundImage = `linear-gradient(#003E80, rgba(0,0,0,0.5)), url(../img/hero${random}.jpg)`;

  //   add fade in animation
  hero.classList.add("fade-in");
  setTimeout(() => {
    hero.classList.remove("fade-in");
  }, 5000);
}, 5000);
