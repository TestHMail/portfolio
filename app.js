// Home animation
const logo = document.getElementById('logo-img');
const leftContent = document.getElementById('left-content');

window.onload = function() {
    logo.classList.add('loaded');
    leftContent.classList.add('loaded');
}

// Other elements
const carouselItems = document.querySelectorAll('.carousel-item');
const skillItems = document.querySelectorAll('#skill-icon');

const contactSection = document.getElementById('contatti');
const contactItems = document.querySelectorAll('#contacts-item')

// Check if element 'el' is in viewport - with offset
const isInViewport = function(el, offset) {
    const rect = el.getBoundingClientRect();
    
    return (rect.top > 0 && rect.bottom + offset <= (window.innerHeight || document.documentElement.clientHeight));
};

// Run for each concerned element
const run = () => {
    carouselItems.forEach(item => {
        if(isInViewport(item, 0)) {
            item.classList.add('show');
        }
    });

    skillItems.forEach(item => {
        if(isInViewport(item, -70)) {
            item.classList.add('show');
        }
    });

    contactItems.forEach(item => {
        if(isInViewport(item, 0)) {
            item.classList.add('show');
        }
    });
}

// Add events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);