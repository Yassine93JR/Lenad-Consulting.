@echo off
chcp 65001 >nul
echo ========================================
echo   VÉRIFICATION ET INSTALLATION
echo ========================================
echo.

REM Vérifier Node.js
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est PAS installé !
    echo.
    echo ========================================
    echo   INSTALLATION DE NODE.JS REQUISE
    echo ========================================
    echo.
    echo 1. Allez sur : https://nodejs.org/
    echo 2. Téléchargez la version LTS (Long Term Support)
    echo 3. Installez en suivant les instructions
    echo 4. IMPORTANT : Cochez "Add to PATH" pendant l'installation
    echo 5. Redémarrez ce script après l'installation
    echo.
    echo Appuyez sur une touche pour ouvrir le site de téléchargement...
    pause >nul
    start https://nodejs.org/
    exit /b 1
)

echo [OK] Node.js est installé
node --version
npm --version
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo [INFO] Installation des dépendances...
    echo Cela peut prendre 2-5 minutes, ne fermez pas cette fenêtre !
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERREUR] L'installation a échoué !
        echo Essayez : npm install --legacy-peer-deps
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dépendances installées !
    echo.
) else (
    echo [OK] Dépendances déjà installées
    echo.
)

REM Lancer le serveur
echo ========================================
echo   LANCEMENT DU SITE
echo ========================================
echo.
echo Le site sera disponible sur : http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.
echo ========================================
echo.

call npm run dev

pause

