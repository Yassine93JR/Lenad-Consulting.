# ⚡ DÉMARRAGE RAPIDE - 3 COMMANDES

## 🎯 Méthode la Plus Simple

### Option 1 : Double-cliquer sur le fichier
👉 **Double-cliquez sur `LANCEZ_MOI.bat`** dans l'explorateur Windows

C'est tout ! Le script fait tout automatiquement.

---

### Option 2 : Commandes manuelles

Ouvrez PowerShell et copiez-collez ces 3 commandes une par une :

#### 1️⃣ Aller dans le dossier
```powershell
cd "C:\Users\wiwin\OneDrive\Desktop\Lenad Consulting texte"
```

#### 2️⃣ Installer (1ère fois seulement - prend 2-5 min)
```powershell
npm install
```

#### 3️⃣ Lancer le site
```powershell
npm run dev
```

#### 4️⃣ Ouvrir dans le navigateur
Ouvrez : **http://localhost:3000**

---

## 📋 Checklist Rapide

- [ ] Node.js installé ? (`node --version` dans PowerShell)
- [ ] Vous êtes dans le bon dossier
- [ ] `npm install` terminé (1ère fois)
- [ ] `npm run dev` lancé
- [ ] Navigateur ouvert sur http://localhost:3000

---

## 🆘 Problème ?

### "npm n'est pas reconnu"
→ Installez Node.js : https://nodejs.org/

### "Port 3000 déjà utilisé"
→ Utilisez : `npm run dev -- -p 3001`
→ Puis ouvrez : http://localhost:3001

### "Module not found"
→ Réinstallez :
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📚 Plus de Détails

- `GUIDE_LANCEMENT.md` - Guide complet étape par étape
- `COMMANDES_COMPLètes.txt` - Toutes les commandes
- `COPIEZ_COLLEZ.txt` - Commandes à copier-coller
- `README.md` - Documentation technique complète

---

**C'est parti ! 🚀**

