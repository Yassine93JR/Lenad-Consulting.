<?php
require_once __DIR__ . '/../config/config.php';
$currentLang = $_SESSION['lang'] ?? 'fr';
?>
<!DOCTYPE html>
<html lang="<?php echo $currentLang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Tidiane Dioh - Fonctionnaire international, Responsable de programme médias à l'OIF. Lenad Consulting - Conseil en Relations Internationales.">
    <title><?php echo SITE_NAME; ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <!-- Lenis Smooth Scroll -->
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>
    
    <!-- Framer Motion (via CDN pour animations) -->
    <script src="https://unpkg.com/framer-motion@11.3.19/dist/framer-motion.js"></script>
    
    <!-- Swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo ASSETS_PATH; ?>/css/style.css">
    <link rel="stylesheet" href="<?php echo ASSETS_PATH; ?>/css/animations.css">
    <link rel="stylesheet" href="<?php echo ASSETS_PATH; ?>/css/responsive.css">
</head>
<body>
    <!-- Cursor Follower -->
    <div class="cursor-follower"></div>
    <div class="cursor-dot"></div>
    
    <!-- Header -->
    <header class="header" id="header">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-content">
                    <a href="#home" class="logo">
                        <img src="<?php echo ASSETS_PATH; ?>/images/logo.png" alt="Lenad Consulting">
                    </a>
                    
                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="#home" class="nav-link"><?php echo t('nav.home'); ?></a></li>
                        <li><a href="#about" class="nav-link"><?php echo t('nav.about'); ?></a></li>
                        <li><a href="#career" class="nav-link"><?php echo t('nav.career'); ?></a></li>
                        <li><a href="#services" class="nav-link"><?php echo t('nav.services'); ?></a></li>
                        <li><a href="#publications" class="nav-link"><?php echo t('nav.publications'); ?></a></li>
                        <li><a href="#teaching" class="nav-link"><?php echo t('nav.teaching'); ?></a></li>
                        <li><a href="#gallery" class="nav-link"><?php echo t('nav.gallery'); ?></a></li>
                        <li><a href="#contact" class="nav-link"><?php echo t('nav.contact'); ?></a></li>
                    </ul>
                    
                    <div class="language-switcher">
                        <a href="?lang=fr" class="lang-btn <?php echo $currentLang === 'fr' ? 'active' : ''; ?>">FR</a>
                        <a href="?lang=en" class="lang-btn <?php echo $currentLang === 'en' ? 'active' : ''; ?>">EN</a>
                    </div>
                    
                    <div class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>

