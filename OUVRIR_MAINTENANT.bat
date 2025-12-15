@echo off
chcp 65001 >nul
title Ouverture du Site Lenad Consulting

echo.
echo ========================================
echo   OUVERTURE DU SITE
echo ========================================
echo.

REM Obtenir le chemin complet du fichier
set "HTML_FILE=%~dp0index.html"

REM Vérifier que le fichier existe
if not exist "%HTML_FILE%" (
    echo [ERREUR] Le fichier index.html n'est pas trouve !
    echo.
    echo Chemin recherche : %HTML_FILE%
    echo.
    pause
    exit /b 1
)

echo [OK] Fichier trouve : %HTML_FILE%
echo.
echo Ouverture dans le navigateur...
echo.

REM Ouvrir avec le navigateur par défaut
start "" "%HTML_FILE%"

REM Attendre un peu
timeout /t 2 /nobreak >nul

REM Essayer aussi avec les navigateurs courants
start msedge.exe "%HTML_FILE%" 2>nul
start chrome.exe "%HTML_FILE%" 2>nul
start firefox.exe "%HTML_FILE%" 2>nul

echo.
echo ========================================
echo   SITE OUVERT !
echo ========================================
echo.
echo Le site devrait s'ouvrir dans votre navigateur.
echo.
echo Si ce n'est pas le cas :
echo 1. Ouvrez votre navigateur manuellement
echo 2. Appuyez sur Ctrl+O
echo 3. Naviguez vers ce dossier
echo 4. Selectionnez index.html
echo.
echo Chemin du fichier :
echo %HTML_FILE%
echo.
pause

