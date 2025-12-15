// Cursor Follower Premium
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Mettre à jour la position de la souris
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animer le curseur avec GSAP
    gsap.to({}, {
        duration: 0.01,
        repeat: -1,
        onRepeat: function() {
            // Cursor principal (suivi rapide)
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            // Cursor dot (suivi lent)
            dotX += (mouseX - dotX) * 0.05;
            dotY += (mouseY - dotY) * 0.05;
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';
        }
    });

    // Effets sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .service-card, .nav-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });
});

