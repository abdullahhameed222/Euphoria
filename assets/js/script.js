document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-nav'); // Select the navigation element

  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active'); // Toggle 'is-active' class on the hamburger
    nav.classList.toggle('header-nav-open'); // Toggle 'nav-open' class on the navigation
  });
});
