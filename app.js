const toggle = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.nav__links-items li');

// Modal
const modal = document.querySelector('#modal');
const projectBtn = document.querySelectorAll('.projects .btn')
const closeBtn = document.querySelector('.close-btn');

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

// Open Modal
projectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = "block"
  })
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})