<?php
// Traitement du formulaire
$formMessage = '';
$formSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validation
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Ici vous pouvez envoyer l'email ou sauvegarder en base de données
            // Exemple : mail(SITE_EMAIL, $subject, $message, "From: $email");
            
            $formSuccess = true;
            $formMessage = t('form.success');
            
            // Réinitialiser les champs
            $name = $email = $subject = $message = '';
        } else {
            $formMessage = 'Email invalide';
        }
    } else {
        $formMessage = t('form.error');
    }
}
?>
<section id="contact" class="section contact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-reveal><?php echo t('nav.contact'); ?></h2>
            <div class="section-divider" data-reveal></div>
        </div>
        
        <div class="contact-content">
            <div class="contact-info" data-reveal>
                <div class="contact-item">
                    <h3>Organisation Internationale de la Francophonie (OIF)</h3>
                    <p>Responsable de programme médias</p>
                    <p>Depuis mars 2004</p>
                </div>
                <div class="contact-item">
                    <h3>Université Paris-III Sorbonne-Nouvelle</h3>
                    <p>Chargé de Cours</p>
                    <p>Depuis septembre 2008</p>
                </div>
                <div class="contact-item">
                    <h3>Lenad Consulting</h3>
                    <p>Fondateur : Tidiane Dioh</p>
                    <p><a href="https://lenad-consulting.com/" target="_blank">https://lenad-consulting.com/</a></p>
                </div>
            </div>
            
            <form class="contact-form" method="POST" action="#contact" data-reveal>
                <?php if ($formMessage): ?>
                    <div class="form-message <?php echo $formSuccess ? 'success' : 'error'; ?>">
                        <?php echo $formMessage; ?>
                    </div>
                <?php endif; ?>
                
                <div class="form-group">
                    <label for="name"><?php echo t('form.name'); ?></label>
                    <input type="text" id="name" name="name" required value="<?php echo isset($name) ? htmlspecialchars($name) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="email"><?php echo t('form.email'); ?></label>
                    <input type="email" id="email" name="email" required value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="subject"><?php echo t('form.subject'); ?></label>
                    <input type="text" id="subject" name="subject" required value="<?php echo isset($subject) ? htmlspecialchars($subject) : ''; ?>">
                </div>
                
                <div class="form-group">
                    <label for="message"><?php echo t('form.message'); ?></label>
                    <textarea id="message" name="message" rows="5" required><?php echo isset($message) ? htmlspecialchars($message) : ''; ?></textarea>
                </div>
                
                <button type="submit" name="submit" class="btn btn-primary">
                    <?php echo t('form.submit'); ?>
                </button>
            </form>
        </div>
    </div>
</section>

