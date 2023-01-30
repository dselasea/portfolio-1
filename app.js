const toggle = document.querySelector(".nav__links");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  toggle.classList.toggle("show");
  close.style.display = "block";
  hamburger.style.display = "none";
})

close.addEventListener("click", () => {
  toggle.classList.remove("show");
  close.style.display = "none";
  hamburger.style.display = "block";
})