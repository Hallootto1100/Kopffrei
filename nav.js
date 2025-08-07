const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
});
