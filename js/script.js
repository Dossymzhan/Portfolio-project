// Naigation Menu
const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav__list");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("nav__open");
});

// Change portfolio images
const portfolioImages = document.querySelectorAll(".portfolio__item");

const portfolioBtns = document.querySelector(".portfolio__buttons");

portfolioBtns.addEventListener("click", function() {
  function changeImage(e) {
    if (e.target.classList.contains("button_transparent")) {
      portfolioImages.forEach(
        (img, index) =>
          (img.src = `./assets/img/${dataset.season}/${index + 1}.jpg`)
      );
    }
  }
});
