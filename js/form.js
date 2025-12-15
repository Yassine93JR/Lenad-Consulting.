// Formulaire de contact

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validation
            if (!validateForm(name, email, subject, message)) {
                return;
            }
            
            // Construire un mailto pour ouvrir le client mail de l'utilisateur
            const to = 'contact@lenad-consulting.com';
            const mailSubject = subject || 'Contact depuis le site Lenad Consulting';
            const bodyLines = [
                `Nom : ${name}`,
                `Email : ${email}`,
                '',
                message
            ];
            const mailBody = bodyLines.join('\n');
            const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
            
            window.location.href = mailtoLink;
            
            // Afficher un message d'info sur le site
            formMessage.className = 'form-message success';
            formMessage.textContent = getTranslation('form.success');
            formMessage.style.display = 'block';
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Masquer le message après 5s
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    function validateForm(name, email, subject, message) {
        // Reset previous errors
        clearErrors();
        
        let isValid = true;
        
        // Validate name
        if (!name || name.trim().length < 2) {
            showError('name', 'Le nom doit contenir au moins 2 caractères');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showError('email', 'Veuillez entrer une adresse email valide');
            isValid = false;
        }
        
        // Validate subject
        if (!subject || subject.trim().length < 3) {
            showError('subject', 'Le sujet doit contenir au moins 3 caractères');
            isValid = false;
        }
        
        // Validate message
        if (!message || message.trim().length < 10) {
            showError('message', 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }
        
        if (!isValid) {
            formMessage.className = 'form-message error';
            formMessage.textContent = getTranslation('form.error');
            formMessage.style.display = 'block';
        }
        
        return isValid;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '#dc3545';
            
            // Create error message element
            let errorMsg = field.parentElement.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('span');
                errorMsg.className = 'error-message';
                errorMsg.style.cssText = 'color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
                field.parentElement.appendChild(errorMsg);
            }
            errorMsg.textContent = message;
        }
    }
    
    function clearErrors() {
        const fields = contactForm.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
            const errorMsg = field.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    }
    
    function getTranslation(key) {
        // Get current language
        const currentLang = localStorage.getItem('preferredLanguage') || 'fr';
        
        // Access translations from language.js (if available globally)
        if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        
        // Fallback translations
        const fallback = {
            fr: {
                'form.success': 'Message envoyé avec succès !',
                'form.error': 'Une erreur est survenue. Veuillez réessayer.'
            },
            en: {
                'form.success': 'Message sent successfully!',
                'form.error': 'An error occurred. Please try again.'
            }
        };
        
        return fallback[currentLang] && fallback[currentLang][key] ? fallback[currentLang][key] : key;
    }
});

