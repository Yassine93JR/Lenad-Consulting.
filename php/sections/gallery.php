<section id="gallery" class="section gallery">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-reveal><?php echo t('nav.gallery'); ?></h2>
            <div class="section-divider" data-reveal></div>
        </div>
        
        <div class="gallery-grid" id="gallery-grid">
            <?php
            for ($i = 1; $i <= 17; $i++) {
                $imagePath = ASSETS_PATH . "/images/lenad/lenad ($i).jpeg";
                echo '<div class="gallery-item" data-reveal>';
                echo '<div class="gallery-image-wrapper">';
                echo '<img src="' . $imagePath . '" alt="Image ' . $i . '" loading="lazy">';
                echo '<div class="gallery-overlay">';
                echo '<span class="gallery-zoom">🔍</span>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
            }
            ?>
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

