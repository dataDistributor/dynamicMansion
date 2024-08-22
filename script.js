// script.js

// Optional: Add interactivity or event listeners here

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dynamic Mansion Blockchain website loaded');
    // Example: Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
