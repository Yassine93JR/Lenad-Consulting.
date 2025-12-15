# 🚀 Guide d'Installation Rapide

## Pour les débutants

### Étape 1 : Installer Node.js

1. Allez sur [https://nodejs.org/](https://nodejs.org/)
2. Téléchargez la version LTS (Long Term Support)
3. Installez Node.js en suivant les instructions
4. Vérifiez l'installation en ouvrant un terminal et tapez :
   ```bash
   node --version
   npm --version
   ```

### Étape 2 : Ouvrir le projet

1. Ouvrez un terminal (PowerShell sur Windows, Terminal sur Mac)
2. Naviguez vers le dossier du projet :
   ```bash
   cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"
   ```

### Étape 3 : Installer les dépendances

Dans le terminal, tapez :
```bash
npm install
```

Cette commande va installer tous les packages nécessaires (Next.js, GSAP, Framer Motion, etc.). Cela peut prendre 2-5 minutes.

### Étape 4 : Lancer le site

Une fois l'installation terminée, tapez :
```bash
npm run dev
```

Vous devriez voir :
```
✓ Ready in 2.3s
○ Local:        http://localhost:3000
```

### Étape 5 : Ouvrir dans le navigateur

Ouvrez votre navigateur (Chrome, Firefox, Edge) et allez à :
```
http://localhost:3000
```

🎉 **Le site est maintenant en ligne !**

## Commandes utiles

- `npm run dev` : Lancer le site en développement
- `npm run build` : Créer la version de production
- `npm start` : Lancer la version de production
- `Ctrl + C` : Arrêter le serveur

## Problèmes courants

### "npm n'est pas reconnu"
→ Node.js n'est pas installé ou pas dans le PATH. Réinstallez Node.js.

### "Port 3000 déjà utilisé"
→ Un autre programme utilise le port 3000. Fermez-le ou utilisez un autre port :
```bash
npm run dev -- -p 3001
```

### "Module not found"
→ Supprimez node_modules et réinstallez :
```bash
rm -rf node_modules package-lock.json
npm install
```

## Structure des fichiers

- `app/` : Pages et layout
- `components/` : Composants React
- `public/images/` : Images du site
- `package.json` : Dépendances du projet

## Modifier le contenu

Pour modifier le texte :
1. Ouvrez les fichiers dans `components/sections/`
2. Modifiez le texte directement
3. Le site se met à jour automatiquement (hot reload)

## Besoin d'aide ?

Consultez le README.md pour plus de détails techniques.

