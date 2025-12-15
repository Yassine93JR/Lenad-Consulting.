@php
    $currentLang = session('lang', 'fr');
    $texts = [
        'fr' => [
            'title' => 'Tidiane Dioh',
            'subtitle' => 'Fonctionnaire international, Responsable de programme médias à l\'OIF',
            'text' => 'Expert reconnu dans le domaine des médias et de la communication dans l\'espace francophone.',
            'cta' => 'Découvrir',
        ],
        'en' => [
            'title' => 'Tidiane Dioh',
            'subtitle' => 'International Civil Servant, Media Programme Manager at the OIF',
            'text' => 'Recognized expert in media and communication in the French-speaking world.',
            'cta' => 'Discover',
        ],
    ];
    $t = $texts[$currentLang];
@endphp

<section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
        <div class="container">
            <div class="hero-text-wrapper">
                <h1 class="hero-title" data-split-text>{{ $t['title'] }}</h1>
                <p class="hero-subtitle" data-split-text>{{ $t['subtitle'] }}</p>
                <p class="hero-text">{{ $t['text'] }}</p>
                <a href="#about" class="btn btn-primary hero-cta">{{ $t['cta'] }}</a>
            </div>
        </div>
    </div>
    <div class="hero-scroll-indicator">
        <span></span>
    </div>
</section>

