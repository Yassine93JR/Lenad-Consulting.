@php
    $currentLang = session('lang', 'fr');
    $translations = [
        'fr' => [
            'home' => 'Accueil',
            'about' => 'À propos',
            'career' => 'Parcours',
            'services' => 'Services',
            'publications' => 'Publications',
            'teaching' => 'Enseignement',
            'gallery' => 'Galerie',
            'contact' => 'Contact',
        ],
        'en' => [
            'home' => 'Home',
            'about' => 'About',
            'career' => 'Career',
            'services' => 'Services',
            'publications' => 'Publications',
            'teaching' => 'Teaching',
            'gallery' => 'Gallery',
            'contact' => 'Contact',
        ],
    ];
@endphp

<header class="header" id="header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a href="#home" class="logo">
                    <img src="{{ asset('images/logo.png') }}" alt="Lenad Consulting">
                </a>
                
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="#home" class="nav-link">{{ $translations[$currentLang]['home'] }}</a></li>
                    <li><a href="#about" class="nav-link">{{ $translations[$currentLang]['about'] }}</a></li>
                    <li><a href="#career" class="nav-link">{{ $translations[$currentLang]['career'] }}</a></li>
                    <li><a href="#services" class="nav-link">{{ $translations[$currentLang]['services'] }}</a></li>
                    <li><a href="#publications" class="nav-link">{{ $translations[$currentLang]['publications'] }}</a></li>
                    <li><a href="#teaching" class="nav-link">{{ $translations[$currentLang]['teaching'] }}</a></li>
                    <li><a href="#gallery" class="nav-link">{{ $translations[$currentLang]['gallery'] }}</a></li>
                    <li><a href="#contact" class="nav-link">{{ $translations[$currentLang]['contact'] }}</a></li>
                </ul>
                
                <div class="language-switcher">
                    <a href="{{ route('lang.change', 'fr') }}" class="lang-btn {{ $currentLang === 'fr' ? 'active' : '' }}">FR</a>
                    <a href="{{ route('lang.change', 'en') }}" class="lang-btn {{ $currentLang === 'en' ? 'active' : '' }}">EN</a>
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

