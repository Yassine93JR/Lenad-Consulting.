# 🚀 Guide PHP - Site Lenad Consulting

## ⚡ Solution la Plus Rapide

### Option 1 : Double-cliquer (SANS installation)

**Double-cliquez sur** : `LANCEZ_PHP_SIMPLE.bat`

Le fichier `index.php` s'ouvrira dans votre navigateur.

---

## 🔧 Solution Complète (AVEC PHP)

### Étape 1 : Installer PHP

**Option A : PHP seul**
1. Allez sur : https://www.php.net/downloads.php
2. Téléchargez la version Windows
3. Extrayez dans `C:\php`
4. Ajoutez `C:\php` au PATH système

**Option B : XAMPP (RECOMMANDÉ - Plus facile)**
1. Allez sur : https://www.apachefriends.org/
2. Téléchargez XAMPP
3. Installez-le
4. PHP sera automatiquement configuré

### Étape 2 : Lancer le Site

**Méthode 1 : Script automatique**
```
Double-cliquez sur : LANCEZ_PHP.bat
```

**Méthode 2 : Ligne de commande**
```powershell
cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"
php -S localhost:8000
```

### Étape 3 : Ouvrir dans le Navigateur

Ouvrez : **http://localhost:8000**

---

## 📁 Structure PHP

```
php/
├── config/
│   ├── config.php          # Configuration
│   └── translations.php     # Traductions FR/EN
├── includes/
│   ├── header.php          # Header avec navigation
│   └── footer.php          # Footer
├── sections/
│   ├── hero.php            # Section Hero
│   ├── about.php           # À propos
│   ├── career.php          # Parcours
│   ├── services.php        # Services
│   ├── publications.php    # Publications
│   ├── teaching.php        # Enseignement
│   ├── expertise.php      # Expertise
│   ├── gallery.php         # Galerie
│   └── contact.php         # Contact avec formulaire PHP
└── assets/
    ├── css/                # Styles
    ├── js/                 # JavaScript (GSAP, Lenis, etc.)
    └── images/             # Images
```

---

## ✨ Fonctionnalités PHP

- ✅ **Multilingue** : Sessions PHP pour FR/EN
- ✅ **Formulaire de contact** : Traitement PHP fonctionnel
- ✅ **Structure modulaire** : Fichiers séparés et réutilisables
- ✅ **Sécurité** : Validation et sanitization des données
- ✅ **Animations** : GSAP, Lenis, Framer Motion (côté client)

---

## 🎨 Animations Incluses

- GSAP ScrollTrigger
- Lenis Smooth Scroll
- Custom Cursor Follower
- Reveal animations
- Parallaxe
- Hover effects avancés
- Lightbox galerie
- Transitions de page

---

## 📝 Modifier le Contenu

### Changer le texte
Éditez les fichiers dans `php/sections/`

### Ajouter des traductions
Éditez `php/config/translations.php`

### Modifier les styles
Éditez `php/assets/css/style.css`

---

## 🆘 Problèmes

### "php n'est pas reconnu"
→ Installez PHP ou XAMPP

### Le site s'affiche mais les images ne chargent pas
→ Vérifiez que les images sont dans `php/assets/images/`

### Le formulaire ne fonctionne pas
→ Vérifiez que PHP est bien lancé avec `php -S localhost:8000`

---

**Le site PHP est prêt ! 🚀**

