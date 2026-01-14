document.addEventListener('DOMContentLoaded', function () {
    // Add fade-in animation to elements
    const fadeElements = [
        { selector: '.profile-image', delay: 0 },
        { selector: '.hero-content h1', delay: 0.2 },
        { selector: '.hero-content .subtitle', delay: 0.4 },
        { selector: '.hero-content .cta-button', delay: 0.6 },
        { selector: '.aboutme-content', delay: 0.8 },
        { selector: '.project-card', delay: 1.0 },
        { selector: '.skills-card', delay: 1.2 },
        { selector: '.contact-form', delay: 1.4 },
        { selector: '.contact-card', delay: 1.6 }
    ];

    fadeElements.forEach(({ selector, delay }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.animationDelay = `${delay + (index * 0.1)}s`;
        });
    });

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent!');
            contactForm.reset();
        });
    }
});