@echo off
chcp 65001 >nul
echo ========================================
echo   OUVERTURE DU SITE
echo ========================================
echo.
echo Ouverture du site dans votre navigateur...
echo.

REM Ouvrir index.html dans le navigateur par défaut
start "" "%~dp0index.html"

echo.
echo Le site devrait s'ouvrir dans votre navigateur !
echo.
echo Si ça ne s'ouvre pas automatiquement :
echo 1. Ouvrez votre navigateur (Chrome, Firefox, Edge)
echo 2. Appuyez sur Ctrl+O
echo 3. Naviguez vers ce dossier
echo 4. Sélectionnez "index.html"
echo.
pause

