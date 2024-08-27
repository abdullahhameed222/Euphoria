document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.header__nav'); // Select the navigation element

  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    nav.classList.toggle('header__nav-open'); 
  });
});
