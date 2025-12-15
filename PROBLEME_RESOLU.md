# ❌ Problème : ERR_CONNECTION_REFUSED

## 🔍 Cause du Problème

Le message "ERR_CONNECTION_REFUSED" signifie que **Node.js n'est pas installé** ou que le serveur n'a pas démarré.

## ✅ Solution Étape par Étape

### ÉTAPE 1 : Installer Node.js

1. **Allez sur** : https://nodejs.org/
2. **Téléchargez** la version **LTS** (Long Term Support) - bouton vert
3. **Installez** en double-cliquant sur le fichier téléchargé
4. **IMPORTANT** : Pendant l'installation, cochez **"Add to PATH"**
5. **Terminez** l'installation
6. **Redémarrez** votre ordinateur (ou au moins fermez et rouvrez PowerShell)

### ÉTAPE 2 : Vérifier l'Installation

Ouvrez PowerShell et tapez :

```powershell
node --version
npm --version
```

Si vous voyez des numéros (ex: `v20.10.0`), c'est bon ! ✅

### ÉTAPE 3 : Installer les Dépendances

Dans PowerShell, allez dans le dossier :

```powershell
cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"
```

Puis installez :

```powershell
npm install
```

**Attendez 2-5 minutes** jusqu'à voir "added X packages"

### ÉTAPE 4 : Lancer le Site

```powershell
npm run dev
```

Vous devriez voir :
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
✓ Ready in 2.3s
```

### ÉTAPE 5 : Ouvrir dans le Navigateur

Ouvrez votre navigateur et allez à :

```
http://localhost:3000
```

---

## 🚀 Méthode Automatique

**Double-cliquez sur** : `VERIFIER_ET_INSTALLER.bat`

Ce script :
- ✅ Vérifie si Node.js est installé
- ✅ Vous guide pour l'installer si nécessaire
- ✅ Installe les dépendances automatiquement
- ✅ Lance le site

---

## 📋 Checklist

- [ ] Node.js installé depuis https://nodejs.org/
- [ ] "Add to PATH" coché pendant l'installation
- [ ] Ordinateur redémarré (ou PowerShell fermé/rouvert)
- [ ] `node --version` fonctionne
- [ ] `npm install` terminé
- [ ] `npm run dev` lancé
- [ ] Navigateur ouvert sur http://localhost:3000

---

## 🆘 Si Ça Ne Marche Toujours Pas

### Vérifier que Node.js est dans le PATH

```powershell
where node
```

Si ça ne trouve rien, Node.js n'est pas dans le PATH.

**Solution** : Réinstallez Node.js en cochant "Add to PATH"

### Réinstaller les Dépendances

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Utiliser un Autre Port

Si le port 3000 est occupé :

```powershell
npm run dev -- -p 3001
```

Puis ouvrez : http://localhost:3001

---

## 💡 Alternative : Version HTML Simple

Si vous voulez voir le site SANS installer Node.js, vous pouvez utiliser la version HTML simple déjà créée :

1. Ouvrez le fichier `index.html` directement dans votre navigateur
2. OU utilisez un serveur HTTP simple

Mais la version Next.js avec animations nécessite Node.js.

---

**Une fois Node.js installé, tout fonctionnera ! 🚀**

