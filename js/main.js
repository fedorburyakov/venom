const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const closeButton = document.querySelector('.menu-close');

menuButton.addEventListener("click", () => {
  menu.classList.add('is-active');
  closeButton.classList.add('is-active');
})

closeButton.addEventListener("click", () => {
  menu.classList.remove('is-active');
  closeButton.classList.remove('is-active');
})