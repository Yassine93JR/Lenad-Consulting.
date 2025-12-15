// Galerie avec Lightbox et Animations
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        return item.querySelector('img').src;
    });

    // Ouvrir lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightboxImg.src = images[currentIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animation d'entrée
        gsap.from(lightbox, {
            opacity: 0,
            duration: 0.3,
        });
        gsap.from(lightboxImg, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
        });
    }

    function closeLightbox() {
        gsap.to(lightbox, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    function updateLightboxImage() {
        gsap.to(lightboxImg, {
            opacity: 0,
            scale: 0.8,
            duration: 0.2,
            onComplete: () => {
                lightboxImg.src = images[currentIndex];
                gsap.to(lightboxImg, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                });
            }
        });
    }

    // Event listeners
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation clavier
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Effet de zoom au survol (style Poinciana)
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            
            gsap.to(img, {
                x: x,
                y: y,
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(img, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    });
});

