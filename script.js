/* Mobile Navigation */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

/* Header Background on Scroll */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)'; // Keep consistent for this design or change to transparent if hero handles it
        header.style.boxShadow = 'none';

        // Optional: Transparent on very top if desired, but for this dark theme keeping it dark is safer
        // To make it transparent at top:
        // header.style.backgroundColor = 'transparent';
    }
});

/* Active Link on Scroll */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Offset for header height
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (sectionLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionLink.classList.add('active');
            } else {
                sectionLink.classList.remove('active');
            }
        }
    });
}


window.addEventListener('scroll', scrollActive);

/* --- ANIMATION OBSERVER --- */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
});

