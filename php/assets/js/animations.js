// Animations GSAP Avancées
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animation d'entrée Hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroText = document.querySelector('.hero-text');
    const heroCta = document.querySelector('.hero-cta');

    if (heroTitle) {
        gsap.from(heroTitle, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
        });
    }

    if (heroSubtitle) {
        gsap.from(heroSubtitle, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
        });
    }

    if (heroText) {
        gsap.from(heroText, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.6,
            ease: 'power2.out',
        });
    }

    if (heroCta) {
        gsap.from(heroCta, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: 0.9,
            ease: 'back.out(1.7)',
        });
    }

    // Parallaxe Hero
    gsap.to('.hero-background', {
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
    });

    // Reveal animations pour toutes les sections
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    revealElements.forEach((el, index) => {
        gsap.from(el, {
            y: 60,
            opacity: 0,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    });

    // Split text animation
    const splitTextElements = document.querySelectorAll('[data-split-text]');
    splitTextElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            el.appendChild(span);
            
            gsap.from(span, {
                y: 50,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.02,
                ease: 'power3.out',
            });
        });
    });

    // Pinning sections (effet de scroll fixe)
    const pinSections = document.querySelectorAll('.section[data-pin]');
    pinSections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: '+=200%',
            pin: true,
            pinSpacing: true,
        });
    });
});

