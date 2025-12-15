// Navigation et interactions principales

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Navigation
    // ============================================
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navOverlay = document.getElementById('nav-overlay');
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Menu burger pour mobile
    const closeMenu = () => {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay?.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
        if (!hamburger || !navMenu) return;
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        navOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
    };

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Ferme le menu sur échappement clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Ferme le menu quand on clique sur un lien (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    });
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active section indicator
    const sections = document.querySelectorAll('.section, .hero');
    
    function updateActiveSection() {
        const scrollPosition = window.pageYOffset + header.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
    
    // ============================================
    // Gallery Lightbox
    // ============================================
    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Images réelles (aucune IA) depuis les dossiers existants — sélection épurée + descriptions
    const imageSources = [
        { src: 'Tidiane_docs_thierno/Tidiane_Dioh-26-00-2.jpg', alt: 'Tidiane Dioh', caption: 'Tidiane Dioh – portrait' },
        { src: 'Tidiane_docs_thierno/tidian_oif.jpg', alt: 'OIF', caption: 'Responsable de programme médias à l’OIF' },
        { src: 'Tidiane_docs_thierno/Tidiane-DIOH-couvrant-les-championnats-du-monde-d’athlétisme-Paris-août-2003.jpg', alt: 'Athlétisme Paris 2003', caption: 'Couverture des mondiaux d’athlétisme 2003' },
        { src: 'Tidiane_docs_thierno/Avec-l’ancien-Premier-ministre-et-Astrophysicien-malien-Cheick-Modibo-DIARRA.jpg', alt: 'Cheick Modibo Diarra', caption: 'Rencontre avec Cheick Modibo Diarra' },
        { src: 'Tidiane_docs_thierno/Avec-l’ancien-Président-du-Bénin-Thomas-Boni-Yayi-1024x1024.jpeg', alt: 'Thomas Boni Yayi', caption: 'Échange avec Thomas Boni Yayi' },
        { src: 'Tidiane_docs_thierno/Avec-lancien-Président-du-Mozambique-Joachim-CHISSANO-1-958x1024.jpg', alt: 'Joachim Chissano', caption: 'Rencontre avec Joachim Chissano' },
        { src: 'Tidiane_docs_thierno/lionsclub_paris1.jpg', alt: 'Lions Club Paris', caption: 'Engagement associatif à Paris' },
        { src: 'Tidiane_docs_thierno/media_afrik.jpg', alt: 'Média Afrik', caption: 'Focus sur les médias africains' },
        { src: 'Tidiane_docs_thierno/oif mali.jpg', alt: 'OIF Mali', caption: 'Mission OIF au Mali' },
        { src: 'Tidiane_docs_thierno/Touba.jpg', alt: 'Touba', caption: 'Touba – patrimoine et culture' },
        { src: 'Tidiane_docs_thierno/tidian-toulouse1-1024x768.jpg', alt: 'Toulouse', caption: 'Parcours universitaire à Toulouse' },
        { src: 'Tidiane_docs_thierno/manuD-1024x681.jpg', alt: 'Conférence', caption: 'Intervention lors d’une conférence' },
        { src: 'Tidiane_docs_thierno/p10907432.jpg', alt: 'Terrain', caption: 'Travail de terrain' },
        { src: 'Tidiane_docs_thierno/P1090751.jpg', alt: 'Échange', caption: 'Échanges institutionnels' },
        { src: 'Tidiane_docs_thierno/DCP_1220.jpg', alt: 'Plateau TV', caption: 'Passage média' },
        { src: 'Tidiane_docs_thierno/BAD_8276.JPG', alt: 'BAD', caption: 'Collaboration avec la BAD' },
        { src: 'Tidiane_docs_thierno/BAD_8277.JPG', alt: 'BAD', caption: 'Rencontre institutionnelle' }
    ];

    // Load gallery images
    function loadGalleryImages() {
        imageSources.forEach((item, index) => {
            const img = document.createElement('div');
            img.className = 'gallery-item';
            const imgElement = document.createElement('img');
            imgElement.src = item.src;
            imgElement.alt = item.alt || `Image ${index + 1}`;
            imgElement.loading = 'lazy';
            imgElement.onerror = function() {
                // Si l'image ne charge pas, on la cache
                img.style.display = 'none';
            };
            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = item.caption || item.alt || '';

            img.appendChild(imgElement);
            img.appendChild(caption);
            galleryGrid.appendChild(img);
            
            galleryImages.push({
                src: item.src,
                alt: item.alt || `Image ${index + 1}`,
                caption: item.caption || ''
            });
            
            img.addEventListener('click', function() {
                openLightbox(index);
            });
        });
    }
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = galleryImages[index].src;
        lightboxImg.alt = galleryImages[index].alt;
        const captionEl = document.getElementById('lightbox-caption');
        if (captionEl) {
            captionEl.textContent = galleryImages[index].caption || '';
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxImg.alt = galleryImages[currentImageIndex].alt;
        const captionEl = document.getElementById('lightbox-caption');
        if (captionEl) {
            captionEl.textContent = galleryImages[currentImageIndex].caption || '';
        }
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxImg.alt = galleryImages[currentImageIndex].alt;
        const captionEl = document.getElementById('lightbox-caption');
        if (captionEl) {
            captionEl.textContent = galleryImages[currentImageIndex].caption || '';
        }
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    // ============================================
    // Hero banner rotateur (bannières défilantes)
    // ============================================
    const bannerSlides = Array.from(document.querySelectorAll('.banner-slide'));
    let currentBanner = 0;
    if (bannerSlides.length > 0) {
        setInterval(() => {
            bannerSlides[currentBanner].classList.remove('active');
            currentBanner = (currentBanner + 1) % bannerSlides.length;
            bannerSlides[currentBanner].classList.add('active');
        }, 5000); // vitesse moyenne
    }
    
    // Load gallery on page load
    if (galleryGrid) {
        loadGalleryImages();
    }
    
    // ============================================
    // Scroll Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add specific animation classes
                if (entry.target.classList.contains('career-item')) {
                    entry.target.style.animation = 'slideUp 0.8s ease forwards';
                } else if (entry.target.classList.contains('service-card')) {
                    entry.target.style.animation = 'scaleIn 0.6s ease forwards';
                } else if (entry.target.classList.contains('publication-card')) {
                    entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
                } else {
                    entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.career-item, .service-card, .publication-card, .expertise-item, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // ============================================
    // Back to top button (optional)
    // ============================================
    let backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-accent);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 999;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

