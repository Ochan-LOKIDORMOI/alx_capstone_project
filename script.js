// Togo icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// JavaScript for responsive navigation
let sections = document.querySelectorAll('section');
let navLinkks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinkks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*======Sticky navbar======*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove navbar and toggle icon when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    durattion: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .education-content, .skills-content, .contact-content', { origin: 'right' });

// Typed js
const typed = new Typed('.multiText', {
    strings: ['Welcome to my folio!', 'have a great day...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelayo: 1000,
    loop: true
});