<section id="gallery" class="section gallery">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-reveal>Galerie</h2>
            <div class="section-divider" data-reveal></div>
        </div>
        
        <div class="gallery-grid" id="gallery-grid">
            @for($i = 1; $i <= 17; $i++)
                <div class="gallery-item" data-reveal>
                    <div class="gallery-image-wrapper">
                        <img src="{{ asset("images/lenad/lenad ($i).jpeg") }}" alt="Image {{ $i }}" loading="lazy">
                        <div class="gallery-overlay">
                            <span class="gallery-zoom">🔍</span>
                        </div>
                    </div>
                </div>
            @endfor
        </div>
    </div>
</section>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
    <span class="lightbox-close" id="lightbox-close">&times;</span>
    <img src="" alt="" id="lightbox-img">
    <button class="lightbox-prev" id="lightbox-prev">‹</button>
    <button class="lightbox-next" id="lightbox-next">›</button>
</div>

