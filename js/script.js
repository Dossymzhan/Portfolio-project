const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav__list");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("nav__open");
});

// const navPhone = (document.getElementById("nav-list").style.display = "none");

// navPhone.addEventListener("click", () => {
//   navPhone.style.display = "flex";
// });
