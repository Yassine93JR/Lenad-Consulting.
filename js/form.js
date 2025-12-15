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
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            const currentLang = localStorage.getItem('preferredLanguage') || 'fr';
            submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Envoi en cours...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Success
                formMessage.className = 'form-message success';
                formMessage.textContent = getTranslation('form.success');
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Hide message after 5 seconds
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
                
                // In a real application, you would send the data to a server:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         name: name,
                //         email: email,
                //         subject: subject,
                //         message: message
                //     })
                // })
                // .then(response => response.json())
                // .then(data => {
                //     // Handle success
                // })
                // .catch(error => {
                //     // Handle error
                // });
            }, 1000);
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

