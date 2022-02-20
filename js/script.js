const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav__list");
const navPhone = (document.getElementById("nav-list").style.display = "flex");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("nav__open");
  navPhone.style.display = "none";
});
