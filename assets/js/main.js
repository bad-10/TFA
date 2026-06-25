document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerToggle');
    const wrapper = document.querySelector('nav .wrapper');
    if (burger && wrapper) {
        burger.addEventListener('click', () => {
            wrapper.classList.toggle('open');
        });
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                wrapper.classList.remove('open');
            });
        });
    }
});