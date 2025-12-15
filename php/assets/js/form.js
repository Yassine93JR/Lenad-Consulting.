// Validation et Animation du Formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        // La validation côté serveur se fait en PHP
        // Ici on ajoute juste des animations
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Animation de soumission
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
        });
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        
        // Réactiver après un délai (le PHP gérera la vraie soumission)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 2000);
    });

    // Animation des champs au focus
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.2,
            });
        });
        
        input.addEventListener('blur', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
            });
        });
    });
});

