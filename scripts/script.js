window.addEventListener('scroll', () => {
    const content = document.getElementsByTagName('header');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const opacity = Math.min(1, scrollPosition / windowHeight);
    content[0].style.backgroundColor = `rgba(34, 34, 34, ${opacity})`;
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.querySelector('.burger-icon');
  const burgerNav = document.querySelector('.burger-nav');

  burgerIcon.addEventListener('click', function() {
    burgerNav.classList.toggle('active');
  });
});