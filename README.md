# 🚀 Lenad Consulting - Site Web Premium

Site web ultra-professionnel et immersif pour Tidiane Dioh & Lenad Consulting, développé avec Next.js 14, GSAP, Framer Motion et Lenis.

## ✨ Fonctionnalités Premium

- 🎨 **Design ultra-moderne** : Inspiré de poinciana.co et mgh-partners.com
- 🎬 **Animations avancées** : GSAP pour scroll animations, pinning, timelines
- 🌊 **Smooth scroll premium** : Lenis pour un défilement fluide et élégant
- 🖱️ **Cursor personnalisé** : Curseur follower avec effets interactifs
- 📱 **100% Responsive** : Mobile, tablette, desktop optimisés
- 🌐 **Multilingue** : FR/EN avec persistance
- 🖼️ **Galerie immersive** : 17 images avec lightbox et effets de zoom
- ⚡ **Performance optimale** : Next.js 14 avec App Router
- 🎭 **Transitions de page** : Framer Motion pour des transitions fluides

## 🛠️ Technologies

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **GSAP** : Animations complexes et scroll triggers
- **Framer Motion** : Animations React et transitions
- **Lenis** : Smooth scroll premium
- **Tailwind CSS** : Styling utilitaire
- **React Hook Form + Zod** : Validation de formulaire
- **Next/Image** : Optimisation d'images

## 📦 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn ou pnpm

### Étapes

1. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

2. **Copier les images** (déjà fait si vous avez suivi les instructions)

Les images sont déjà copiées dans `public/images/lenad/` et le logo dans `public/images/logo.png`

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
lenad-consulting-premium/
├── app/
│   ├── layout.tsx          # Layout principal avec fonts
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── sections/           # Sections du site
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Services.tsx
│   │   ├── Publications.tsx
│   │   ├── Teaching.tsx
│   │   ├── Expertise.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx          # Navigation avec animations
│   ├── Footer.tsx          # Footer
│   ├── CursorFollower.tsx  # Curseur personnalisé
│   ├── SmoothScrollProvider.tsx  # Lenis wrapper
│   ├── PageTransition.tsx  # Transitions de page
│   └── LanguageSwitcher.tsx # Sélecteur de langue
├── public/
│   └── images/
│       ├── lenad/          # 17 images de la galerie
│       └── logo.png        # Logo
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Sections du Site

1. **Hero** : Section immersive avec parallaxe et animations d'entrée
2. **À Propos** : Présentation avec animations reveal
3. **Parcours** : Timeline animée avec GSAP
4. **Services** : Cartes interactives avec hover avancés
5. **Publications** : Les 3 ouvrages principaux
6. **Enseignement** : Domaines d'enseignement
7. **Expertise** : Grille animée des compétences
8. **Galerie** : 17 images avec lightbox et effets de zoom
9. **Contact** : Formulaire avec validation Zod

## 🚀 Build pour Production

### Build

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

### Démarrer en production

```bash
npm start
# ou
yarn start
# ou
pnpm start
```

### Export statique (optionnel)

Pour exporter en site statique, modifiez `next.config.js` :

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}
```

Puis :

```bash
npm run build
```

Les fichiers seront dans le dossier `out/`.

## 🎯 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` :

```javascript
colors: {
  primary: '#2c3e50',
  secondary: '#34495e',
  accent: '#3498db',
  // ...
}
```

### Ajouter du contenu

1. **Modifier une section** : Éditez le fichier correspondant dans `components/sections/`
2. **Ajouter une section** : Créez un nouveau composant dans `components/sections/` et ajoutez-le dans `app/page.tsx`
3. **Modifier les traductions** : Le système multilingue est géré via `LanguageSwitcher.tsx`

### Modifier les animations GSAP

Les animations GSAP sont dans chaque composant de section. Exemple dans `components/sections/Hero.tsx` :

```typescript
gsap.from(titleRef.current, {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: 'power4.out',
})
```

## 📱 Responsive

Le site est entièrement responsive avec breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## ⚡ Optimisations

- **Images** : Next/Image pour optimisation automatique
- **Code splitting** : Automatique avec Next.js
- **Lazy loading** : Images et composants
- **Fonts** : Google Fonts avec `next/font` pour optimisation

## 🐛 Dépannage

### Erreur "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Images ne s'affichent pas

Vérifiez que les images sont dans `public/images/lenad/` avec les noms corrects : `lenad (1).jpeg` à `lenad (17).jpeg`

### Animations GSAP ne fonctionnent pas

Assurez-vous que GSAP est bien installé :
```bash
npm install gsap
```

## 📄 Licence

© 2024 Tidiane Dioh & Lenad Consulting. Tous droits réservés.

## 🎓 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://github.com/studio-freight/lenis)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Développé avec ❤️ pour créer le meilleur site web possible**
