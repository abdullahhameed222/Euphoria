document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header__nav'); // Select the navigation element

  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    nav.classList.toggle('heade__nav-open'); // Toggle 'nav-open' class on the navigation
  });
});
