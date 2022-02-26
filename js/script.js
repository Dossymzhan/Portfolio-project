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

import i18Obj from "./translate.js";

const translateAttr = document.querySelectorAll("[data-i18n]");

const langEn = document.querySelector(".lang__en");
const langRu = document.querySelector(".lang__ru");

function getTranslate(lang) {
  translateAttr.forEach(function (el) {
    el.textContent = i18Obj[lang][el.dataset.i18n];
  });
}

langEn.addEventListener("click", (e) => {
  e.preventDefault();
  getTranslate("en");
});
langRu.addEventListener("click", (e) => {
  e.preventDefault();
  getTranslate("ru");
});

// ACTIVE LANGUAGE

const langActive = document.querySelectorAll(".lng");

langActive.forEach((lng) => {
  lng.addEventListener("click", (e) => {
    langActive.forEach((el) => {
      el.classList.remove("active-lang");
    });
    lng.classList.add("active-lang");
  });
});




