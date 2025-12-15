<?php
/**
 * Configuration du site Lenad Consulting
 */

// Configuration de base
define('SITE_NAME', 'Tidiane Dioh & Lenad Consulting');
define('SITE_URL', 'http://localhost');
define('SITE_EMAIL', 'contact@lenad-consulting.com');

// Langue par défaut
define('DEFAULT_LANG', 'fr');

// Démarrer la session pour le multilingue
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Définir la langue
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = DEFAULT_LANG;
}

// Changer la langue si demandé
if (isset($_GET['lang']) && in_array($_GET['lang'], ['fr', 'en'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

$currentLang = $_SESSION['lang'];

// Chemins
define('BASE_PATH', dirname(__DIR__));
define('ASSETS_PATH', '/assets');
define('IMAGES_PATH', ASSETS_PATH . '/images');

// Timezone
date_default_timezone_set('Europe/Paris');

// Fonction de traduction
function t($key, $lang = null) {
    global $currentLang;
    $lang = $lang ?? $currentLang;
    
    $translations = require BASE_PATH . '/config/translations.php';
    
    $keys = explode('.', $key);
    $value = $translations[$lang] ?? [];
    
    foreach ($keys as $k) {
        $value = $value[$k] ?? null;
        if ($value === null) {
            return $key;
        }
    }
    
    return $value;
}

// Fonction pour obtenir l'URL de la langue
function langUrl($lang) {
    $currentUrl = $_SERVER['REQUEST_URI'];
    $urlParts = parse_url($currentUrl);
    $path = $urlParts['path'] ?? '/';
    $query = $urlParts['query'] ?? '';
    
    // Retirer le paramètre lang existant
    parse_str($query, $params);
    unset($params['lang']);
    $params['lang'] = $lang;
    
    $newQuery = http_build_query($params);
    return $path . ($newQuery ? '?' . $newQuery : '?lang=' . $lang);
}
?>

