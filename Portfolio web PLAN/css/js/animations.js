// Add animation classes to elements
function addAnimationClasses() {
    // Hero section
    document.querySelector('.hero-content').classList.add('slide-in-left', 'delay-1');
    document.querySelector('.hero-image').classList.add('slide-in-right', 'delay-2');
    
    // About section
    document.querySelector('.about-text').classList.add('fade-in', 'delay-1');
    document.querySelector('.about-quote').classList.add('fade-in', 'delay-2');
    
    // Services section
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in', `delay-${index + 1}`);
    });
    
    // Portfolio section
    document.querySelector('.portfolio-filter').classList.add('fade-in', 'delay-1');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        card.classList.add('scale-in', `delay-${Math.floor(index / 3) + 1}`);
    });
    
    // Contact section
    document.querySelector('.contact-form').classList.add('slide-in-left', 'delay-1');
    document.querySelector('.contact-info').classList.add('slide-in-right', 'delay-2');
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addAnimationClasses();
    initAnimations();
});