/* /////////////  Open & Close Menu //////////// */
const body = document.querySelector("body");
const navToggle = document.querySelector(".nav-toggle");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

overlay.addEventListener("click", () => {
  body.classList.remove("open");
});
