const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav__list");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("nav__open");
});
