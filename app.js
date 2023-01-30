const toggle = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.nav__links-items li');

hamburger.addEventListener('click', () => {
  toggle.classList.toggle('show');
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  toggle.classList.remove('show');
  close.style.display = 'none';
});

menuLinks.forEach((menu) => {
  menu.addEventListener('click', () => {
    toggle.classList.remove('show');
    close.style.display = 'none';
  });
})
