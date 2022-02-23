// NAVIGATION MENU

const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav__list");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("nav__open");
});

// BUTTON CHANGE PORTFOLIO IMAGES

const portfolioImages = document.querySelectorAll(".portfolio__item");

const portfolioBtns = document.querySelector(".portfolio__buttons");

portfolioBtns.addEventListener("click", changeImage);

function changeImage(event) {
  if (event.target.classList.contains("button_transparent")) {
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${event.target.dataset.season}/${
          index + 1
        }.jpg`)
    );
  }
}

// CACHE IMAGES

const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${seasons[i]}/${i}.jpg`;
  }
}
preloadImages();
