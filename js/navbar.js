const navMenu = document.querySelectorAll('.nav_menu');
const sections =document.querySelectorAll('section');

/** Click events for nav**/
navMenu.forEach((nav) => {
    nav.addEventListener('click', (e) => {
        removeActiveNav();
        nav.classList.add('active');
    })
})


const removeActiveNav = () => {
    navMenu.forEach((nav) => {
        nav.classList.remove('active');
    })
}

/** Scroll event for nav -> set the nav class to active when scrolled to that section**/
const setToActive = () =>{
    for (const section of sections){

        const rect = section.getBoundingClientRect();

        if(rect.y >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) || rect.y <= 90){
            const sectionId = section.getAttribute('id');
            navMenu.forEach((nav) => {
                const navHref = nav.getAttribute('href').slice(1);
                if (sectionId === navHref) {
                    removeActiveNav();
                    nav.classList.add('active');
                }
            })
       }
    }
}

//DOM listens to the scroll, and runs the setToActive function
document.addEventListener('scroll', () =>{setToActive();});