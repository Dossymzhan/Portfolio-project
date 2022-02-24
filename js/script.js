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

// ACTIVE CLASS ON BUTTONS

const btnActive = document.querySelectorAll(".button_transparent");

btnActive.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnActive.forEach((el) => {
      el.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// TRANSLATE


