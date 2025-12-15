# 🚀 Guide Complet de Lancement - Étape par Étape

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir **Node.js** installé.

### Vérifier si Node.js est installé

Ouvrez PowerShell (ou Terminal) et tapez :

```powershell
node --version
npm --version
```

Si vous voyez des numéros de version (ex: `v20.10.0`), c'est bon ! ✅

Si vous voyez une erreur, installez Node.js :
1. Allez sur https://nodejs.org/
2. Téléchargez la version **LTS** (Long Term Support)
3. Installez en suivant les instructions
4. Redémarrez votre terminal

---

## 🎯 ÉTAPES COMPLÈTES

### ÉTAPE 1 : Ouvrir le Terminal

1. Appuyez sur `Windows + R`
2. Tapez `powershell` et appuyez sur `Entrée`
3. OU cliquez droit sur le dossier du projet → "Ouvrir dans PowerShell"

### ÉTAPE 2 : Se Placer dans le Bon Dossier

Dans PowerShell, tapez exactement :

```powershell
cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"
```

Appuyez sur `Entrée`.

Vérifiez que vous êtes au bon endroit :

```powershell
pwd
```

Vous devriez voir : `C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte`

### ÉTAPE 3 : Vérifier les Fichiers

Vérifiez que les fichiers sont bien là :

```powershell
dir
```

Vous devriez voir : `package.json`, `next.config.js`, `app`, `components`, etc.

### ÉTAPE 4 : Installer les Dépendances (PREMIÈRE FOIS UNIQUEMENT)

⚠️ **Cette étape prend 2-5 minutes. Ne fermez pas le terminal !**

Tapez :

```powershell
npm install
```

Appuyez sur `Entrée` et attendez...

Vous verrez beaucoup de texte défiler. C'est normal ! Attendez jusqu'à voir :
```
added 500+ packages
```

✅ **Si vous voyez "added X packages" à la fin, c'est réussi !**

❌ **Si vous voyez des erreurs**, essayez :
```powershell
npm install --legacy-peer-deps
```

### ÉTAPE 5 : Lancer le Site

Une fois l'installation terminée, tapez :

```powershell
npm run dev
```

Appuyez sur `Entrée`.

Vous devriez voir quelque chose comme :
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
✓ Ready in 2.3s
```

✅ **Le site est maintenant en ligne !**

### ÉTAPE 6 : Ouvrir dans le Navigateur

1. Ouvrez votre navigateur (Chrome, Firefox, Edge)
2. Allez à cette adresse exacte :

```
http://localhost:3000
```

🎉 **Votre site devrait s'afficher !**

---

## 📝 Commandes Utiles

### Arrêter le Serveur

Dans le terminal où le site tourne, appuyez sur :
```
Ctrl + C
```

Puis confirmez avec `Y` et `Entrée`.

### Relancer le Site

Après l'avoir arrêté, relancez avec :

```powershell
npm run dev
```

### Voir les Erreurs

Si quelque chose ne fonctionne pas, regardez les messages dans le terminal. Les erreurs sont en rouge.

---

## 🔧 Problèmes Courants

### ❌ "npm n'est pas reconnu"

**Solution :** Node.js n'est pas installé ou pas dans le PATH.
1. Réinstallez Node.js depuis https://nodejs.org/
2. Cochez "Add to PATH" pendant l'installation
3. Redémarrez le terminal

### ❌ "Port 3000 déjà utilisé"

**Solution :** Un autre programme utilise le port 3000.

Option 1 - Fermer l'autre programme :
```powershell
# Trouver ce qui utilise le port
netstat -ano | findstr :3000
# Tuer le processus (remplacez PID par le numéro trouvé)
taskkill /PID [PID] /F
```

Option 2 - Utiliser un autre port :
```powershell
npm run dev -- -p 3001
```
Puis ouvrez : `http://localhost:3001`

### ❌ "Module not found"

**Solution :** Les dépendances ne sont pas installées correctement.

```powershell
# Supprimer et réinstaller
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### ❌ "Cannot find module 'next'"

**Solution :** Réinstallez les dépendances :

```powershell
npm install
```

### ❌ Les images ne s'affichent pas

**Vérifiez :**
1. Les images sont dans `public/images/lenad/`
2. Les noms sont exacts : `lenad (1).jpeg` à `lenad (17).jpeg`
3. Le logo est dans `public/images/logo.png`

---

## 🎨 Modifier le Site

### Changer le Texte

1. Ouvrez le fichier dans `components/sections/`
2. Modifiez le texte
3. Sauvegardez (Ctrl + S)
4. Le site se met à jour automatiquement dans le navigateur !

### Changer les Couleurs

1. Ouvrez `tailwind.config.js`
2. Modifiez les couleurs dans la section `colors:`
3. Sauvegardez
4. Le site se met à jour automatiquement

---

## 🚀 Créer la Version de Production

Pour créer une version optimisée du site :

```powershell
npm run build
```

Cela crée un dossier `.next` avec la version optimisée.

Pour la lancer :

```powershell
npm start
```

---

## 📦 Structure des Commandes

### Développement (ce que vous utilisez normalement)
```powershell
npm run dev
```
→ Site en mode développement avec hot reload

### Production (pour déployer)
```powershell
npm run build
npm start
```
→ Site optimisé pour la production

### Nettoyer
```powershell
# Supprimer les fichiers générés
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
```

---

## ✅ Checklist de Vérification

Avant de lancer, vérifiez :

- [ ] Node.js est installé (`node --version` fonctionne)
- [ ] Vous êtes dans le bon dossier
- [ ] Les fichiers `package.json` et `next.config.js` existent
- [ ] Les images sont dans `public/images/lenad/`
- [ ] Le logo est dans `public/images/logo.png`

---

## 🎯 Résumé Rapide

```powershell
# 1. Aller dans le dossier
cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"

# 2. Installer (1ère fois seulement)
npm install

# 3. Lancer
npm run dev

# 4. Ouvrir http://localhost:3000 dans le navigateur
```

---

## 💡 Astuces

- **Ne fermez pas le terminal** pendant que le site tourne
- **Laissez le terminal ouvert** pour voir les erreurs éventuelles
- **Le site se met à jour automatiquement** quand vous modifiez les fichiers
- **Ctrl + C** pour arrêter le serveur

---

## 🆘 Besoin d'Aide ?

Si vous avez des problèmes :

1. **Lisez les messages d'erreur** dans le terminal
2. **Vérifiez que Node.js est bien installé** : `node --version`
3. **Vérifiez que vous êtes dans le bon dossier** : `pwd`
4. **Essayez de réinstaller** : supprimez `node_modules` et refaites `npm install`

---

**Bon développement ! 🚀**

