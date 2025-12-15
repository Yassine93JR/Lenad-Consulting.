@php
    $currentLang = session('lang', 'fr');
    $texts = [
        'fr' => [
            'title' => 'À Propos',
            'text1' => 'Tidiane DIOH est Fonctionnaire international, Responsable de programme médias à l\'Organisation Internationale de la Francophonie (OIF) depuis mars 2004.',
            'text2' => 'Il est considéré aujourd\'hui, par nombre d\'observateurs, comme l\'un des meilleurs spécialistes des médias dans le monde francophone.',
        ],
        'en' => [
            'title' => 'About',
            'text1' => 'Tidiane DIOH has been an International Civil Servant, Media Programme Manager at the International Organisation of La Francophonie (OIF) since March 2004.',
            'text2' => 'He is today considered by many observers as one of the best media specialists in the French-speaking world.',
        ],
    ];
    $t = $texts[$currentLang];
@endphp

<section id="about" class="section about">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-reveal>{{ $t['title'] }}</h2>
            <div class="section-divider" data-reveal></div>
        </div>
        <div class="about-content">
            <div class="about-text" data-reveal>
                <p>{{ $t['text1'] }}</p>
                <p>{{ $t['text2'] }}</p>
            </div>
        </div>
    </div>
</section>

