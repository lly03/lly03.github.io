const navMenu = document.querySelectorAll('.nav_menu');

navMenu.forEach((nav) => {
    nav.addEventListener('click', () => {
        removeActiveNav();
        nav.classList.add('active');
    })
})


const removeActiveNav = () => {
    navMenu.forEach((nav) => {
        nav.classList.remove('active');
    })
}